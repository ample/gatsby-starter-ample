import { transformer } from "."
import faker from "faker"

// ---------------------------------------- | Transformer

const mockLocation = () => ({ location: { origin: faker.internet.url() } })

const mockImage = () => {
  const imageUrl = `/${faker.lorem.word()}.jpg`
  const imageObj = { childImageSharp: { fixed: { src: imageUrl } } }
  return { imageUrl: imageUrl, imageObj: imageObj }
}

describe("transformer", () => {
  // --- Base ---
  it("returns null when no baseUrl", () => {
    expect(transformer({})).toEqual(null)
  })
  // --- Description ---
  it("uses the given description", () => {
    const description = faker.lorem.paragraph()
    const args = { props: { description: description, ...mockLocation() } }
    expect(transformer(args).description).toEqual(description)
  })
  it("falls back to default", () => {
    const description = faker.lorem.paragraph()
    const args = { defaults: { description: description }, props: { ...mockLocation() } }
    expect(transformer(args).description).toEqual(description)
  })
  // --- Image ---
  it("uses the given image, destructuring it, and prepending the baseUrl", () => {
    const url = faker.internet.url()
    const { imageUrl, imageObj } = mockImage()
    const args = { props: { location: { origin: url }, image: imageObj } }
    expect(transformer(args).imageUrl).toEqual(`${url}${imageUrl}`)
  })
  it("accepts a plain string as an image", () => {
    const url = faker.internet.url()
    const { imageUrl } = mockImage()
    const args = { props: { location: { origin: url }, image: imageUrl } }
    expect(transformer(args).imageUrl).toEqual(`${url}${imageUrl}`)
  })
  it("falls back to default", () => {
    const url = faker.internet.url()
    const { imageUrl, imageObj } = mockImage()
    const args = { props: { location: { origin: url } }, defaults: { image: imageObj } }
    expect(transformer(args).imageUrl).toEqual(`${url}${imageUrl}`)
  })
  // --- OpenGraph ---
  it("follows the proper fallback for og.type", () => {
    let args = {
      defaults: { og: { type: "website" } },
      props: { ...mockLocation(), og: { type: "video" } }
    }
    expect(transformer(args).og.type).toEqual("video")
    delete args.props.og.type
    expect(transformer(args).og.type).toEqual("website")
  })
  it("follows the proper fallback for og.title", () => {
    let args = {
      defaults: { title: "Title #4", og: { title: "Title #3" } },
      props: { title: "Title #2", ...mockLocation(), og: { title: "Title #1" } }
    }
    expect(transformer(args).og.title).toEqual("Title #1")
    delete args.props.og.title
    expect(transformer(args).og.title).toEqual("Title #2")
    delete args.props.title
    expect(transformer(args).og.title).toEqual("Title #3")
    delete args.defaults.og.title
    expect(transformer(args).og.title).toEqual("Title #4")
  })
  it("follows the proper fallback for og.description", () => {
    let args = {
      defaults: { description: "DESC-04", og: { description: "DESC-03" } },
      props: { description: "DESC-02", ...mockLocation(), og: { description: "DESC-01" } }
    }
    expect(transformer(args).og.description).toEqual("DESC-01")
    delete args.props.og.description
    expect(transformer(args).og.description).toEqual("DESC-02")
    delete args.props.description
    expect(transformer(args).og.description).toEqual("DESC-03")
    delete args.defaults.og.description
    expect(transformer(args).og.description).toEqual("DESC-04")
  })
  it("follows the proper fallback for og.image", () => {
    const location = { ...mockLocation() }
    const baseUrl = location.location.origin
    let args = {
      defaults: { image: "image-04.jpg", og: { image: "image-03.jpg" } },
      props: { image: "image-02.jpg", ...location, og: { image: "image-01.jpg" } }
    }
    expect(transformer(args).og.imageUrl).toEqual(`${baseUrl}/image-01.jpg`)
    delete args.props.og.image
    expect(transformer(args).og.imageUrl).toEqual(`${baseUrl}/image-02.jpg`)
    delete args.props.image
    expect(transformer(args).og.imageUrl).toEqual(`${baseUrl}/image-03.jpg`)
    delete args.defaults.og.image
    expect(transformer(args).og.imageUrl).toEqual(`${baseUrl}/image-04.jpg`)
  })
  // --- Title ---
  it("uses the given title", () => {
    const title = faker.lorem.words()
    const args = { props: { title: title, ...mockLocation() } }
    expect(transformer(args).title).toEqual(title)
  })
  it("falls back to default", () => {
    const title = faker.lorem.words()
    const args = { defaults: { title: title }, props: { ...mockLocation() } }
    expect(transformer(args).title).toEqual(title)
  })
  // --- Twitter ---
  it("follows the proper fallback for twitter.card", () => {
    let args = {
      defaults: { twitter: { card: "summary" } },
      props: { ...mockLocation(), twitter: { card: "summary_large_image" } }
    }
    expect(transformer(args).twitter.card).toEqual("summary_large_image")
    delete args.props.twitter.card
    expect(transformer(args).twitter.card).toEqual("summary")
  })
  it("follows the proper fallback for twitter.title", () => {
    let args = {
      defaults: { title: "Title #6", og: { title: "Title #5" }, twitter: { title: "Title #4" } },
      props: {
        title: "Title #3",
        ...mockLocation(),
        twitter: { title: "Title #1" },
        og: { title: "Title #2" }
      }
    }
    expect(transformer(args).twitter.title).toEqual("Title #1")
    delete args.props.twitter.title
    expect(transformer(args).twitter.title).toEqual("Title #2")
    delete args.props.og.title
    expect(transformer(args).twitter.title).toEqual("Title #3")
    delete args.props.title
    expect(transformer(args).twitter.title).toEqual("Title #4")
    delete args.defaults.twitter.title
    expect(transformer(args).twitter.title).toEqual("Title #5")
    delete args.defaults.og.title
    expect(transformer(args).twitter.title).toEqual("Title #6")
  })
  it("follows the proper fallback for twitter.description", () => {
    let args = {
      defaults: {
        description: "DESC-06",
        og: { description: "DESC-05" },
        twitter: { description: "DESC-04" }
      },
      props: {
        description: "DESC-03",
        ...mockLocation(),
        twitter: { description: "DESC-01" },
        og: { description: "DESC-02" }
      }
    }
    expect(transformer(args).twitter.description).toEqual("DESC-01")
    delete args.props.twitter.description
    expect(transformer(args).twitter.description).toEqual("DESC-02")
    delete args.props.og.description
    expect(transformer(args).twitter.description).toEqual("DESC-03")
    delete args.props.description
    expect(transformer(args).twitter.description).toEqual("DESC-04")
    delete args.defaults.twitter.description
    expect(transformer(args).twitter.description).toEqual("DESC-05")
    delete args.defaults.og.description
    expect(transformer(args).twitter.description).toEqual("DESC-06")
  })
  it("follows the proper fallback for twitter.image", () => {
    const location = { ...mockLocation() }
    const baseUrl = location.location.origin
    let args = {
      defaults: {
        image: "image-06.jpg",
        og: { image: "image-05.jpg" },
        twitter: { image: "image-04.jpg" }
      },
      props: {
        image: "image-03.jpg",
        ...location,
        twitter: { image: "image-01.jpg" },
        og: { image: "image-02.jpg" }
      }
    }
    expect(transformer(args).twitter.imageUrl).toEqual(`${baseUrl}/image-01.jpg`)
    delete args.props.twitter.image
    expect(transformer(args).twitter.imageUrl).toEqual(`${baseUrl}/image-02.jpg`)
    delete args.props.og.image
    expect(transformer(args).twitter.imageUrl).toEqual(`${baseUrl}/image-03.jpg`)
    delete args.props.image
    expect(transformer(args).twitter.imageUrl).toEqual(`${baseUrl}/image-04.jpg`)
    delete args.defaults.twitter.image
    expect(transformer(args).twitter.imageUrl).toEqual(`${baseUrl}/image-05.jpg`)
    delete args.defaults.og.image
    expect(transformer(args).twitter.imageUrl).toEqual(`${baseUrl}/image-06.jpg`)
  })
  // --- URL ---
  it("generates a URL", () => {
    const url = faker.internet.url()
    const args = { props: { location: { href: url, origin: url } } }
    expect(transformer(args).url).toEqual(url)
  })
})
