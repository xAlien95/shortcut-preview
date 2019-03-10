const identifier = 'is.workflow.actions.runextension';
const icon = 'Apps';

const WFAction = {
  ActionClass: 'WFRunExtensionAction',
  ActionKeywords: ['action', 'extension', 'sharing', 'share', 'ios 8', 'app', 'inter'],
  Description: {
    DescriptionSummary:
      'Prompts to share the input using action extensions and sharing extensions provided by other apps.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  InputPassthrough: true,
  Name: 'Share with Extensions',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
