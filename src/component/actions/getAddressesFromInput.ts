const identifier = 'is.workflow.actions.detect.address';
const icon = 'Maps';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['address', 'street', 'detect', 'scan', 'map'],
  AppIdentifier: 'com.apple.Maps',
  CoercionItemClass: 'WFLocationContentItem',
  Description: {
    DescriptionSummary:
      'Returns any street addresses found in the output from the previous action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFStreetAddress'],
  },
  Name: 'Get Addresses from Input',
  Output: {
    Multiple: true,
    OutputName: 'Addresses',
    Types: ['WFLocationContentItem'],
  },
  ShortName: 'Get Addresses',
};

export { identifier, icon, WFAction };
