# Paws R Us (SA) Website
**By ST10516741**
## Project Overview
This project involves the development of a website for Paws R Us (SA), a registered non-profit dog rescue and
re-homing organisation operating in Gauteng, South Africa. The website serves as the digital presence for the
organisation, which rescues, shelters, and re-homes abandoned and surrendered dogs, with a shelter facility in
Midrand and a community presence in Fourways.
The Paws R Us (SA) website development project follows a three-part Portfolio of Evidence structure for the
Web Development5020w module, with each part building upon the previous foundation.
The development of this website addresses the organisation's lack of a functioning online presence — their
previous website is defunct, leaving Facebook as their only digital point of contact. Research into the
organisation confirmed a genuine need for a proper adoption platform where prospective adopters, fosters,
volunteers, and donors can learn about the organisation and get in touch.
The website showcases Paws R Us (SA)'s commitment to rescuing and re-homing vulnerable dogs across
Gauteng, while providing a warm, approachable, and easy-to-navigate platform that reflects the emotional,
community-driven nature of animal rescue work.
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
**Dog Filtering (planned for Part 3)**: A static filter bar is in place on the Available Dogs page (All / Puppies /
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
### Part 3: Functionality *(planned)*
**Duration**: pending
Planned scope: implementing the dog-filtering system in JavaScript, form validation and submission handling, an
embedded map on the Contact page, and SEO improvements.

## Responsiveness Testing and Iteration Across Devices

### Mobile
<p align="center">
  <strong>IPhone 14 pro max</strong><br/>
<img width="644" height="1414" alt="iphone-14-pro-max" src="https://github.com/user-attachments/assets/3cdc9ea0-4c77-4648-ae72-293d3da94811" />
</p>
### Tablet
<table>
  <tr>
    <td align="center">
      <strong>IPad mini</strong><br/>
    <img width="1073" height="1414" alt="ipad-mini" src="https://github.com/user-attachments/assets/95dcb383-0649-4532-ae9a-487fcda1930f" />
  </tr>
  <tr>
    <td align="center">
      <strong>IPad Pro</strong><br/>
     <img width="1080" height="1397" alt="ipad-pro" src="https://github.com/user-attachments/assets/231c4dc3-71b4-4333-947d-fa4613582e14" />
  </tr>
</table>

### Desktop
<table>
  <tr>
    <td align="center">
      <strong>IMac</strong><br/>
      <img width="1079" height="634" alt="imac" src="https://github.com/user-attachments/assets/17b18ce3-4f21-466f-b25e-e76e878d341f" />
  </tr>
  <tr>
    <td align="center">
      <strong>MacBook Pro</strong><br/>
     <img width="1080" height="678" alt="macbook-pro" src="https://github.com/user-attachments/assets/70c184c7-8fc5-4beb-959b-8fbd2dcf93a4" />
  </tr>
</table>

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
