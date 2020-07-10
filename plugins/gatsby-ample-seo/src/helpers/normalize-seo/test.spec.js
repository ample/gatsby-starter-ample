import { normalizeSEO, getImageUrl, imagePathFromSrc } from "./"

const mockBaseUrl = "https://www.example.com"

const mockLocObj = {
  location: {
    href: `${mockBaseUrl}/hello-world`,
    origin: mockBaseUrl
  }
}

const mockFluidImg = { childImageSharp: { fluid: { src: "hello-world.jpg" } } }

const mockFixedImg = { childImageSharp: { fixed: { src: "hello-world.jpg" } } }

describe("imagePathFromSrc", () => {
  it("digs into an object for the right key path", () => {
    expect(imagePathFromSrc(mockFluidImg)).toEqual("hello-world.jpg")
  })
  it("returns undefined if the object isn't structured properly", () => {
    expect(imagePathFromSrc(mockFixedImg)).toEqual(undefined)
  })
  it("returns src if src is a string", () => {
    expect(imagePathFromSrc("hello-world-02.jpg")).toEqual("hello-world-02.jpg")
  })
})

describe("getImageUrl", () => {
  it("prepends the baseUrl to the image for fluid objects", () => {
    expect(getImageUrl(mockBaseUrl, mockFluidImg)).toEqual(
      "https://www.example.com/hello-world.jpg"
    )
  })
  it("accounts for no slashes", () => {
    const baseUrl = "https://www.example.com"
    const imagePath = "hello-world.jpg"
    expect(getImageUrl(baseUrl, imagePath)).toEqual("https://www.example.com/hello-world.jpg")
  })
  it("accounts for double slashes", () => {
    const baseUrl = "https://www.example.com/"
    const imagePath = "/hello-world.jpg"
    expect(getImageUrl(baseUrl, imagePath)).toEqual("https://www.example.com/hello-world.jpg")
  })
  it("accounts for a single slash", () => {
    const baseUrl = "https://www.example.com"
    const imagePath = "/hello-world.jpg"
    expect(getImageUrl(baseUrl, imagePath)).toEqual("https://www.example.com/hello-world.jpg")
  })
  it("returns undefined without a baseUrl", () => {
    expect(getImageUrl(undefined, mockFluidImg)).toEqual(undefined)
  })
  it("returns undefined without a proper image", () => {
    expect(getImageUrl(undefined, mockFixedImg)).toEqual(undefined)
  })
})

describe("normalizeSEO", () => {
  it("returns an empty object if nothing is passed to it", () => {
    expect(normalizeSEO({})).toEqual({})
  })
  it("returns an empty object unless there's a baseUrl", () => {
    const obj1 = { page: { title: "Hello World" } }
    expect(normalizeSEO(obj1)).toEqual({})
    const obj2 = { ...mockLocObj, page: { title: "Hello World" } }
    expect(normalizeSEO(obj2).title).toEqual("Hello World")
  })
  it("adds location.href as the url prop, adding the origin to it", () => {
    let obj = { ...mockLocObj }
    expect(normalizeSEO(obj).url).toEqual("https://www.example.com/hello-world")
  })
  it("returns the baseUrl", () => {
    let obj = { ...mockLocObj }
    expect(normalizeSEO(obj).baseUrl).toEqual(obj.location.origin)
  })

  // ---------------------------------------- | Title

  it("adds title to props", () => {
    let obj = { ...mockLocObj, page: { title: "Hello World" } }
    expect(normalizeSEO(obj).title).toEqual("Hello World")
  })
  it("overrides the title", () => {
    let obj = { ...mockLocObj, overrides: { title: "Hi there!" }, page: { title: "Hello World" } }
    expect(normalizeSEO(obj).title).toEqual("Hi there!")
  })
  it("removes empty strings", () => {
    let obj = { ...mockLocObj, page: { title: "" } }
    expect(normalizeSEO(obj).title).toEqual(undefined)
  })

  // ---------------------------------------- | Description

  it("adds description to props", () => {
    let obj = { ...mockLocObj, page: { description: "Hello World" } }
    expect(normalizeSEO(obj).description).toEqual("Hello World")
  })
  it("overrides the description", () => {
    let obj = {
      ...mockLocObj,
      overrides: { description: "Hi there!" },
      page: { description: "Hello World" }
    }
    expect(normalizeSEO(obj).description).toEqual("Hi there!")
  })
  it("removes empty strings", () => {
    let obj = { ...mockLocObj, page: { description: "" } }
    expect(normalizeSEO(obj).description).toEqual(undefined)
  })

  // ---------------------------------------- | Image URL

  it("adds imageUrl to props, prepending the baseUrl", () => {
    let obj = { ...mockLocObj, page: { image: "/image.jpg" } }
    expect(normalizeSEO(obj).imageUrl).toEqual("https://www.example.com/image.jpg")
  })
  it("removes image and image_src from the object", () => {
    let obj = {
      ...mockLocObj,
      overrides: { image: "/image-02.png", image_src: "/image-02.png" },
      page: { image: "/image.jpg" }
    }
    expect(normalizeSEO(obj).image).toEqual(undefined)
    expect(normalizeSEO(obj).image_src).toEqual(undefined)
  })
  it("overrides the image, still prepending the baseUrl", () => {
    let obj = {
      ...mockLocObj,
      overrides: { image: "/image-02.png" },
      page: { image: "/image.jpg" }
    }
    expect(normalizeSEO(obj).imageUrl).toEqual("https://www.example.com/image-02.png")
  })
  it("extracts an image URL from a childImageSharp object", () => {
    let obj = { ...mockLocObj, page: { image: mockFluidImg } }
    expect(normalizeSEO(obj).imageUrl).toEqual("https://www.example.com/hello-world.jpg")
  })
  it("does not extract images properly when it is an object with the wrong keys", () => {
    let obj = { ...mockLocObj, page: { image: mockFixedImg } }
    expect(normalizeSEO(obj).imageUrl).toEqual(undefined)
  })
  it("does not extract images properly when it is an object with the wrong keys", () => {
    let obj = { ...mockLocObj, page: { image: mockFixedImg } }
    expect(normalizeSEO(obj).imageUrl).toEqual(undefined)
  })

  // ---------------------------------------- | OG

  it("passes OG title and description through", () => {
    let obj = {
      ...mockLocObj,
      overrides: { og: { title: "OG Title", description: "OG Desc ..." } }
    }
    expect(normalizeSEO(obj).og).toEqual(obj.overrides.og)
  })
  it("adds imageUrl to OG props, prepending the baseUrl", () => {
    let obj = { ...mockLocObj, overrides: { og: { image: "/og-image.jpg" } } }
    expect(normalizeSEO(obj).og.imageUrl).toEqual("https://www.example.com/og-image.jpg")
  })
  it("removes image and image_src from the OG object", () => {
    let obj = {
      ...mockLocObj,
      overrides: { og: { image: "/og-image.jpg", image_src: "/og-image.jpg" } }
    }
    expect(normalizeSEO(obj).og.image).toEqual(undefined)
    expect(normalizeSEO(obj).og.image_src).toEqual(undefined)
  })

  // ---------------------------------------- | Twitter

  it("passes Twitter title and description through", () => {
    let obj = {
      ...mockLocObj,
      overrides: { twitter: { title: "Twitter Title", description: "Twitter Desc ..." } }
    }
    expect(normalizeSEO(obj).twitter).toEqual(obj.overrides.twitter)
  })
  it("adds imageUrl to Twitter props, prepending the baseUrl", () => {
    let obj = { ...mockLocObj, overrides: { twitter: { image: "/twitter-image.jpg" } } }
    expect(normalizeSEO(obj).twitter.imageUrl).toEqual("https://www.example.com/twitter-image.jpg")
  })
  it("removes image and image_src from the Twitter object", () => {
    let obj = {
      ...mockLocObj,
      overrides: { twitter: { image: "/twitter-image.jpg", image_src: "/twitter-image.jpg" } }
    }
    expect(normalizeSEO(obj).twitter.image).toEqual(undefined)
    expect(normalizeSEO(obj).twitter.image_src).toEqual(undefined)
  })
})
