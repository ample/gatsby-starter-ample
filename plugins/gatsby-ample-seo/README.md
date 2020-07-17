# SEO

The SEO component is used by template adapters to render meta tags into the head of the page.

This utility takes normalized SEO data from the page level, then interjects global defaults, such as a title template and a fallback image. It then does a bit more cleanup and passes the data onto the SEO component for it to render the meta tags in the head of the page. Note that the global defaults are configurable in the CMS under _Config_ > _SEO_.
