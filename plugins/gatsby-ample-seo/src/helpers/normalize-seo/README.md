# Normalize SEO

The `normalizeSEO` function provides a means for template adapters to pull together dynamic data, combine it with the current location object, and use it to build an object that can be passed on to the [SEO utility](/?path=/docs/utilities-seo--page).

## Usage

The function can be imported from the helper's main index file.

It accepts three named objects as arguments:

- `location`: The page's `location` object. This comes from Gatsby as a prop to any static or dynamically-rendered page.
- `page`: The current page's basic information, including `title`, `description`, and `image`.
- `overrides`: Optional structured content that can be used to override the page's basic information.

Note that `image` properties can be strings representing paths to a local image or they can be objects already transformed by the Sharp transformer.

Putting it all together looks something like this:

```js
import { normalizeSEO } from "../../helpers" // adjust relative to current file

normalizeSEO({
  location: {
    origin: '',
    href: ''
  },
  overrides: {
    title: '',
    description: '',
    image: '',
    og: {
      title: '',
      description: '',
      image: ''
    },
    twitter: {
      card: 'summary'
      title: '',
      description: '',
      image: ''
    }
  },
  page: {
    title: '',
    description: '',
    image: ''
  }
})
```
