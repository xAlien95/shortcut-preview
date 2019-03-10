const identifier = 'is.workflow.actions.ask';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFAskForInputAction',
  ActionKeywords: [
    'ask',
    'prompt',
    'show',
    'dialog',
    'keyboard',
    'text',
    'number',
    'url',
    'date',
    'time',
  ],
  Description: {
    DescriptionSummary: 'Displays a dialog prompting the user to enter a piece of information.',
  },
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Ask for Input',
  Output: {
    Multiple: false,
    OutputName: 'Ask for Input',
    Types: ['NSString', 'NSDecimalNumber', 'NSURL', 'NSDate'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      DisallowedVariableTypes: ['Ask'],
      Key: 'WFAskActionPrompt',
      Label: 'Question',
      Placeholder: 'Enter text',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      DisallowedVariableTypes: ['Ask'],
      Key: 'WFAskActionDefaultAnswer',
      Label: 'Default Answer',
      Placeholder: 'optional',
      RequiredResources: [
        {
          WFParameterKey: 'WFInputType',
          WFParameterRelation: '!=',
          WFParameterValue: 'Date',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFDateFieldParameter',
      DisallowedVariableTypes: ['Ask'],
      Key: 'WFAskActionDefaultAnswerDate',
      Label: 'Default Answer',
      Placeholder: 'June 29, 2007',
      RequiredResources: [
        {
          WFParameterKey: 'WFInputType',
          WFParameterValue: 'Date',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Text',
      DisallowedVariableTypes: ['Ask'],
      Items: ['Text', 'Number', 'URL', 'Date'],
      Key: 'WFInputType',
      Label: 'Input Type',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Date',
      DisallowedVariableTypes: ['Ask'],
      Items: ['Date', 'Time', 'Date and Time'],
      Key: 'WFAskActionDateGranularity',
      Label: 'Granularity',
      RequiredResources: [
        {
          WFParameterKey: 'WFInputType',
          WFParameterValue: 'Date',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFSwitchParameter',
      Description:
        'When enabled and run on Apple Watch, this action immediately begins listening for voice input.',
      DisallowedVariableTypes: ['Ask'],
      Hidden: true,
      Key: 'WFAskActionImmediateDictation',
      Label: 'Skip to Watch Dictation',
      RequiredResources: [
        {
          WFParameterKey: 'WFInputType',
          WFParameterRelation: '!=',
          WFParameterValue: 'Date',
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFResourceClass: 'WFWorkflowTypeResource',
          WFWorkflowType: 'WatchKit',
        },
      ],
    },
  ],
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit', 'UIKitWidget', 'WatchKit'],
};

export { identifier, icon, WFAction };
