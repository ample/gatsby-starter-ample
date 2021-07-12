const children = "Call to action"

export default {
  arrow: {
    theme: "arrow"
  },
  default: {
    children: children,
    to: "/"
  },
  externalLink: {
    children: children,
    to: "https://apple.com"
  },
  outline: {
    theme: "outline",
    to: "/"
  },
  props: {
    children: children,
    theme: "default",
    to: "/",
    type: "button"
  },
  useAnchorLink: {
    children: children,
    to: "#"
  },
  useButtonElement: {
    children: children,
    to: "",
    type: "button"
  }
}
