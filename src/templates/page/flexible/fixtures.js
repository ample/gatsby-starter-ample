export default {
  default: {
    children: null,
    blocks: [
      {
        title: "Main Content",
        template: "component-container",
        blocks: [
          {
            template: "component-content",
            body: "<p>Hello World</p>"
          }
        ]
      }
    ],
    title: "Flexible Page"
  }
}
