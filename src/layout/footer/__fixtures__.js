import Faker from "faker"

export const footer_faker_data = {
  menus: [
    {
      label: Faker.lorem.words(1),
      links: [
        { url: "#", label: Faker.lorem.words(2) },
        { url: "#", label: Faker.lorem.words(3) },
        { url: "#", label: Faker.lorem.words(2) },
        { url: "#", label: Faker.lorem.words(3) }
      ]
    },
    {
      label: Faker.lorem.words(1),
      links: [
        { url: "#", label: Faker.lorem.words(3) },
        { url: "#", label: Faker.lorem.words(2) },
        { url: "#", label: Faker.lorem.words(2) },
        { url: "#", label: Faker.lorem.words(3) }
      ]
    }
  ],
  policy_links: [
    { url: "#", label: "Privacy Policy" },
    { url: "#", label: "Terms of Service" }
  ]
}

export const footer_test_data = {
  menus: [
    {
      label: "Quisque",
      links: [
        { url: "#", label: "Vestibulum vitae" },
        { url: "#", label: "Pellentesque tempor venenatis" },
        { url: "#", label: "Fusce molestie" },
        { url: "#", label: "Etiam in lacinia dolor" }
      ]
    },
    {
      label: "Vestibulum",
      links: [
        { url: "#", label: "Fusce molestie" },
        { url: "#", label: "Pellentesque venenatis" },
        { url: "#", label: "Vestibulum vitae" },
        { url: "#", label: "lacinia dolor" }
      ]
    }
  ],
  policy_links: [
    { url: "#", label: "Privacy Policy" },
    { url: "#", label: "Terms of Service" }
  ]
}
