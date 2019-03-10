const identifier = 'is.workflow.actions.airdropdocument';
const icon = 'AirDrop';

const WFAction = {
  ActionClass: 'WFAirDropAction',
  ActionKeywords: ['airdrop', 'file', 'document', 'send', 'share'],
  Description: {
    DescriptionSummary: 'Prompts to share the input via AirDrop.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  InputPassthrough: true,
  Name: 'AirDrop',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
