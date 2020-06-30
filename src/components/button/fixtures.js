import faker from "faker"

export default {
  default: {
    children: faker.lorem.words(2),
    to: faker.internet.url()
  }
}
