const fs = require("fs-extra")
const path = require("path")

const { initDir, cleanDir } = require("./dir")

const mockDir = path.join(__dirname, "__tmp__")
const nestedMockDir = path.join(mockDir, "nested-dir")
const mockFile = path.join(mockDir, "file.md")

beforeEach(() => {
  if (fs.existsSync(mockDir)) {
    fs.rmdirSync(mockDir, { recursive: true })
  }
})

afterEach(() => {
  if (fs.existsSync(mockDir)) {
    fs.rmdirSync(mockDir, { recursive: true })
  }
})

describe("initDir", () => {
  it("creates a directory when it does not exist", () => {
    expect(fs.existsSync(mockDir)).toEqual(false)
    initDir(mockDir)
    expect(fs.existsSync(mockDir)).toEqual(true)
  })
  it("creates a directory recursively when it does not exist", () => {
    expect(fs.existsSync(mockDir)).toEqual(false)
    expect(fs.existsSync(nestedMockDir)).toEqual(false)
    initDir(nestedMockDir)
    expect(fs.existsSync(nestedMockDir)).toEqual(true)
  })
  it("leaves the directory in place if it exists", () => {
    fs.mkdirSync(nestedMockDir, { recursive: true })
    initDir(nestedMockDir)
    expect(fs.existsSync(nestedMockDir)).toEqual(true)
  })
})

describe("cleanDir", () => {
  it("removes files within the directory, but not the directory", () => {
    fs.mkdirSync(mockDir)
    fs.writeFileSync(mockFile, "")
    expect(fs.existsSync(mockFile)).toEqual(true)
    cleanDir(mockDir)
    expect(fs.existsSync(mockDir)).toEqual(true)
    expect(fs.existsSync(mockFile)).toEqual(false)
  })
  it("does nothing if the directory does not exist", () => {
    cleanDir(nestedMockDir)
    expect(fs.existsSync(nestedMockDir)).toEqual(false)
  })
})
