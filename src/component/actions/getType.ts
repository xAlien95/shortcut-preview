const identifier = 'is.workflow.actions.getitemtype';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFGetItemTypeAction',
  ActionKeywords: ['content', 'item', 'class'],
  Description: {
    DescriptionSummary:
      'Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  Name: 'Get Type',
  Output: {
    Multiple: true,
    OutputName: 'Type',
    Types: ['NSString'],
  },
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
