const identifier = 'is.workflow.actions.exit';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFExitAction',
  ActionKeywords: ['quit', 'return', 'workflow'],
  Description: {
    DescriptionSummary:
      'Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action.',
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['WFContentItem'],
  },
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Exit Shortcut',
  RequiredResources: ['WFMainThreadResource'],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
