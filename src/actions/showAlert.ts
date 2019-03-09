const identifier = 'is.workflow.actions.alert';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFAlertAction',
  ActionKeywords: ['message', 'ask', 'display', 'prompt', 'show', 'confirmation'],
  Description: {
    DescriptionSummary:
      'Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut.',
  },
  InputPassthrough: true,
  Name: 'Show Alert',
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      DefaultValue: 'Alert',
      DisallowedVariableTypes: ['Ask'],
      Key: 'WFAlertActionTitle',
      Label: 'Title',
      Placeholder: 'Attention-grabbing title',
    },
    {
      Class: 'WFTextInputParameter',
      DefaultValue: 'Do you want to continue?',
      DisallowedVariableTypes: ['Ask'],
      Key: 'WFAlertActionMessage',
      Label: 'Message',
      Multiline: true,
      Placeholder: 'Informational message',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      DisallowedVariableTypes: ['Ask'],
      Key: 'WFAlertActionCancelButtonShown',
      Label: 'Show Cancel Button',
    },
  ],
  RequiredResources: ['WFUserInteractionResource'],
};

export { identifier, icon, WFAction };
