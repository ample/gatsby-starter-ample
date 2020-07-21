---
title: Nested Page
model: Page
sections:
- title: Main Content
  components:
  - template: component-content
    body_md: This is an example of a page that is nested under other pages.
  config:
    text_align: ''
seo:
  title: ''
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
layout: basic
layout_basic:
  heading: Nested Page (Basic Page)
  body: This page is nested within a folder, demonstrating that URLs are built automatically
    from the file structure in the pages section, as this page will be available at
    `/basic-page/nested-page`.

---
