const identifier = 'is.workflow.actions.share';
const icon = 'Sharing';

const WFAction = {
  ActionClass: 'WFShareAction',
  ActionKeywords: ['share', 'file', 'document', 'send'],
  Description: {
    DescriptionSummary: 'Prompts to share the input.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  InputPassthrough: true,
  Name: 'Share',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit', 'WatchKit'],
};

export { identifier, icon, WFAction };
