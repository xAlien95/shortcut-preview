const identifier = 'is.workflow.actions.getvalueforkey';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFGetDictionaryValueAction',
  ActionKeywords: ['json', 'plist', 'xml', 'urlencoded', 'query', 'string', 'for', 'key'],
  Description: {
    DescriptionSummary:
      'Gets the value for the specified key in the dictionary passed into the action. ',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFDictionaryContentItem'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2016-10-10T19:00:00.000Z',
  Name: 'Get Dictionary Value',
  Output: {
    Multiple: true,
    OutputName: 'Dictionary Value',
    Types: [
      'WFStringContentItem',
      'WFNumberContentItem',
      'WFDateContentItem',
      'WFDictionaryContentItem',
      'WFBooleanContentItem',
    ],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Value',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      Items: ['Value', 'All Keys', 'All Values'],
      Key: 'WFGetDictionaryValueType',
      Label: 'Get',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DisableAutocorrection: true,
      Key: 'WFDictionaryKey',
      Label: 'Key',
      Placeholder: 'example',
      RequiredResources: [
        {
          WFParameterKey: 'WFGetDictionaryValueType',
          WFParameterValue: 'Value',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
};

export { identifier, icon, WFAction };
