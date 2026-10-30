# Changelog
All notable changes to the Paws R Us (SA) Website project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# PART 3
## [3.7] - [31/10/2026]
### Added
- `CHANGELOG.md` as a separate file, with dated version entries grouped under
Added, Changed and Fixed (previously the changelog sat inside the README)
- README sections for goals and KPIs, target audience, features, technical
implementation, content strategy, SEO (on-page and off-page strategy),
performance and security, known limitations and a "Working through
Feedback from Part 2" section
### Changed
- Updated the README reference list to include Leaflet, OpenStreetMap,
Netlify, Google lazy-loading guidance and Sitemaps.org
- Updated the responsiveness screenshots section to use the images in the
`responsiveness/` folder
## [3.6] - [30/10/2026]
### Added
- `loading="lazy"` on the six dog photos and three Happy Tails photos in
`services.html`, so images load as the visitor scrolls
### Changed
- Photo links in `services.html` now use `rel="noopener noreferrer"` instead
of `rel="noopener"`
- The homepage hero image was deliberately left without lazy loading because
it is visible as soon as the page opens
## [3.5] - [28/10/2026]
### Added
- Canonical URL and Open Graph tags (`og:title`, `og:description`,
`og:type`, `og:url`) on `index.html`, `about.html` and `enquiry.html`
- Internal link from the Enquire page intro to the Available Dogs page
### Changed
- Homepage hero copy now includes the phrase "adopt a dog in Gauteng"

- Alt text for the hero and team photos is now more descriptive
## [3.4] - [27/10/2026]
### Added
- `robots.txt` allowing all crawlers and pointing to the sitemap
- `sitemap.xml` listing all five pages with `lastmod`, `changefreq` and
`priority` values
- Deployment to Netlify at https://paws-r-us-sa.netlify.app (renamed from the
automatically generated site name)
### Changed
- Replaced the placeholder domain in `robots.txt` and `sitemap.xml` with the
live Netlify URL
## [3.3] - [23/10/2026]
### Added
- Interactive Leaflet map on `contact.html` with a marker and popup for each
location (Midrand shelter and Fourways community area)
- Leaflet 1.9.4 CSS and JavaScript loaded from unpkg with integrity hashes,
on the Contact page only
- Map styling (`.locations-map`): 400px high on desktop, 300px on mobile
### Changed
- Replaced the "map to be embedded in Part 3" placeholder with the map
- The map code runs only when the map container exists and Leaflet has
loaded, so a failed library load does not break the rest of the page
### Known issue
- OpenStreetMap tile servers can refuse requests from pages opened directly
from a local file; the map is intended to be viewed on the deployed site
## [3.2] - [22/10/2026]
### Added
- JavaScript validation for the Enquiry and Contact forms: name length,
email format, South African phone format (enquiry form), dropdown
selection and minimum message length
- Inline error messages under each field and a highlighted border on invalid
fields
- Enquiry form response tailored to the selected enquiry type (adopt,
foster, volunteer, sponsor), covering cost and next steps
- Contact form response with a "Send Email" button that opens a pre-filled
`mailto:` link (recipient, subject and message body)

- Form submission handled in JavaScript with `event.preventDefault()`, so
the page does not reload
- `aria-live` regions so screen readers announce the response
### Changed
- Added `novalidate` to both forms so the custom messages show instead of
the browser's default pop-ups
- ## [3.1] - [20/10/2026]

### Added
- Dog gallery filter (JavaScript): clicking a filter button (All Dogs /
  Puppies / Young Adults / Adults / Seniors) now shows only the matching
  dog cards, toggling a `.dog-card-hidden` class and updating
  `aria-pressed` on each button for accessibility
- Lightbox gallery for dog photos: clicking a dog's photo now opens it in
  an in-page overlay instead of a new browser tab, with previous/next
  navigation, a close button, click-outside-to-close, and full keyboard
  support (Escape to close, Left/Right arrows to navigate)
- Client-side form validation (JavaScript) for both the Enquiry and
  Contact forms: validates full name length, email format, SA phone
  number format (enquiry form), dropdown selection, and minimum message
  length, with field-specific inline error messages and a highlighted
  border on invalid fields
- Tailored response on the Enquiry form: once validated, the visitor sees
  a response specific to their selected enquiry type (adopt / foster /
  volunteer / sponsor) with relevant cost, availability, and next-step
  information
- Compiled email response on the Contact form: once validated, the
  visitor is shown a "Send Email" button linking to a pre-filled
  `mailto:` address, subject, and message body, allowing them to send
  the enquiry via their own email client
- Both forms now submit via JavaScript (`event.preventDefault()`)
  instead of reloading the page, satisfying an AJAX-style submission
  flow without requiring a backend

### Changed
- Removed `target="_blank"` new-tab behaviour from dog card photo links
  in favour of the in-page lightbox
- Added `novalidate` to both forms so custom JavaScript messages display
  instead of the browser's default validation popups

### Fixed
- Corrected a Git tracking issue where staged changes to `css/style.css`
  and `js/main.js` had not been committed, so earlier Part 3 work was
  not appearing on GitHub despite local edits being complete

# PART 2
## [2.4] - [25/09/2026]
### Fixed
- Corrected dog card image cropping using `object-position: center`
- Restructured dog cards so the photo and "Adopt Me" button are separate
clickable elements, avoiding an invalid link-inside-a-link
- Fixed filter bar left-padding to align with the page content above it
- Fixed "Happy Tails" heading and intro paragraph alignment (centred above
the success story cards)
### Changed
- Increased colour saturation of the filter buttons for better visual contrast
- Restyled "Happy Tails" success cards to match the visual treatment of the
"How You Can Help" cards (background, shadow, hover lift)
- Reduced "Happy Tails" photo size using a 16:9 aspect ratio and a capped
grid width
## [2.3] - [27/09/2026]
### Added
- Static filter bar UI above the dog gallery (All / Puppies / Young Adults /
Adults / Seniors) — visual only; filtering logic planned for Part 3
- Status badge on each dog card ("Available" / "Pending Adoption")
- "Adopt Me" button on each dog card, linking to the enquiry page
- "Happy Tails" success stories section showcasing recently adopted dogs
### Changed
- Expanded the dog gallery from 3 to 6 dogs (added Nala, Rocky, Coco)

## [2.2] - [26/09/2026]
### Changed
- Increased colour saturation and coverage across the site: bold hotpink,
mint, and peach colour-blocked sections in place of pale accents only
- Added pill-shaped navigation bar
- Added "pressed button" shadow style to call-to-action buttons
- Added drifting soft-blob background shapes to the hero and page-intro
banners
## [2.1] - [24/09/2026]
### Added
- 'Baloo 2' rounded display font for headings
- Decorative sparkle/paw/heart accents on the homepage hero
- Tilted "sticker-style" photo and card treatments with soft shadows
- Animated hover states (lift, tilt, bounce) on buttons, cards, and nav links
- Gentle fade-up entrance animation on the hero section (respects
`prefers-reduced-motion`)
## [2.0] - [21/09/2026]
### Added
- External stylesheet (`css/style.css`) linked to all 5 HTML pages
- CSS reset, root colour variables, and base typography
- Typography styling using 'Fraunces' (headings) and 'Figtree' (body text),
with a responsive type scale using `clamp()`
- Layout structure using CSS Grid (dog gallery, help cards, mission/vision
grid) and Flexbox (header, hero section, forms)
- Visual styling: colour palette, rounded cards, box shadows
- Pseudo-classes (`:hover`, `:focus-visible`, `:active`) for interactive
elements
### Changed
- Implemented responsive design with two breakpoints (1024px tablet, 768px
mobile), converting multi-column layouts to single-column stacks and
reflowing the header/nav on smaller screens
## [1.1] - [19/09/2026]
### Changed
- Implemented corrections based on Part 1 feedback (85/100)

