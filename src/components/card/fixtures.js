import imageFixture from "../image/fixtures"
export default {
  default: {
    body:
      "<p>Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>",
    button: {
      label: "Read more",
      theme: "arrow",
      url: "#"
    },
    heading: "Card Title"
  },
  text_alignment_center: {
    body:
      "<p>Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>",
    button: {
      label: "Read more",
      theme: "arrow",
      url: "#"
    },
    heading: "Card Title",
    textAlignment: "center"
  },
  with_graphic: {
    body:
      "<p>Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>",
    button: {
      label: "Read more",
      theme: "arrow",
      url: "#"
    },
    heading: "Card Title",
    image: "/uploads/blueprint/graphic-1.svg",
    theme: "graphic"
  },
  with_graphic_centered: {
    body:
      "<p>Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>",
    button: {
      label: "Read more",
      theme: "arrow",
      url: "#"
    },
    heading: "Card Title",
    image: "/uploads/blueprint/graphic-1.svg",
    textAlignment: "center",
    theme: "graphic"
  },
  with_image: {
    body:
      "<p>Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>",
    button: {
      label: "Read more",
      theme: "arrow",
      url: "#"
    },
    heading: "Card Title",
    image: imageFixture.default.src,
    theme: "image"
  },
  with_image_centered: {
    body:
      "<p>Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>",
    button: {
      label: "Read more",
      theme: "arrow",
      url: "#"
    },
    heading: "Card Title",
    image: imageFixture.default.src,
    textAlignment: "center",
    theme: "image"
  }
}
