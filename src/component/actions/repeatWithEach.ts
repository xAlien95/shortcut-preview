const identifier = 'is.workflow.actions.repeat.each';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFForEachRepeatAction',
  ActionKeywords: ['loop', 'while', 'for'],
  Description: {
    DescriptionInput: 'A list of items',
    DescriptionResult: 'Every item passed to the “End Repeat” action',
    DescriptionSummary:
      'Takes a list of items as input, and runs the contained actions once for each item in the list.',
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['WFContentItem'],
  },
  LastModifiedDate: '2015-05-12T07:00:00.000Z',
  Name: 'Repeat with Each',
  Output: {
    Multiple: true,
    OutputName: 'Repeat with Each',
    Types: ['WFContentItem'],
  },
};

export { identifier, icon, WFAction };
