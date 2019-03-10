const identifier = 'is.workflow.actions.number';
const icon = 'Calculator';

const WFAction = {
  ActionClass: 'WFNumberAction',
  ActionKeywords: ['decimal', 'math'],
  Description: {
    DescriptionSummary: 'Passes a number to the next action.',
  },
  Name: 'Number',
  Output: {
    Multiple: false,
    OutputName: 'Number',
    Types: ['NSDecimalNumber'],
  },
  Parameters: [
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      Key: 'WFNumberActionNumber',
      Label: 'Number',
      Placeholder: '42',
      TextAlignment: 'Right',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
