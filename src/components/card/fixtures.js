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
    image: {
      childImageSharp: {
        gatsbyImageData: {
          layout: "constrained",
          backgroundColor: "#e8f8f8",
          images: {
            fallback: {
              src: "/static/c24e7716b2b55a79a77f498c4401b3f8/585db/cricle.png",
              srcSet:
                "/static/c24e7716b2b55a79a77f498c4401b3f8/33f3b/cricle.png 36w,\n/static/c24e7716b2b55a79a77f498c4401b3f8/ec02e/cricle.png 72w,\n/static/c24e7716b2b55a79a77f498c4401b3f8/585db/cricle.png 144w",
              sizes: "(min-width: 144px) 144px, 100vw"
            },
            sources: [
              {
                srcSet:
                  "/static/c24e7716b2b55a79a77f498c4401b3f8/aa015/cricle.webp 36w,\n/static/c24e7716b2b55a79a77f498c4401b3f8/6a9e0/cricle.webp 72w,\n/static/c24e7716b2b55a79a77f498c4401b3f8/2e74f/cricle.webp 144w",
                type: "image/webp",
                sizes: "(min-width: 144px) 144px, 100vw"
              }
            ]
          },
          width: 1400,
          height: 933.3333333333334
        }
      }
    },
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
    image: {
      childImageSharp: {
        gatsbyImageData: {
          layout: "constrained",
          backgroundColor: "#e8f8f8",
          images: {
            fallback: {
              src: "/static/c24e7716b2b55a79a77f498c4401b3f8/585db/cricle.png",
              srcSet:
                "/static/c24e7716b2b55a79a77f498c4401b3f8/33f3b/cricle.png 36w,\n/static/c24e7716b2b55a79a77f498c4401b3f8/ec02e/cricle.png 72w,\n/static/c24e7716b2b55a79a77f498c4401b3f8/585db/cricle.png 144w",
              sizes: "(min-width: 144px) 144px, 100vw"
            },
            sources: [
              {
                srcSet:
                  "/static/c24e7716b2b55a79a77f498c4401b3f8/aa015/cricle.webp 36w,\n/static/c24e7716b2b55a79a77f498c4401b3f8/6a9e0/cricle.webp 72w,\n/static/c24e7716b2b55a79a77f498c4401b3f8/2e74f/cricle.webp 144w",
                type: "image/webp",
                sizes: "(min-width: 144px) 144px, 100vw"
              }
            ]
          },
          width: 1400,
          height: 933.3333333333334
        }
      }
    },
    textAlignment: "center",
    theme: "image"
  }
}
