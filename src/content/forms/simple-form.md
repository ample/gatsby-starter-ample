---
title: Simple Form
driver: netlify
model: Form
button_label: Submit
field_groups:
- title: Personal Info
  heading: ''
  fields:
  - title: Name
    type: text
    required: true
    width: half
    select_options: []
    label: First Name
    name: first_name
    text_appearance: short
    text_validation: ''
    text_placeholder: ''
    select_appearance: ''
    solo: true
- title: Personal Info
  heading: ''
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
  - title: Gender
    name: gender
    type: select
    required: false
    width: full
    select_options:
    - Female
    - Male
    text_appearance: ''
    text_validation: ''
    text_placeholder: ''
    select_appearance: radio
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
  - title: Message
    type: text
    label: Message
    required: false
    width: full
    select_options: []
    name: ''
    text_appearance: long
    text_validation: ''
    text_placeholder: ''
    select_appearance: ''
    solo: false
---
