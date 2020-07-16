export default {
  horizontal: {
    links: [
      { url: "/", label: "Vestibulum" },
      { url: "#", label: "Pellentesque venenatis" },
      { url: "#", label: "Fusce" },
      { url: "#", label: "Etiam lacinia dolor" },
      {
        url: "#",
        label: "Suspendisse semper",
        children: [
          { url: "/", label: "Vestibulum vitae" },
          { url: "#", label: "Pellentesque tempor venenatis" },
          { url: "#", label: "Fusce molestie" },
          { url: "#", label: "Etiam in lacinia dolor" }
        ]
      },
      { url: "#", label: "Quisque interdum", button: true, className: "button" }
    ]
  },
  vertical: {
    heading: "Quisque",
    links: [
      { url: "/", label: "Vestibulum vitae" },
      { url: "#", label: "Pellentesque tempor venenatis" },
      { url: "#", label: "Fusce molestie" },
      { url: "#", label: "Etiam in lacinia dolor" }
    ],
    vertical: true
  }
}
