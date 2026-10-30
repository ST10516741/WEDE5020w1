# Paws R Us (SA) Website
**By ST10516741**
**Live site:** https://paws-r-us-sa.netlify.app
## Project Overview
This project involves the development of a website for Paws R Us (SA), a registered non-profit dog rescue and
re-homing organisation operating in Gauteng, South Africa. The organisation rescues, shelters, and re-homes
abandoned and surrendered dogs, with a shelter site in Midrand and a community presence in Fourways.
The website was built as a three-part Portfolio of Evidence for the WEDE5020 module, with each part building
on the previous one: Part 1 (planning and HTML structure), Part 2 (CSS styling and responsive design) and Part 3
(JavaScript functionality, SEO and deployment).
The organisation's own website is no longer active, which leaves Facebook and third-party directory listings as its
only online presence. This website gives prospective adopters, fosters, volunteers and donors a single place to
learn about the organisation, meet the dogs and get in touch.

## Website Goals and Objectives

### Primary Goals

The website has been designed to achieve several key organisational objectives:
- **Dog Visibility**: Prospective adopters can browse dogs currently available for adoption, complete with
photos, temperament notes, and status (Available / Pending Adoption), without needing to contact the shelter
directly first.
- **Multiple Ways to Help**: The site clearly presents the different ways a visitor can get involved — adopting,
fostering, volunteering, or donating — rather than funnelling everyone toward a single action.
- **Enquiry and Contact Accessibility**: Dedicated enquiry and contact forms streamline communication
between the organisation and prospective adopters, fosters, volunteers, and donors.
- **Trust and Credibility**: A "Happy Tails" success stories section showcases previously adopted dogs, building
trust with visitors considering adoption.
- **Organisational Visibility**: The website increases the organisation's online presence and discoverability,
addressing the gap left by their defunct former website.

### Key Performance Indicators
The success of the website will be measured through:
- Number of enquiry form submissions (adoption, foster, volunteer, and sponsor enquiries)
- Monthly website traffic to gauge overall reach
- Click-through rate from the homepage to the Available Dogs page
- Bounce rate analysis to evaluate content relevance and engagement
## Target Audience
The website specifically caters to:
- Individuals and families in Gauteng seeking to adopt a rescue dog
- Prospective foster carers able to temporarily house a dog
- Volunteers interested in helping with day-to-day shelter operations
- Donors and sponsors wishing to support food, veterinary, and shelter costs
## Key Features and Functionality
### Essential Pages Structure
The website comprises five main pages, each serving specific user needs:
**Homepage (index.html)**: Acts as the digital front door, featuring a hero section with the organisation's
mission statement, prominent call-to-action buttons ("Meet our dogs" and "Get involved"), and a "How You Can
Help" section outlining the four main ways to support the organisation.
**About Us (about.html)**: Tells the organisation's story, including its founding in 2012, mission and vision
statements, and information about the team and foster network that makes the rescue work possible.
**Available Dogs (services.html)**: The core adoption listing page. Displays a gallery of dogs currently in care,
each with a photo, age/breed/temperament summary, a short description, and a status badge (Available /
Pending Adoption). Includes a filter bar (All / Puppies / Young Adults / Adults / Seniors) and a "Happy Tails"
section featuring recently adopted dogs.
**Enquire (enquiry.html)**: A dedicated enquiry form allowing visitors to indicate whether they are interested in
adopting, fostering, volunteering, or sponsoring, alongside their contact details and a free-text message field.
**Contact (contact.html)**: Provides direct contact information (email, WhatsApp), details of both organisation
locations (Midrand shelter and Fourways community area), and a general contact form.
### Core Functionality

**Mobile Responsiveness**: The website adapts across desktop, tablet, and mobile screen sizes using two
breakpoints (1024px and 768px), with multi-column layouts collapsing to single-column stacks on smaller
screens.
**Dog Filtering**: A static filter bar is in place on the Available Dogs page (All / Puppies /
Young Adults / Adults / Seniors); the interactive filtering logic will be implemented in Part 3 using JavaScript.
**Form Handling**: Enquiry and Contact forms use HTML5 validation attributes (`required`, `type="email"`, etc.)
to catch basic input errors before submission.
**Interactive Visual Design**: Hover and focus states throughout (buttons, nav links, dog cards) give the site a
lively, responsive feel appropriate to the organisation's warm, community-focused tone.
## Technical Implementation
Through the use of GitHub and VS Code, the website utilises HTML5 for semantic structure, CSS3 for visual
styling and responsive design (including CSS Grid and Flexbox layouts), and JavaScript (planned for Part 3) for
interactive functionality such as dog filtering.
The technical architecture supports future scalability, including the planned addition of a dog-filtering system
and embedded map integration for the Contact page.
## Content Strategy
All website content has been developed through research into the real organisation Paws R Us (SA), including
their public Facebook page and third-party directory listings, given their own website is currently defunct. Visual
elements use properly licensed stock photography (see References), and typography is sourced from Google
Fonts ('Baloo 2' for headings, 'Figtree' for body text).
The content strategy emphasises the emotional, trust-building nature of animal rescue work — using warm,
approachable language and imagery — while maintaining a clear, easy-to-navigate structure that supports the
organisation's practical goal of increasing adoptions and enquiries.
## Development Timeline

### Part 1: Foundation
**Duration**: 31/06/2026 – 14/08/2026
The initial phase focused on establishing the groundwork for the project: researching the organisation, drafting
and submitting the project proposal, creating the sitemap, and building the semantic HTML structure for all five
pages (index, about, services, enquiry, contact), including basic form scaffolding with HTML5 validation
attributes.

### Part 2: Visual Design and Responsive Development

**Duration**: 12/09/2026 – 25/09/2026
This phase focused on transforming the HTML foundation into a visually appealing and responsive website using
CSS styling techniques, developed iteratively based on visual feedback.
- Created an external stylesheet (`css/style.css`) and linked it to all five HTML pages
- Established base styles: CSS reset, root colour variables, base typography, and line-height
- Applied a colour palette designed around a warm, saturated pink theme: hotpink (#FF6FA5), pink (#FFB3C6),
blush (#FFE1EC), peach (#FFD3B0), mint (#C4F1E0), and plum (#7A2E4D) for headings and high-contrast text
- Implemented typography using 'Baloo 2' (headings) and 'Figtree' (body text), with a responsive type scale
using `clamp()`
- Built layout structure using CSS Grid (dog gallery, help cards, mission/vision sections, success stories) and
Flexbox (header, hero section, forms)
- Applied visual styling including colour-blocked sections, rounded "sticker-style" card and photo treatments,
soft drop shadows, and a pill-shaped navigation bar
- Developed pseudo-classes for interactive elements (`:hover`, `:focus-visible`, `:active`) across buttons, nav links,
and cards
- Implemented responsive design with two breakpoints (1024px tablet, 768px mobile), converting multi-column
layouts to single-column stacks and reflowing the navigation on smaller screens
- Expanded the dog gallery from 3 to 6 dogs for a fuller, more realistic adoption listing
- Added a static filter bar UI, per-card status badges (Available / Pending Adoption), an "Adopt Me" button
linking to the enquiry form, and a "Happy Tails" success stories section
- Refined image handling on dog cards (`object-position: center`) so photos crop correctly within their frames
- Iteratively adjusted colour, spacing, and card styling for visual consistency across sections, based on ongoing
visual review

### Part 3: Functionality, SEO and Deployment

**Duration**: [20/10/2026 - 31/10/2026]
Added the dog filter, photo lightbox, form validation with tailored responses, the interactive map, `robots.txt` and
`sitemap.xml`, on-page SEO improvements and performance/security changes, then deployed the site to Netlify.
### Working through Feedback from Part 2
Part 2 received 93/100. The overall comment was that the work showed good understanding of web
development. In the rubric, the marks I lost were mainly on how detailed the README and changelog were, so I
made these changes:
- Moved the version history into its own `CHANGELOG.md`, with dated entries grouped under Added, Changed
and Fixed.
- Expanded the README with the goals, audience, features, technical implementation, SEO strategy, timeline,
known limitations and an updated reference list.
- Recorded every Part 3 change in the changelog in enough detail for each edit to be traced.
- **Dog filter**: Buttons for All / Puppies / Young Adults / Adults / Seniors show or hide dog cards using each
card's `data-age` attribute. The active button is updated visually and with `aria-pressed`.
- **Photo lightbox**: Clicking a dog's photo opens it in an in-page overlay with previous/next buttons, a close
button, click-outside-to-close, and keyboard support (Escape, Left and Right arrows). The photo links remain as
a fallback when JavaScript is off.
- **Form validation**: Custom JavaScript validates name length, email format, South African phone format
(enquiry form only), dropdown selection and minimum message length. Field-specific error messages appear
under each field and invalid fields get a highlighted border. Both forms submit without a page reload.
- **Enquiry response**: After validation, the visitor sees a response specific to their enquiry type (adopt, foster,
volunteer, sponsor) covering costs and next steps.
- **Contact email**: After validation, the visitor gets a "Send Email" button that opens their email app with the
recipient, subject and message already filled in (`mailto:` link).
- **Interactive map**: A Leaflet map shows both locations with markers and popups.
- **Search engine files**: `robots.txt` and `sitemap.xml` (all five pages).
### Core Design
- **Responsive design**: Two breakpoints (1024px tablet, 768px mobile). Multi-column layouts collapse to single
columns and the navigation reflows on small screens.
- **Visual design**: Pink, peach and mint palette, rounded cards and pill buttons, hover/focus/active states, and
gentle animations that respect `prefers-reduced-motion`.

## Technical Implementation
The site uses HTML5 (semantic elements), CSS3 (custom properties, Grid, Flexbox, media queries) and vanilla
JavaScript with no frameworks. The map uses Leaflet 1.9.4 (loaded from unpkg with integrity hashes) and
OpenStreetMap tiles. The code was written in VS Code, versioned with Git and GitHub, and is deployed on
Netlify (free tier, served over HTTPS).
### Colour palette
| Colour | Hex | Use |
|---|---|---|
| Hot pink | #FF6FA5 | Buttons, links, accents |
| Pink | #FFB3C6 | Section and card backgrounds |
| Blush | #FFE1EC | Soft backgrounds |
| Peach | #FFD3B0 | Accent blocks |
| Mint | #C4F1E0 | Accent blocks, form response |
| Plum | #7A2E4D | Headings, high-contrast text |
| Charcoal | #4A3A3D | Body text |
### Typography
'Baloo 2' for headings and 'Figtree' for body text, both from Google Fonts.
## Content Strategy
Content was developed from research into the real organisation using its public Facebook page and directory
listings, because its own website is inactive. Copy is warm and approachable to reflect the emotional side of
rescue work, with clear calls to action. Photos are licensed stock photography; typography is from Google Fonts.
## Search Engine Optimisation
### On-page SEO
- Unique, descriptive title tags and meta descriptions on every page
- A single H1 per page with a logical H2/H3 structure
- Descriptive alt text on images, including the hero and team photos
- Canonical URL and Open Graph tags on the Home, About and Enquire pages
- Natural use of keywords such as "adopt a dog in Gauteng" in page copy
- Internal links between pages, including from the Enquire page to Available Dogs
- Mobile-friendly responsive layout
- `robots.txt` and `sitemap.xml` in the site root
  
### Off-page SEO Strategy

This is a plan for building visibility beyond the site's own code.
**Backlinks**
- Update the website link on the organisation's existing listings (Adopt A Pet, the SPCA International shelter list
and the Facebook page) to point to the live site.
- Ask local businesses in Midrand and Fourways (vets, pet shops, kennels) to link to the Available Dogs page.
- Share adoption success stories with local community news outlets, linking to the Happy Tails section.
  
**Social Media**
- Use the existing Facebook page as the main channel, posting each newly available dog with a link to the
Available Dogs page.
- Keep the organisation's name, description and website link consistent on every platform.
- Open Graph tags make shared links show a proper title and description.
  
**Local SEO**
- Create a Google Business Profile for the Midrand shelter and the Fourways community location.
- Keep the organisation's name, address and phone number identical across the website, directories and social
profiles.
- Use location phrases such as "dog adoption in Midrand" naturally in page copy.
## Performance and Security
- `loading="lazy"` on the dog and Happy Tails photos so images load as the visitor scrolls; the hero image is
deliberately not lazy-loaded because it is visible immediately.
- `rel="noopener noreferrer"` on photo links that open in a new tab.
- Font domains use `preconnect`, and Leaflet only loads on the Contact page.

- The site has no backend or database. Forms are validated and handled in the browser, so there is no server-
side input handling to attack. HTTPS is provided by Netlify.
  
## Responsiveness Testing and Iteration Across Devices

### Mobile
<p align="center">
  <strong>IPhone 14 pro max</strong><br/>
<img width="644" height="1414" alt="iphone-14-pro-max" src="https://github.com/user-attachments/assets/0904eb9a-850a-4937-b58b-bb59ebb72b2b" />
</p>
### Tablet
<table>
  <tr>
    <td align="center">
      <strong>IPad mini</strong><br/>
    <img width="1073" height="1414" alt="ipad-mini" src="https://github.com/user-attachments/assets/1c9920ac-0f99-407a-820f-004fb9ed9af7" />
  </tr>
  <tr>
    <td align="center">
      <strong>IPad Pro</strong><br/>
     <img width="1080" height="1397" alt="ipad-pro" src="https://github.com/user-attachments/assets/82fc8e7d-017c-4a48-af9d-e1c5680220ff" />
  </tr>
</table>

### Desktop
<table>
  <tr>
    <td align="center">
      <strong>IMac</strong><br/>
     <img width="1079" height="634" alt="imac" src="https://github.com/user-attachments/assets/50982f70-45cc-475e-b656-eed0c531f0bf" />
  </tr>
  <tr>
    <td align="center">
      <strong>MacBook Pro</strong><br/>
   <img width="1080" height="678" alt="macbook-pro" src="https://github.com/user-attachments/assets/66f61bd0-e232-46a1-9986-45be430becc9" />
  </tr>
</table>

## Known Limitations
- **Forms have no backend.** The enquiry form shows a simulated response and the contact form opens the
visitor's email app. Nothing is stored or sent automatically.
- **Illustrative figures.** The costs in the enquiry responses (for example the adoption fee and sponsorship
amount) are placeholders and would need confirming with the organisation.
- **Map tiles.** OpenStreetMap's tile servers can refuse requests from pages opened directly from a local file
(`file://`). The map is intended to be viewed on the deployed site.

## References

Adopt A Pet, n.d. Paws R Us. [Online]. Available at: https://www.adoptapet.co.za/pet_directory/paws-r-us/
[Accessed on [15/08/2026]].
Google Fonts, n.d. Baloo 2. [Online]. Available at: https://fonts.google.com/specimen/Baloo+2 [Accessed on
[15/09/2026]].
Google Fonts, n.d. Figtree. [Online]. Available at: https://fonts.google.com/specimen/Figtree [Accessed on [15/09/2026]].
Paws R Us (SA), n.d. Facebook Page. [Online]. Available at: https://www.facebook.com/PawsRUS.SA/ [Accessed on
[12/08/2026]].
https://www.facebook.com/groups/1402819500627238/
https://www.facebook.com/PawsRUS.SA/photos/1446497704167853/
https://www.instagram.com/pawsrus_sa/
https://www.facebook.com/PawsRUS.SA/photos/1086218523529108/
https://pets24.co.za/services/listing/paws-r-us-sa-2/
Unsplash, n.d. [Search term used]. [Online]. Available at: https://unsplash.com [Accessed on [22/09/2026}
Leaflet, n.d. Leaflet: an open-source JavaScript library for interactive maps. [Online] Available at: https://leafletjs.com [23/10/2026].
OpenStreetMap contributors, n.d. OpenStreetMap. [Online] Available at: https://www.openstreetmap.org [27/10/2026].
Netlify, n.d. Netlify. [Online] Available at: https://www.netlify.com [27/10/2026].
Paws R Us (SA), n.d. Facebook Page. [Online]. Available at: https://www.facebook.com/PawsRUS.SA/. [Accessed
on [28/10/2026].
Sitemaps.org, n.d. Sitemap Protocol. [Online]. Available at: https://www.sitemaps.org/protocol.html. [Accessed on
[27/10/2026].


