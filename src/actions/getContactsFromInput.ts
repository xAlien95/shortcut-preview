const identifier = 'is.workflow.actions.detect.contacts';
const icon = 'Contacts';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['find', 'detect', 'people', 'person', 'email', 'e-mail', 'phone'],
  AppIdentifier: 'com.apple.MobileAddressBook',
  CoercionItemClass: 'WFContactContentItem',
  Description: {
    DescriptionSummary: 'Gets contacts from the result of the previous action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContact'],
  },
  Name: 'Get Contacts from Input',
  Output: {
    Multiple: true,
    OutputName: 'Contacts',
    Types: ['WFContactContentItem'],
  },
  RequiredResources: ['WFContactAccessResource'],
  ShortName: 'Get Contacts',
};

export { identifier, icon, WFAction };
