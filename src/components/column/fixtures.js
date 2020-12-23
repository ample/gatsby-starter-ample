import { fixtures as formFixtures } from "@src/components/form"

export default {
  empty: {
    className: null,
    blocks: [],
    config: {}
  },
  default: {
    className: null,
    blocks: [
      {
        template: "component-button",
        label: "Hello World",
        url: "/"
      }
    ],
    config: {}
  },
  form: {
    className: null,
    blocks: [{ template: "component-form", form: formFixtures.default }],
    config: {}
  }
}
