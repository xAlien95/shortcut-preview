const identifier = 'is.workflow.actions.nothing';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFNothingAction',
  ActionKeywords: ['nil', 'nothing', 'empty', 'discard', 'clear'],
  Description: {
    DescriptionSummary:
      'This action does nothing and produces no output. It is useful to separate blocks of actions, or to ensure that no input is passed to the next action.',
  },
  InputPassthrough: false,
  Name: 'Nothing',
};

export { identifier, icon, WFAction };
