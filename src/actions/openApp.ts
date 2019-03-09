const identifier = 'is.workflow.actions.openapp';
const icon = 'Apps';

const WFAction = {
  ActionClass: 'WFOpenAppAction',
  ActionKeywords: ['launch', 'run', 'switch'],
  Description: {
    DescriptionSummary: 'Opens the specified app.',
  },
  InputPassthrough: true,
  Name: 'Open App',
  Parameters: [
    {
      AppSearchType: 'OpenApp',
      Class: 'WFAppPickerParameter',
      Key: 'WFAppIdentifier',
      Label: 'App',
    },
    {
      Class: 'WFTextInputParameter',
      Hidden: true,
      Key: 'WFAppName',
    },
  ],
  RequiredResources: ['WFURLOpenResource'],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
