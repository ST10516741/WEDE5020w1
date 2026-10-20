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
