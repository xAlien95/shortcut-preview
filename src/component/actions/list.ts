const identifier = 'is.workflow.actions.list';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFListAction',
  ActionKeywords: ['array'],
  Description: {
    DescriptionNote:
      'If you specify a variable, the contents of that variable will be included in the list.',
    DescriptionSummary: 'Allows you to specify a list of items to be passed to the next action.',
  },
  Name: 'List',
  Output: {
    Multiple: true,
    OutputName: 'List',
    Types: ['WFContentItem'],
  },
  Parameters: [
    {
      Class: 'WFContentArrayParameter',
      DefaultValue: ['One', 'Two'],
      Key: 'WFItems',
      Label: 'Items',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
