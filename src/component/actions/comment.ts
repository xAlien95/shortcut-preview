const identifier = 'is.workflow.actions.comment';
const icon = 'Text';

const WFAction = {
  ActionClass: 'WFCommentAction',
  ActionKeywords: ['note', 'explain'],
  CreationDate: '2015-08-29T17:26:33.000Z',
  Description: {
    DescriptionSummary:
      'This action lets you explain how part of a shortcut works. When run, this action does nothing.',
  },
  InputPassthrough: true,
  Name: 'Comment',
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      Key: 'WFCommentActionText',
      Multiline: true,
      Placeholder: 'Enter comment...',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
