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
        children: "Hello World",
        to: "/"
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
