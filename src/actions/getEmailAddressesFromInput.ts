const identifier = 'is.workflow.actions.detect.emailaddress';
const icon = 'Mail';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['find', 'search', 'detect', 'scan', 'e-mail', 'emails'],
  AppIdentifier: 'com.apple.mobilemail',
  CoercionItemClass: 'WFEmailAddressContentItem',
  Description: {
    DescriptionSummary: 'Returns any email addresses found in the output from the previous action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFEmailAddress'],
  },
  Name: 'Get Email Addresses from Input',
  Output: {
    Multiple: true,
    OutputName: 'Email Addresses',
    Types: ['WFEmailAddressContentItem'],
  },
  ShortName: 'Get Addresses',
};

export { identifier, icon, WFAction };
