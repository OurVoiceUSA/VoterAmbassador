exports.branding = {
  "name": "ENTER YOUR ORGANIZATION NAME HERE",
  "logo": "logo192.png",
  "termsofservice": "https://YOUR-TERMS-OF-SERVICE-URL-HERE",
  "privacypolicy": "https://YOUR-PRIVACY-POLICY-URL-HERE",
  onboarding: [
    {
      title: "Become an ambassador",
      body: "Make a difference. Help increase voter turnout to better your community and the country.",
    },
    {
      title: "Sign up",
      body: "Becoming an ambassador is an easy way to better your community.",
    },
    {
      title: "Personal Info",
      body: "First we need some information about you.",
      fields: [
        {
          type: "string",
          key: "firstname",
        },
        {
          type: "string",
          key: "lastname",
        },
      ]
    },
    {
      title: "Address",
      body: "We need to know where you will do your Ambassador work.",
      fields: [
        {
          type: "string",
          key: "streetaddress",
        },
        {
          type: "string",
          key: "city",
        },
        {
          type: "state",
          key: "state",
        },
        {
          type: "string",
          key: "zip",
        },
      ]
    },
    {
      title: "Contact",
      body: "We need to know how to contact you.",
      fields: [
        {
          type: "email",
          key: "email",
          optional: true,
        },
        {
          type: "phone",
          key: "phone",
        },
      ]
    },
    {
      title: "Ambassador Training",
      body: "Here is a list of links of training materials. Please watch & read them all.",
    },
    {
      title: "Schedule an Interview",
      body: "Now that you've reviewed the training materials, please schedule an interview with us.",
    },
  ],
}
