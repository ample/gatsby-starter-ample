import faker from "faker"

export default {
  default: {
    name: faker.lorem.words()
  },
  fixed: {
    name: "Ample"
  }
}
