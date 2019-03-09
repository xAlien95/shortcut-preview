const identifier = 'is.workflow.actions.address';
const icon = 'Maps';

const WFAction = {
  ActionClass: 'WFAddressAction',
  ActionKeywords: ['maps', 'search', 'query', 'place', 'location', 'find'],
  AppIdentifier: 'com.apple.Maps',
  Description: {
    DescriptionSummary: 'Passes the specified address to the next action.',
  },
  InputPassthrough: false,
  Name: 'Street Address',
  Output: {
    Multiple: false,
    OutputName: 'Street Address',
    Types: ['WFStreetAddress'],
  },
  Parameters: [
    {
      AutocapitalizationType: 'Words',
      Class: 'WFTextInputParameter',
      Key: 'WFAddressLine1',
      Label: 'Line 1',
      Placeholder: 'One Apple Park Way',
      TextContentType: 'StreetAddressLine1',
    },
    {
      AutocapitalizationType: 'Words',
      Class: 'WFTextInputParameter',
      Key: 'WFAddressLine2',
      Label: 'Line 2',
      TextContentType: 'StreetAddressLine2',
    },
    {
      AutocapitalizationType: 'Words',
      Class: 'WFTextInputParameter',
      Key: 'WFCity',
      Label: 'City',
      Placeholder: 'Cupertino',
      TextContentType: 'AddressCity',
    },
    {
      AutocapitalizationType: 'Words',
      Class: 'WFTextInputParameter',
      Key: 'WFState',
      Label: 'State',
      Placeholder: 'California',
      TextContentType: 'AddressState',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFPostalCode',
      KeyboardType: 'NumbersAndPunctuation',
      Label: 'Postal Code',
      Placeholder: '95014',
      TextContentType: 'PostalCode',
    },
    {
      AutocapitalizationType: 'Words',
      Class: 'WFCountryFieldParameter',
      Key: 'WFCountry',
      Label: 'Country',
      Placeholder: 'United States',
    },
  ],
};

export { identifier, icon, WFAction };
