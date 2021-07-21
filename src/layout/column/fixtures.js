import { fixtures as formFixtures } from "@src/components/form"

export default {
  default: {
    blocks: [
      {
        label: "Hello World",
        template: "component-button",
        url: "/"
      }
    ],
    className: null,
    config: {}
  },
  empty: {
    blocks: [],
    className: null,
    config: {}
  },
  form: {
    blocks: [{ form: formFixtures.default, template: "component-form" }],
    className: null,
    config: {}
  }
}
