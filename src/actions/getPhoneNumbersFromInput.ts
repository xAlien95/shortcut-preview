const identifier = 'is.workflow.actions.detect.phonenumber';
const icon = 'PhoneNumber';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['phone', 'number', 'detect', 'scan'],
  CoercionItemClass: 'WFPhoneNumberContentItem',
  Description: {
    DescriptionSummary: 'Returns any phone numbers found in the output from the previous action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFPhoneNumber'],
  },
  Name: 'Get Phone Numbers from Input',
  Output: {
    Multiple: true,
    OutputName: 'Phone Numbers',
    Types: ['WFPhoneNumberContentItem'],
  },
};

export { identifier, icon, WFAction };
