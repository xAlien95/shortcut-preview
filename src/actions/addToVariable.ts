const identifier = 'is.workflow.actions.appendvariable';
const icon = 'Variable';

const WFAction = {
  ActionClass: 'WFAppendVariableAction',
  ActionKeywords: ['add'],
  Description: {
    DescriptionResult: 'The updated contents of the variable.',
    DescriptionSummary:
      "Appends this action's input to the specified variable, creating the variable if it does not exist.\n\nThis allows you to make a variable hold multiple items.",
  },
  Input: {
    Multiple: true,
    Required: true,
    TypePassthrough: true,
    Types: ['WFContentItem'],
  },
  Name: 'Add to Variable',
  Output: {
    Multiple: true,
    OutputName: 'Variable',
    Types: ['WFContentItem'],
  },
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
