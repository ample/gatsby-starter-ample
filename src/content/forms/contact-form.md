---
title: Contact Form
model: Form
driver: netlify
button_label: Submit
field_groups:
- title: Personal Info
  heading: Personal Info
  fields:
  - title: Name
    type: text
    required: true
    width: half
    select_options: []
    label: First Name
    name: name
    text_appearance: short
    text_validation: ''
    text_placeholder: ''
    select_appearance: ''
    solo: true
  - title: Email
    type: text
    label: Email
    required: true
    width: half
    select_options: []
    name: ''
    text_appearance: short
    text_validation: email
    text_placeholder: ''
    select_appearance: ''
    solo: false
  - title: Phone
    type: text
    label: Phone
    required: true
    width: half
    select_options: []
    name: ''
    text_appearance: short
    text_validation: phone
    text_placeholder: "(xxx) xxx-xxxx"
    select_appearance: ''
    solo: false
  - title: Gender
    name: gender
    type: select
    required: true
    width: full
    select_options:
    - Female
    - Male
    text_appearance: ''
    text_validation: ''
    text_placeholder: ''
    select_appearance: radio
    solo: false
- title: Address
  heading: Address
  fields:
  - title: Street Address
    type: text
    label: Street Address
    required: false
    width: half
    select_options: []
    name: ''
    text_appearance: short
    text_validation: ''
    text_placeholder: ''
    select_appearance: ''
    solo: false
  - title: Suite / Apt.
    name: ''
    type: text
    required: false
    width: half
    select_options: []
    text_appearance: short
    text_validation: ''
    text_placeholder: ''
    select_appearance: ''
    solo: false
  - title: City
    name: ''
    type: text
    required: false
    width: half
    select_options: []
    text_appearance: short
    text_validation: ''
    text_placeholder: ''
    select_appearance: ''
    solo: false
  - title: State
    name: ''
    type: select
    required: false
    width: quarter
    select_options:
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
    text_appearance: ''
    text_validation: ''
    text_placeholder: ''
    select_appearance: dropdown
    solo: false
  - title: Zip Code
    name: zip
    type: text
    required: false
    width: quarter
    select_options: []
    text_appearance: short
    text_validation: ''
    text_placeholder: ''
    select_appearance: ''
    solo: false
- title: Message
  heading: Message
  fields:
  - title: Message
    type: text
    label: Message
    required: true
    width: full
    select_options: []
    name: ''
    text_appearance: long
    text_validation: ''
    text_placeholder: ''
    select_appearance: ''
    solo: false

---
