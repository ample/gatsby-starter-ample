export default {
  default: {
    main_navigation: [
      { label: "Reprehenderit", url: "#" },
      { label: "Officia sint", url: "#" },
      { label: "Veniam", url: "#" },
      { label: "Consequat", url: "#" },
      {
        children: [
          { label: "Vestibulum vitae", url: "/" },
          { label: "Pellentesque tempor venenatis", url: "#" },
          { label: "Fusce molestie", url: "#" },
          { label: "Etiam in lacinia dolor", url: "#" }
        ],
        label: "Suspendisse semper",
        url: "#"
      },
      { button: true, className: "button", label: "Quisque interdum", url: "#" }
    ],
    top_navigation: [
      { label: "Duis", url: "#" },
      { label: "Cupidatat", url: "#" },
      { label: "Ullamco", url: "#" },
      { label: "Labore", url: "#" },
      { label: "Consectetur", url: "#" },
      { label: "Pariatur", url: "#" }
    ]
  }
}
