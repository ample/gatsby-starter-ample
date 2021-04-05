export default {
  default: {
    mainNavigation: [
      { url: "#", label: "Reprehenderit" },
      { url: "#", label: "Officia sint" },
      { url: "#", label: "Veniam" },
      { url: "#", label: "Consequat" },
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
    ],
    topNavigation: [
      { url: "#", label: "Duis" },
      { url: "#", label: "Cupidatat" },
      { url: "#", label: "Ullamco" },
      { url: "#", label: "Labore" },
      { url: "#", label: "Consectetur" },
      { url: "#", label: "Pariatur" }
    ]
  }
}
