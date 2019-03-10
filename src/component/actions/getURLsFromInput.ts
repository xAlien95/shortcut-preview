const identifier = 'is.workflow.actions.detect.link';
const icon = 'URL';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['link', 'web', 'site', 'detect', 'scan'],
  CoercionItemClass: 'WFURLContentItem',
  Description: {
    DescriptionSummary: 'Returns any links found in the output from the previous action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSURL'],
  },
  Name: 'Get URLs from Input',
  Output: {
    Multiple: true,
    OutputName: 'URLs',
    Types: ['WFURLContentItem'],
  },
  ShortName: 'Get URLs',
};

export { identifier, icon, WFAction };
