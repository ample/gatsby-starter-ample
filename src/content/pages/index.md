---
title: Home Page
model: Page
layout: flexible
layout_flexible:
  containers:
  - title: Main Content
    config:
      text_align: center
    components:
    - template: component-image
      image_src: "/uploads/placeholder-image.jpg"
    - template: component-content
      body_md: |-
        This is the home page. It shows an example of adding multiple components to a section within the page.

        To see a basic content page, with all types of content, click the button below.
    - template: component-button
      label: View Content Page
      url: "/content-page"
seo:
  title: Home Page Title
  description: Home Page Description
  image_src: "/uploads/placeholder-image.jpg"
  og:
    title: Home Page OG Title
    description: Home Page OG Description
    image_src: "/uploads/placeholder-image.jpg"
  twitter:
    card: summary
    title: Home Page Twitter Title
    description: Home Page Twitter Description
    image_src: "/uploads/placeholder-image.jpg"

---
