const identifier = 'is.workflow.actions.setvalueforkey';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFSetDictionaryValueAction',
  ActionKeywords: [
    'json',
    'plist',
    'xml',
    'urlencoded',
    'query',
    'string',
    'for',
    'key',
    'update',
    'merge',
  ],
  CreationDate: '2016-10-04T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Sets a value in the dictionary passed into the action. ',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFDictionaryContentItem'],
  },
  InputPassthrough: false,
  Name: 'Set Dictionary Value',
  Output: {
    Multiple: false,
    OutputName: 'Dictionary',
    Types: ['WFDictionaryContentItem'],
  },
  Parameters: [
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DisableAutocorrection: true,
      Key: 'WFDictionaryKey',
      Label: 'Key',
      Placeholder: 'name',
      TextAlignment: 'Right',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DisableAutocorrection: true,
      Key: 'WFDictionaryValue',
      Label: 'Value',
      Placeholder: 'example',
      TextAlignment: 'Right',
    },
  ],
};

export { identifier, icon, WFAction };
