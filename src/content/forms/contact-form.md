---
title: Contact Form
model: Form
button_label: Submit
field_groups:
- title: Personal Info
  heading: Personal Info
  fields:
  - title: First Name
    type: Short Text
    required: true
    width: half
    options: []
    appearance: Dropdown
    label: First Name
    name: first_name
  - title: Last Name
    type: Short Text
    label: Last Name
    required: true
    width: half
    options: []
    appearance: Dropdown
    name: ''
  - title: Email
    type: Email
    label: Email
    required: true
    width: half
    options: []
    appearance: Dropdown
    name: ''
  - title: Phone
    type: Phone
    label: Phone
    required: true
    width: half
    options: []
    appearance: Dropdown
    name: ''
  - title: Gender
    name: gender
    type: Select
    required: true
    width: full
    options:
    - 'Female'
    - 'Male'
    appearance: Radio Buttons
- title: Address
  heading: Address
  fields:
  - title: Street Address
    type: Short Text
    label: Street Address
    required: false
    width: full
    options: []
    appearance: Dropdown
    name: ''
  - title: Suite / Apt.
    name: ''
    type: Short Text
    required: false
    width: full
    options: []
    appearance: Dropdown
  - title: City
    name: ''
    type: Short Text
    required: false
    width: half
    options: []
    appearance: Dropdown
  - title: State
    name: ''
    type: Select
    required: false
    width: quarter
    options:
    - Alabama
    - Alaska
    - Arizona
    - Arkansas
    - California
    - Colorado
    - Connecticut
    - Delaware
    - District Of Columbia
    - Florida
    - Georgia
    - Hawaii
    - Idaho
    - Illinois
    - Indiana
    - Iowa
    - Kansas
    - Kentucky
    - Louisiana
    - Maine
    - Maryland
    - Massachusetts
    - Michigan
    - Minnesota
    - Mississippi
    - Missouri
    - Montana
    - Nebraska
    - Nevada
    - New Hampshire
    - New Jersey
    - New Mexico
    - New York
    - North Carolina
    - North Dakota
    - Ohio
    - Oklahoma
    - Oregon
    - Pennsylvania
    - Rhode Island
    - South Carolina
    - South Dakota
    - Tennessee
    - Texas
    - Utah
    - Vermont
    - Virginia
    - Washington
    - West Virginia
    - Wisconsin
    - Wyoming
    appearance: Dropdown
  - title: Zip Code
    name: zip
    type: Short Text
    required: false
    width: quarter
    options: []
    appearance: Dropdown
- title: Message
  heading: Message
  fields:
  - title: Message
    type: Long Text
    label: Message
    required: true
    width: full
    options: []
    appearance: Dropdown
    name: ''

---
