const identifier = 'is.workflow.actions.waittoreturn';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFWaitToReturnAction',
  ActionKeywords: ['wait'],
  Description: {
    DescriptionSummary:
      'Pauses execution until you leave the Shortcuts app and return to it.\n\nThis action might be useful after an action that switches apps, to pause execution until you return to the Shortcuts app.',
  },
  InputPassthrough: true,
  Name: 'Wait to Return',
  RequiredResources: ['WFMainThreadResource'],
};

export { identifier, icon, WFAction };
