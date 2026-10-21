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

// Shared form validation helpers
// Basic South African phone format: optional +27 or 0 prefix, then 9 digits,
// with optional spaces. Accepts formats like "082 123 4567", "0821234567",
// "+27 82 123 4567".
const PHONE_PATTERN = /^(\+27|0)[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{4}$/;

function showFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.toggle('field-invalid', Boolean(message));
}

function validateRequiredText(input, errorElement, label, minLength) {
  const value = input.value.trim();
  if (!value) {
    showFieldError(input, errorElement, label + ' is required.');
    return false;
  }
  if (minLength && value.length < minLength) {
    showFieldError(input, errorElement, label + ' must be at least ' + minLength + ' characters.');
    return false;
  }
  showFieldError(input, errorElement, '');
  return true;
}

function validateEmail(input, errorElement) {
  const value = input.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    showFieldError(input, errorElement, 'Email address is required.');
    return false;
  }
  if (!emailPattern.test(value)) {
    showFieldError(input, errorElement, 'Please enter a valid email address.');
    return false;
  }
  showFieldError(input, errorElement, '');
  return true;
}

function validatePhone(input, errorElement) {
  const value = input.value.trim();
  // Phone is optional on the enquiry form, so an empty value is valid
  if (!value) {
    showFieldError(input, errorElement, '');
    return true;
  }
  if (!PHONE_PATTERN.test(value)) {
    showFieldError(input, errorElement, 'Please enter a valid SA phone number, e.g. 082 123 4567.');
    return false;
  }
  showFieldError(input, errorElement, '');
  return true;
}

function validateSelect(select, errorElement, label) {
  if (!select.value) {
    showFieldError(select, errorElement, 'Please select ' + label + '.');
    return false;
  }
  showFieldError(select, errorElement, '');
  return true;
}

// --------------------------------------------------------------------------
// Enquiry Form (enquiry.html)
// --------------------------------------------------------------------------
// Validates input client-side, then - since there is no live backend -
// simulates a server response tailored to the enquiry type selected,
// giving the visitor relevant info on cost, availability, or next steps.
(function initEnquiryForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) {
    return;
  }

  const fullname = document.getElementById('fullname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const enquiryType = document.getElementById('enquiry-type');
  const message = document.getElementById('message');
  const responseBox = document.getElementById('enquiry-response');

  const responses = {
    adopt: 'Thanks for your interest in adopting! Adoption fees are R850 (includes sterilisation, vaccination, and microchipping). Browse our Available Dogs page and use this form again with a dog\'s name in your message to start the process - a team member will confirm availability within 2 business days.',
    foster: 'Thank you for offering to foster! Fostering is free - we cover food and vet costs for foster dogs. A coordinator will contact you within 2 business days to discuss current fostering needs and arrange a home visit.',
    volunteer: 'We would love your help! Volunteer shifts run most weekdays and weekends at our Midrand shelter. A volunteer coordinator will be in touch within 2 business days with upcoming shift times.',
    sponsor: 'Thank you for your generosity! Monthly sponsorships start from R100 and go directly to food and veterinary costs. We will email you banking details and sponsorship options within 2 business days.'
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // AJAX-style: no full page reload

    const isFullnameValid = validateRequiredText(fullname, document.getElementById('fullname-error'), 'Full name', 2);
    const isEmailValid = validateEmail(email, document.getElementById('email-error'));
    const isPhoneValid = validatePhone(phone, document.getElementById('phone-error'));
    const isTypeValid = validateSelect(enquiryType, document.getElementById('enquiry-type-error'), 'what you are interested in');
    const isMessageValid = validateRequiredText(message, document.getElementById('message-error'), 'Message', 10);

    const isFormValid = isFullnameValid && isEmailValid && isPhoneValid && isTypeValid && isMessageValid;

    if (!isFormValid) {
      responseBox.hidden = true;
      return;
    }

    const responseText = responses[enquiryType.value] || 'Thank you for your enquiry - a member of our team will be in touch soon.';

    responseBox.innerHTML =
      '<p><strong>Thanks, ' + fullname.value.trim() + '!</strong></p>' +
      '<p>' + responseText + '</p>';
    responseBox.hidden = false;
    form.reset();
  });
})();

// --------------------------------------------------------------------------
// Contact Form (contact.html)
// --------------------------------------------------------------------------
// Validates input client-side, then compiles it into a pre-filled mailto
// link so the visitor can send the message as a real email from their own
// email client (there is no backend to send it automatically).
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  const fullname = document.getElementById('c-fullname');
  const email = document.getElementById('c-email');
  const message = document.getElementById('c-message');
  const responseBox = document.getElementById('contact-response');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // AJAX-style: no full page reload

    const isFullnameValid = validateRequiredText(fullname, document.getElementById('c-fullname-error'), 'Full name', 2);
    const isEmailValid = validateEmail(email, document.getElementById('c-email-error'));
    const isMessageValid = validateRequiredText(message, document.getElementById('c-message-error'), 'Message', 10);

    const isFormValid = isFullnameValid && isEmailValid && isMessageValid;

    if (!isFormValid) {
      responseBox.hidden = true;
      return;
    }

    const recipient = 'info@pawsrus-sa.co.za';
    const subject = encodeURIComponent('Website enquiry from ' + fullname.value.trim());
    const body = encodeURIComponent(
      'Name: ' + fullname.value.trim() + '\n' +
      'Email: ' + email.value.trim() + '\n\n' +
      message.value.trim()
    );
    const mailtoLink = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

    responseBox.innerHTML =
      '<p><strong>Thanks, ' + fullname.value.trim() + '!</strong></p>' +
      '<p>Click the button below to send this message from your own email app:</p>' +
      '<a href="' + mailtoLink + '" class="btn btn-primary">Send Email</a>';
    responseBox.hidden = false;
    form.reset();
  });
})();


