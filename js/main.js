(function initDogFilter() {
  const filterBar = document.querySelector('.filter-bar');
  const dogGallery = document.querySelector('.dog-gallery');

  // Only run this on pages that actually have a filter bar and gallery
  // (i.e. services.html) so this script can be safely shared across pages.
  if (!filterBar || !dogGallery) {
    return;
  }

  const filterButtons = filterBar.querySelectorAll('.filter-btn');
  const dogCards = dogGallery.querySelectorAll('.dog-card');

  function applyFilter(filterValue) {
    dogCards.forEach(function (card) {
      const matches = filterValue === 'all' || card.dataset.age === filterValue;

      if (matches) {
        card.classList.remove('dog-card-hidden');
      } else {
        card.classList.add('dog-card-hidden');
      }
    });
  }

  function setActiveButton(selectedButton) {
    filterButtons.forEach(function (button) {
      const isSelected = button === selectedButton;
      button.classList.toggle('active', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
  }

  filterButtons.forEach(function (button) {
    // Reflect initial active state in aria-pressed for screen readers
    button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');

    button.addEventListener('click', function () {
      setActiveButton(button);
      applyFilter(button.dataset.filter);
    });
  });
})();

// Dog Photo Lightbox (Available Dogs page

(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const dogGallery = document.querySelector('.dog-gallery');

  if (!lightbox || !dogGallery) {
    return;
  }

  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  // Build a list of every dog card's image link, in document order, so we
  // can navigate prev/next regardless of which filter is currently active.
  const imageLinks = Array.from(dogGallery.querySelectorAll('.dog-card-image'));
  let currentIndex = 0;
  let lastFocusedElement = null;

  function getCaptionFor(link) {
    const card = link.closest('.dog-card');
    const name = card ? card.querySelector('h3') : null;
    return name ? name.textContent.trim() : '';
  }

  function showImageAt(index) {
    // Wrap around so Next/Previous loop through the full gallery
    currentIndex = (index + imageLinks.length) % imageLinks.length;
    const link = imageLinks[currentIndex];
    const img = link.querySelector('img');

    lightboxImage.src = link.getAttribute('href');
    lightboxImage.alt = img ? img.alt : '';
    lightboxCaption.textContent = getCaptionFor(link);
  }

  function openLightbox(index) {
    lastFocusedElement = document.activeElement;
    showImageAt(index);
    lightbox.classList.add('lightbox-open');
    lightbox.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('lightbox-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  imageLinks.forEach(function (link, index) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // stop the default "open in new tab" behaviour
      openLightbox(index);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', function () { showImageAt(currentIndex - 1); });
  nextBtn.addEventListener('click', function () { showImageAt(currentIndex + 1); });

  // Click on the dark overlay (outside the image) closes the lightbox
  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard support: Escape closes, Left/Right arrows navigate
  document.addEventListener('keydown', function (event) {
    if (!lightbox.classList.contains('lightbox-open')) {
      return;
    }
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      showImageAt(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      showImageAt(currentIndex + 1);
    }
  });
})();

