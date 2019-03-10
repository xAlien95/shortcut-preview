const identifier = 'is.workflow.actions.showresult';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFShowResultAction',
  ActionKeywords: ['text', 'such text', 'very speech', 'much words', 'so wow', 'string'],
  Description: {
    DescriptionSummary: 'Shows the specified text in Siri or in an alert.',
  },
  InputPassthrough: true,
  Name: 'Show Result',
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      DefaultValue: '',
      Key: 'Text',
      Multiline: true,
      Placeholder: 'Enter text...',
    },
  ],
  RequiredResources: ['WFMainThreadResource'],
};

export { identifier, icon, WFAction };
