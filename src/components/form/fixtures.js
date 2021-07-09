export default {
  default: {
    button_label: "Submit",
    field_groups: [
      {
        fields: [
          {
            appearance: "short",
            label: "First Name",
            name: "name",
            placeholder: "",
            required: true,
            select_appearance: "",
            select_options: [],
            solo: true,
            text_appearance: "short",
            text_placeholder: "",
            text_validation: "",
            title: "Name",
            type: "text",
            validation: "",
            width: "half"
          },
          {
            appearance: "short",
            label: "Email",
            name: "email",
            placeholder: "",
            required: true,
            select_appearance: "",
            select_options: [],
            solo: false,
            text_appearance: "short",
            text_placeholder: "",
            text_validation: "email",
            title: "Email",
            type: "text",
            validation: "email",
            width: "half"
          },
          {
            appearance: "short",
            label: "Phone",
            name: "phone",
            placeholder: "(xxx) xxx-xxxx",
            required: true,
            select_appearance: "",
            select_options: [],
            solo: false,
            text_appearance: "short",
            text_placeholder: "(xxx) xxx-xxxx",
            text_validation: "phone",
            title: "Phone",
            type: "text",
            validation: "phone",
            width: "half"
          },
          {
            appearance: "radio",
            label: "Gender",
            name: "gender",
            options: ["Female", "Male"],
            required: true,
            select_appearance: "radio",
            select_options: ["Female", "Male"],
            solo: false,
            text_appearance: "",
            text_placeholder: "",
            text_validation: "",
            title: "Gender",
            type: "select",
            width: "full"
          }
        ],
        heading: "Personal Info",
        title: "Personal Info"
      },
      {
        fields: [
          {
            appearance: "short",
            label: "Street Address",
            name: "street_address",
            placeholder: "",
            required: false,
            select_appearance: "",
            select_options: [],
            solo: false,
            text_appearance: "short",
            text_placeholder: "",
            text_validation: "",
            title: "Street Address",
            type: "text",
            validation: "",
            width: "half"
          },
          {
            appearance: "short",
            label: "Suite / Apt.",
            name: "suite_apt",
            placeholder: "",
            required: false,
            select_appearance: "",
            select_options: [],
            solo: false,
            text_appearance: "short",
            text_placeholder: "",
            text_validation: "",
            title: "Suite / Apt.",
            type: "text",
            validation: "",
            width: "half"
          },
          {
            appearance: "short",
            label: "City",
            name: "city",
            placeholder: "",
            required: false,
            select_appearance: "",
            select_options: [],
            solo: false,
            text_appearance: "short",
            text_placeholder: "",
            text_validation: "",
            title: "City",
            type: "text",
            validation: "",
            width: "half"
          },
          {
            appearance: "dropdown",
            label: "State",
            name: "state",
            options: [
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "District Of Columbia",
              "Florida",
              "Georgia",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming"
            ],
            required: false,
            select_appearance: "dropdown",
            select_options: [
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "District Of Columbia",
              "Florida",
              "Georgia",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming"
            ],
            solo: false,
            text_appearance: "",
            text_placeholder: "",
            text_validation: "",
            title: "State",
            type: "select",
            width: "quarter"
          },
          {
            appearance: "short",
            label: "Zip Code",
            name: "zip",
            placeholder: "",
            required: false,
            select_appearance: "",
            select_options: [],
            solo: false,
            text_appearance: "short",
            text_placeholder: "",
            text_validation: "",
            title: "Zip Code",
            type: "text",
            validation: "",
            width: "quarter"
          }
        ],
        heading: "Address",
        title: "Address"
      },
      {
        fields: [
          {
            appearance: "long",
            label: "Message",
            name: "message",
            placeholder: "",
            required: true,
            select_appearance: "",
            select_options: [],
            solo: false,
            text_appearance: "long",
            text_placeholder: "",
            text_validation: "",
            title: "Message",
            type: "text",
            validation: "",
            width: "full"
          }
        ],
        heading: "Message",
        title: "Message"
      }
    ],
    model: "Form",
    title: "Contact Form"
  }
}
