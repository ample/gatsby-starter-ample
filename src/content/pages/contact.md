---
title: Contact
model: Page
published: true
layout: flexible
layout_flexible:
  containers:
  - title: Form Container
    config:
      margin_bottom: '40'
    columns:
    - title: Main Column
      components:
      - template: component-form
        form: src/content/forms/contact-form.md
      config:
        width: 1/2
        text_align: ''
  blocks:
  - template: component-container
    config:
      margin_bottom: '0'
    title: Form Container
    blocks:
    - template: component-column
      config:
        width: full
        margin_bottom: '0'
        text_align: ''
      title: Main Column
      blocks:
      - template: component-form
        form: src/content/forms/contact-form.md
seo:
  title: ''
  title_template: ''
  default_image_src: ''
  description: ''
  image_src: ''
  og:
    title: ''
    description: ''
    image_src: ''
  twitter:
    card: ''
    title: ''
    description: ''
    image_src: ''
layout_basic:
  heading: ''
  body_md: ''
exclude_from_sitemap: false

---
