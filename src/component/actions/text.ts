const identifier = 'is.workflow.actions.gettext';
const icon = 'Text';

const WFAction = {
  ActionClass: 'WFTextAction',
  ActionKeywords: ['text', 'such text', 'very speech', 'much words', 'so wow', 'string'],
  Description: {
    DescriptionSummary: 'Passes the specified text to the next action.',
  },
  Name: 'Text',
  Output: {
    Multiple: false,
    OutputName: 'Text',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      DefaultValue: '',
      Key: 'WFTextActionText',
      Multiline: true,
      Placeholder: 'Enter text...',
    },
  ],
};

export { identifier, icon, WFAction };
