const identifier = 'is.workflow.actions.conditional';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFConditionalAction',
  ActionKeywords: ['statement', 'conditional', 'then'],
  Description: {
    DescriptionSummary:
      'Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under “Otherwise” are run.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFStringContentItem', 'WFNumberContentItem'],
  },
  InputPassthrough: true,
  LastModifiedDate: '2015-01-11T06:00:00.000Z',
  Name: 'If',
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Contains',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      Items: ['Equals', 'Contains', 'Is Greater Than', 'Is Less Than'],
      Key: 'WFCondition',
      Label: 'Input',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      Key: 'WFNumberValue',
      Label: 'Number',
      Placeholder: '7',
      RequiredResources: [
        {
          WFParameterKey: 'WFCondition',
          WFParameterValues: ['Is Greater Than', 'Is Less Than'],
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      DefaultValue: '',
      Key: 'WFConditionalActionString',
      Label: 'Value',
      Placeholder: 'example',
      RequiredResources: [
        {
          WFParameterKey: 'WFCondition',
          WFParameterValues: ['Contains', 'Equals'],
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
  SettingsUI: {
    ViewControllerClass: 'WFConditionalActionSettingsViewController',
  },
};

export { identifier, icon, WFAction };
