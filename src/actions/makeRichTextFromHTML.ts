const identifier = 'is.workflow.actions.getrichtextfromhtml';
const icon = 'RichText';

const WFAction = {
  ActionClass: 'WFRichTextFromHTMLAction',
  ActionKeywords: ['page', 'source', 'web', 'get'],
  Description: {
    DescriptionInput: 'HTML',
    DescriptionSummary:
      'Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFStringContentItem'],
  },
  Name: 'Make Rich Text from HTML',
  Output: {
    Multiple: false,
    OutputName: 'Rich Text from HTML',
    Types: ['public.html'],
  },
  ShortName: 'Make Rich Text',
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
