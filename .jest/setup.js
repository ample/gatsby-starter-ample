const uuid = require("short-uuid")

jest.mock("short-uuid")
uuid.generate.mockImplementation(() => "73WakrfVbNJBaAmhQtEeDv")
