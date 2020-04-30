const getOptions = require("./get-options")

describe("getOptions", () => {
  it("has sensible defaults", () => {
    expect(getOptions()).toEqual({
      contentSrc: "src/content/",
      imageExtensions: [".jpg", ".png"],
      imageSuffix: "_src",
      markdownSuffix: "_md",
      modelField: "model",
      seoField: "seo"
    })
  })
  it("provides a means to override defaults", () => {
    expect(getOptions({ contentSrc: "./content/" }).contentSrc).toEqual("./content/")
    expect(getOptions({ imageExtensions: [".svg"] }).imageExtensions).toEqual([".svg"])
    expect(getOptions({ imageSuffix: "__image__" }).imageSuffix).toEqual("__image__")
    expect(getOptions({ markdownSuffix: "__m__" }).markdownSuffix).toEqual("__m__")
    expect(getOptions({ modelField: "_tmpl" }).modelField).toEqual("_tmpl")
    expect(getOptions({ seoField: "__s__" }).seoField).toEqual("__s__")
  })
  it("adds a trailing slash to contentSrc", () => {
    expect(getOptions({ contentSrc: "./content" }).contentSrc).toEqual("./content/")
  })
})
