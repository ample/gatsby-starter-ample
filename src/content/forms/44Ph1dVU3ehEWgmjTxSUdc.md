---
model: Form
id: 44Ph1dVU3ehEWgmjTxSUdc
title: Contact Form
button_label: Submit
field_groups:
  - title: Personal Info
    heading: Personal Info
    fields:
      - title: Name
        type: text
        label: Your Name
        name: name
        required: true
        text_appearance: short
        text_validation: !<tag:yaml.org,2002:js/undefined> ''
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options: !<tag:yaml.org,2002:js/undefined> ''
        select_appearance: !<tag:yaml.org,2002:js/undefined> ''
        width: half
        solo: true
      - title: Email
        type: text
        label: Email
        name: email
        required: true
        text_appearance: short
        text_validation: email
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options: !<tag:yaml.org,2002:js/undefined> ''
        select_appearance: !<tag:yaml.org,2002:js/undefined> ''
        width: half
        solo: false
      - title: Phone
        type: text
        label: Phone
        name: phone
        required: true
        text_appearance: short
        text_validation: phone
        text_placeholder: (xxx) xxx-xxxx
        select_options: !<tag:yaml.org,2002:js/undefined> ''
        select_appearance: !<tag:yaml.org,2002:js/undefined> ''
        width: half
        solo: false
      - title: Gender
        type: select
        label: Gender
        name: gender
        required: true
        text_appearance: !<tag:yaml.org,2002:js/undefined> ''
        text_validation: !<tag:yaml.org,2002:js/undefined> ''
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options:
          - Male
          - Female
        select_appearance: radio
        width: full
        solo: !<tag:yaml.org,2002:js/undefined> ''
      - title: Address
        type: text
        label: Address
        name: address
        required: false
        text_appearance: short
        text_validation: !<tag:yaml.org,2002:js/undefined> ''
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options: !<tag:yaml.org,2002:js/undefined> ''
        select_appearance: !<tag:yaml.org,2002:js/undefined> ''
        width: half
        solo: !<tag:yaml.org,2002:js/undefined> ''
      - title: Suite / Apt.
        type: text
        label: Suite / Apt.
        name: suite_apt
        required: false
        text_appearance: short
        text_validation: !<tag:yaml.org,2002:js/undefined> ''
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options: !<tag:yaml.org,2002:js/undefined> ''
        select_appearance: !<tag:yaml.org,2002:js/undefined> ''
        width: half
        solo: !<tag:yaml.org,2002:js/undefined> ''
      - title: City
        type: text
        label: City
        name: city
        required: false
        text_appearance: short
        text_validation: !<tag:yaml.org,2002:js/undefined> ''
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options: !<tag:yaml.org,2002:js/undefined> ''
        select_appearance: !<tag:yaml.org,2002:js/undefined> ''
        width: half
        solo: !<tag:yaml.org,2002:js/undefined> ''
      - title: State
        type: select
        label: State
        name: state
        required: !<tag:yaml.org,2002:js/undefined> ''
        text_appearance: !<tag:yaml.org,2002:js/undefined> ''
        text_validation: !<tag:yaml.org,2002:js/undefined> ''
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options:
          - Alabama
          - Alaska
          - Arizona
          - Arkansas
          - California
          - Colorado
          - 'Connecticut '
          - 'Delaware '
          - 'District Of Columbia '
          - 'Florida '
          - 'Georgia '
          - 'Hawaii '
          - 'Idaho '
          - 'Illinois '
          - 'Indiana '
          - 'Iowa '
          - 'Kansas '
          - 'Kentucky '
          - 'Louisiana '
          - 'Maine '
          - 'Maryland '
          - 'Massachusetts '
          - 'Michigan '
          - 'Minnesota '
          - 'Mississippi '
          - 'Missouri '
          - 'Montana '
          - 'Nebraska '
          - 'Nevada '
          - 'New Hampshire '
          - 'New Jersey '
          - 'New Mexico '
          - 'New York '
          - 'North Carolina '
          - 'North Dakota '
          - 'Ohio '
          - 'Oklahoma '
          - 'Oregon '
          - 'Pennsylvania '
          - 'Rhode Island '
          - 'South Carolina '
          - 'South Dakota '
          - 'Tennessee '
          - 'Texas '
          - 'Utah '
          - 'Vermont '
          - 'Virginia '
          - 'Washington '
          - 'West Virginia '
          - 'Wisconsin '
          - Wyoming
        select_appearance: dropdown
        width: quarter
        solo: !<tag:yaml.org,2002:js/undefined> ''
      - title: Zip
        type: text
        label: Zip
        name: zip
        required: !<tag:yaml.org,2002:js/undefined> ''
        text_appearance: short
        text_validation: !<tag:yaml.org,2002:js/undefined> ''
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options: !<tag:yaml.org,2002:js/undefined> ''
        select_appearance: !<tag:yaml.org,2002:js/undefined> ''
        width: quarter
        solo: !<tag:yaml.org,2002:js/undefined> ''
      - title: Message
        type: text
        label: Message
        name: message
        required: true
        text_appearance: long
        text_validation: !<tag:yaml.org,2002:js/undefined> ''
        text_placeholder: !<tag:yaml.org,2002:js/undefined> ''
        select_options: !<tag:yaml.org,2002:js/undefined> ''
        select_appearance: !<tag:yaml.org,2002:js/undefined> ''
        width: full
        solo: !<tag:yaml.org,2002:js/undefined> ''
---

