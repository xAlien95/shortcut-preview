const identifier = 'is.workflow.actions.text.changecase';
const icon = 'Text';

const WFAction = {
  ActionClass: 'WFChangeTextCaseAction',
  ActionKeywords: ['uppercase', 'lowercase', 'title', 'transform', 'text', 'capitalize'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Changes the case of the text passed into the action to UPPERCASE, lowercase, or Title Case.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString'],
  },
  LastModifiedDate: '2015-02-19T08:00:00.000Z',
  Name: 'Change Case',
  Output: {
    Multiple: true,
    OutputName: 'Text',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'UPPERCASE',
      Items: [
        'UPPERCASE',
        'lowercase',
        'Capitalize Every Word',
        'Capitalize with Title Case',
        'Capitalize with sentence case.',
        'cApItAlIzE wItH aLtErNaTiNg CaSe.',
      ],
      Key: 'WFCaseType',
      Label: 'Case',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
