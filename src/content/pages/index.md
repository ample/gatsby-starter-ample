---
title: Home Page
model: Page
published: true
layout: flexible
layout_flexible:
  blocks:
  - template: component-container
    config:
      margin_bottom: '0'
    title: Main Content
    blocks:
    - template: component-column
      config:
        width: full
        margin_bottom: '0'
        text_align: ''
      title: Main Column
      blocks:
      - template: component-image
        image_src: "/uploads/blueprint/rectangle.jpg"
      - template: component-content
        body_md: |-
          # This is the home page.

          It shows an example of adding multiple components to a section within the page.

          To see a basic content page, with all types of content, click the button below.
      - template: component-button
        label: View Content Page
        url: "/content-page"
seo:
  title: Home Page Title
  description: Home Page Description
  image_src: "/uploads/blueprint/rectangle.jpg"
  og:
    title: Home Page OG Title
    description: Home Page OG Description
    image_src: "/uploads/blueprint/rectangle.jpg"
  twitter:
    card: summary
    title: Home Page Twitter Title
    description: Home Page Twitter Description
    image_src: "/uploads/blueprint/rectangle.jpg"
exclude_from_sitemap: false
layout_basic:
  heading: ''
  body_md: ''

---
