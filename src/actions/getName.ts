const identifier = 'is.workflow.actions.getitemname';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFGetItemNameAction',
  ActionKeywords: ['title'],
  Description: {
    DescriptionSummary:
      'Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  Name: 'Get Name',
  Output: {
    Multiple: true,
    OutputName: 'Name',
    Types: ['NSString'],
  },
};

export { identifier, icon, WFAction };
