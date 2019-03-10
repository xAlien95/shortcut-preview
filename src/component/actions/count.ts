const identifier = 'is.workflow.actions.count';
const icon = 'Calculator';

const WFAction = {
  ActionClass: 'WFCountAction',
  ActionKeywords: ['get', 'number', 'length', 'list'],
  Description: {
    DescriptionNote:
      "This is just like the Count in Sesame Street, but instead of a vampire, it's a Shortcuts action.",
    DescriptionSummary:
      'Counts the number of items, characters, words, sentences, or lines passed as input.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem', 'WFStringContentItem'],
  },
  Name: 'Count',
  Output: {
    Multiple: false,
    OutputName: 'Count',
    Types: ['NSDecimalNumber'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      Items: ['Items', 'Characters', 'Words', 'Sentences', 'Lines'],
      Key: 'WFCountType',
      Label: 'Count',
    },
  ],
};

export { identifier, icon, WFAction };
