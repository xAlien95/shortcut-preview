const identifier = 'is.workflow.actions.viewresult';
const icon = 'Graph';

const WFAction = {
  ActionClass: 'WFViewContentGraphAction',
  Description: {
    DescriptionSummary: 'Shows the results of the previous action in the Content Graph.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  InputPassthrough: true,
  Name: 'View Content Graph',
  RequiredResources: ['WFUserInteractionResource'],
  ShortName: 'Content Graph',
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
