const identifier = 'is.workflow.actions.urlencode';
const icon = 'URL';

const WFAction = {
  ActionClass: 'WFURLEncodeAction',
  ActionKeywords: ['URL', 'encode', 'decode', 'x', 'callback', 'x-callback', 'xcallback'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing percent escapes when appropriate.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFStringContentItem'],
  },
  Name: 'URL Encode',
  Output: {
    Multiple: true,
    OutputName: 'URL Encoded Text',
    Types: ['WFStringContentItem'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Encode',
      Items: ['Encode', 'Decode'],
      Key: 'WFEncodeMode',
      Label: 'Mode',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
