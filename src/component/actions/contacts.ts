const identifier = 'is.workflow.actions.contacts';
const icon = 'Contacts';

const WFAction = {
  ActionClass: 'WFContactsAction',
  ActionKeywords: ['contact', 'person', 'people'],
  AppIdentifier: 'com.apple.MobileAddressBook',
  Description: {
    DescriptionSummary: 'Passes the specified contacts to the next action.',
  },
  Name: 'Contacts',
  Output: {
    Multiple: true,
    OutputName: 'Contacts',
    Types: ['WFContact'],
  },
  Parameters: [
    {
      AllowsTextEntry: false,
      Class: 'WFContactFieldParameter',
      Key: 'WFContact',
      Placeholder: 'Press + to add contacts',
    },
  ],
  RequiredResources: ['WFContactAccessResource'],
};

export { identifier, icon, WFAction };
