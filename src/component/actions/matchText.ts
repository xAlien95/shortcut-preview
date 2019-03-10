const identifier = 'is.workflow.actions.text.match';
const icon = 'Text';

const WFAction = {
  ActionClass: 'WFMatchTextAction',
  ActionKeywords: ['finding', 'matching', 'searching', 'regular', 'expression', 'regexp'],
  Description: {
    DescriptionResult: 'A list of text items that matched the regular expression',
    DescriptionSummary: 'Searches text passed into the action for matches to a regular expression.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSString'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2016-05-23T07:00:00.000Z',
  Name: 'Match Text',
  Output: {
    Multiple: true,
    OutputName: 'Text Matches',
    Types: ['WFTextMatch'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      DefaultValue: '[0-9a-zA-Z]',
      Key: 'WFMatchTextPattern',
      Label: 'Pattern',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Description: 'When disabled, the capitalization of letters is ignored.',
      Key: 'WFMatchTextCaseSensitive',
      Label: 'Case Sensitive',
    },
  ],
};

export { identifier, icon, WFAction };
