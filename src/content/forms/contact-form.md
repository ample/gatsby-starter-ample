---
title: Contact Form
model: Form
button_label: Submit
field_groups:
- title: Personal Info
  heading: Personal Info
  fields:
  - title: Name
    type: Text
    required: true
    width: half
    options: []
    appearance: Dropdown
    label: First Name
    name: name
    text_appearance: Short
    text_validation: ''
    placeholder: ''
    select_appearance: ''
    solo: true
  - title: Email
    type: Text
    label: Email
    required: true
    width: half
    options: []
    appearance: Dropdown
    name: ''
    text_appearance: Short
    text_validation: Email
    placeholder: ''
    select_appearance: ''
    solo: false
  - title: Phone
    type: Text
    label: Phone
    required: true
    width: half
    options: []
    appearance: Dropdown
    name: ''
    text_appearance: Short
    text_validation: Phone
    placeholder: "(xxx) xxx-xxxx"
    select_appearance: ''
    solo: false
  - title: Gender
    name: gender
    type: Select
    required: true
    width: full
    options:
    - Female
    - Male
    appearance: Radio Buttons
    text_appearance: ''
    text_validation: ''
    placeholder: ''
    select_appearance: Radio Buttons
    solo: false
- title: Address
  heading: Address
  fields:
  - title: Street Address
    type: Text
    label: Street Address
    required: false
    width: half
    options: []
    appearance: Dropdown
    name: ''
    text_appearance: Short
    text_validation: ''
    placeholder: ''
    select_appearance: ''
    solo: false
  - title: Suite / Apt.
    name: ''
    type: Text
    required: false
    width: half
    options: []
    appearance: Dropdown
    text_appearance: Short
    text_validation: ''
    placeholder: ''
    select_appearance: ''
    solo: false
  - title: City
    name: ''
    type: Text
    required: false
    width: half
    options: []
    appearance: Dropdown
    text_appearance: Short
    text_validation: ''
    placeholder: ''
    select_appearance: ''
    solo: false
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
    text_appearance: ''
    text_validation: ''
    placeholder: ''
    select_appearance: Dropdown
    solo: false
  - title: Zip Code
    name: zip
    type: Text
    required: false
    width: quarter
    options: []
    appearance: Dropdown
    text_appearance: Short
    text_validation: ''
    placeholder: ''
    select_appearance: ''
    solo: false
- title: Message
  heading: Message
  fields:
  - title: Message
    type: Text
    label: Message
    required: true
    width: full
    options: []
    appearance: Dropdown
    name: ''
    text_appearance: Long
    text_validation: ''
    placeholder: ''
    select_appearance: ''
    solo: false

---
