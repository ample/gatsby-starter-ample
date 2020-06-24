// import Faker from 'faker'
import faker from "faker"

export default {
  default: {
    label: faker.lorem.words(2),
    url: faker.internet.url()
  }
}
