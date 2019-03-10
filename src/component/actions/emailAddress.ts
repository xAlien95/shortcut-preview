const identifier = 'is.workflow.actions.email';
const icon = 'Mail';

const WFAction = {
  ActionClass: 'WFEmailAddressAction',
  ActionKeywords: ['emails', 'e-mails', 'address'],
  AppIdentifier: 'com.apple.mobilemail',
  Description: {
    DescriptionSummary: 'Passes the specified email addresses to the next action.',
  },
  Name: 'Email Address',
  Output: {
    Multiple: true,
    OutputName: 'Email Address',
    Types: ['WFEmailAddress'],
  },
  Parameters: [
    {
      Class: 'WFEmailAddressFieldParameter',
      Key: 'WFEmailAddress',
      Placeholder: 'Type in an email address',
    },
  ],
  RequiredResources: ['WFContactAccessResource'],
};

export { identifier, icon, WFAction };
