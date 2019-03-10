const identifier = 'is.workflow.actions.correctspelling';
const icon = 'Text';

const WFAction = {
  ActionClass: 'WFSpellCorrectAction',
  ActionKeywords: ['text', 'spell', 'spelling', 'correct', 'autocorrect'],
  Description: {
    DescriptionSummary: 'Autocorrects the spelling of text passed into the action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString'],
  },
  Name: 'Correct Spelling',
  Output: {
    Multiple: true,
    OutputName: 'Corrected Spelling',
    Types: ['NSString'],
  },
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
