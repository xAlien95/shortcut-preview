const identifier = 'is.workflow.actions.getvariable';
const icon = 'Variable';

const WFAction = {
  ActionClass: 'WFGetVariableAction',
  ActionKeywords: ['programming', 'scripting', 'var'],
  Description: {
    DescriptionSummary:
      'Gets the value of the specified variable and passes it to the next action.',
  },
  Name: 'Get Variable',
  Output: {
    Multiple: true,
    OutputName: 'Variable',
    Types: ['WFContentItem'],
  },
  Parameters: [
    {
      Class: 'WFVariablePickerParameter',
      DisallowedVariableTypes: ['Clipboard'],
      Key: 'WFVariable',
      Label: 'Variable',
    },
  ],
};

export { identifier, icon, WFAction };
