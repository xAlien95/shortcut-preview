const identifier = 'is.workflow.actions.setvariable';
const icon = 'Variable';

const WFAction = {
  ActionClass: 'WFSetVariableAction',
  ActionKeywords: ['programming', 'scripting', 'var'],
  Description: {
    DescriptionSummary: 'Sets the value of the specified variable to the input of this action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  InputPassthrough: true,
  Name: 'Set Variable',
  Parameters: [
    {
      Class: 'WFVariableFieldParameter',
      Key: 'WFVariableName',
      Label: 'Variable',
      Placeholder: 'Variable Name',
      TextAlignment: 'Right',
    },
  ],
};

export { identifier, icon, WFAction };
