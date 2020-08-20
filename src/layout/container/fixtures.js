import { fixtures as formFixtures } from "@src/components/form"

export default {
  empty: {
    className: null,
    components: [],
    config: {}
  },
  default: {
    className: null,
    components: [
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
    components: [{ template: "component-form", form: formFixtures.default }],
    config: {}
  }
}
