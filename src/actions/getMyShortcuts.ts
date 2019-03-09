const identifier = 'is.workflow.actions.getmyworkflows';
const icon = 'Shortcuts';

const WFAction = {
  ActionClass: 'WFGetMyWorkflowsAction',
  ActionKeywords: ['installed', 'downloaded', 'workflow'],
  AppIdentifier: 'is.workflow.my.app',
  CreationDate: '2015-08-16T05:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts.',
  },
  Name: 'Get My Shortcuts',
  Output: {
    Multiple: true,
    OutputName: 'My Shortcuts',
    Types: ['WFWorkflow'],
  },
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
