const identifier = 'is.workflow.actions.hash';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFGenerateHashAction',
  ActionKeywords: ['crypto'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Generates a MD5/SHA1 hash from the input.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFGenericFileContentItem'],
  },
  Name: 'Generate Hash',
  Output: {
    Multiple: true,
    OutputName: 'Hash',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'MD5',
      Items: ['MD5', 'SHA1', 'SHA256', 'SHA512'],
      Key: 'WFHashType',
      Label: 'Type',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
