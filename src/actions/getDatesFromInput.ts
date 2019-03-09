const identifier = 'is.workflow.actions.detect.date';
const icon = 'Date';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['date', 'time', 'detect', 'scan'],
  CoercionItemClass: 'WFDateContentItem',
  Description: {
    DescriptionSummary: 'Returns any dates found in the output from the previous action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSDate'],
  },
  Name: 'Get Dates from Input',
  Output: {
    Multiple: true,
    OutputName: 'Dates',
    Types: ['WFDateContentItem'],
  },
  ShortName: 'Get Dates',
};

export { identifier, icon, WFAction };
