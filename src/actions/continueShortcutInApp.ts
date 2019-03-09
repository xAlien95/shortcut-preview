const identifier = 'is.workflow.actions.handoff';
const icon = 'HandoffAction';

const WFAction = {
  ActionClass: 'WFHandoffAction',
  ActionKeywords: [
    'apple',
    'watch',
    'send',
    'phone',
    'transfer',
    'switch',
    'handoff',
    'continuity',
    'workflow',
  ],
  CreationDate: '2015-08-20T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Switches into the Shortcuts app and continues to the next action.',
  },
  InputPassthrough: true,
  Name: 'Continue Shortcut in App',
  RequiredResources: ['WFUserInteractionResource'],
};

export { identifier, icon, WFAction };
