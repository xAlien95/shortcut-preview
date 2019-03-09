const identifier = 'is.workflow.actions.showdefinition';
const icon = 'Dictionary';

const WFAction = {
  ActionClass: 'WFShowDefinitionAction',
  ActionKeywords: ['define', 'word', 'dictionary', 'lookup', 'term'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Shows the definition of the word passed into the action.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSString'],
  },
  InputPassthrough: true,
  Name: 'Show Definition',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit', 'AppKit'],
};

export { identifier, icon, WFAction };
