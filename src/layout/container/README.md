# <Container />

The container is a fairly involved component that is a foundation component in most websites. While some pages (_templates_) are built from scratch, mostly because of their stylistic complexity, many make use of containers.

In other words, on many sites (like this one), most pages will be laid out like so:

- Header
- Containers
- Footer

(Note that this can vary widely from site-to-site and even from template-to-template.)

## How it Works

The container is responsible for laying out and rendering components within it. While you can view the `<Container />` and `<Component />` components within this directory directly, the gist is this:

- The container receives a `config` prop which controls the style and layout of the container itself, as well as _some_ of the items within the container.
- It also accepts a `components` prop, which is an array of component data that get passed on to various components.

On the surface, there's not much more to it than that. Most projects will customize some of the styles and `config` props, but otherwise, it's built to be easily extended through the component map and transformers.

### Component Mapping

The component map (`component-map.js`) is an object that, well, maps attributes to components. The expectation is that every object in a container's `components` prop will have a `template` property within it. That property is the key in the map file.

When working with our typical configuration (which makes use of Forestry), we prefix components with `component-`. So, for example, if the only object in the map file were a button, it might look like this:

```js
import Button from "@src/components/button"

export default {
  "component-button": Button
}
```

Then the container's component must have a `template` property with `component-button` as the value. Otherwise a console error is thrown.

```jsx
<Container
  config={{}}
  components={[
    {
      template: "component-button"
      // other button prop attributes.
    }
  ]}
/>
```

### Transformers

In a perfect world, a CMS's structure would mimic that of the front-end components' properties. But it just doesn't always work like that.

Consider the button example. A button shape in a CMS model may have a `label` and `url` field, but in the Gatsby project, it expects `children` and `to` as props.

That's where transformers come into play. The files within the transformers directory here exist to _transform_ data being sent to the container into a shape expected by this project's components. Each file should have a default export that is a function which accepts a single input (the data object) and returns the transformed output.

The index file in that directory (`transformers/index.js`) is responsible for exporting an object with all functions. That is the only object used directly by the `component.js` file.

---

While there's a lot going on here, it's still a linear process, as developing with components typically is. The best way to learn is to start at the `index.js` file and then follow the default exports. Then you'll get a picture of how the files in this directory are working together.
