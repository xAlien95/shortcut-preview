const identifier = 'is.workflow.actions.getwebpagecontents';
const icon = 'Safari';

const WFAction = {
  ActionClass: 'WFGetWebPageAction',
  AppIdentifier: 'com.apple.mobilesafari',
  Description: {
    DescriptionSummary: 'Extracts the contents of the web pages passed into the action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  Name: 'Get Contents of Web Page',
  Output: {
    Multiple: true,
    OutputName: 'Contents of Web Page',
    Types: ['NSAttributedString'],
  },
  ShortName: 'Get Web Page',
  UnsupportedEnvironments: ['MemoryConstrained'],
};

export { identifier, icon, WFAction };
