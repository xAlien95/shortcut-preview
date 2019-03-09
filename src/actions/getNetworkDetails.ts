const identifier = 'is.workflow.actions.getwifi';
const icon = 'Wi-Fi';

const WFAction = {
  ActionClass: 'WFGetNetworkDetailsAction',
  ActionKeywords: [
    'wifi',
    'wi-fi',
    'mac',
    'address',
    'name',
    'technology',
    'code',
    'radio',
    'country',
    'carrier',
    'cellular',
    'wlan',
  ],
  CreationDate: '2015-08-20T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets information about the currently connected networks.',
  },
  Name: 'Get Network Details',
  Output: {
    Multiple: false,
    OutputName: 'Network Details',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFNetworkPickerParameter',
      Key: 'WFNetworkDetailsNetwork',
      Label: 'Network',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Network Name',
      Items: ['Network Name', 'BSSID'],
      Key: 'WFWiFiDetail',
      Label: 'Get',
      RequiredResources: [
        {
          WFParameterKey: 'WFNetworkDetailsNetwork',
          WFParameterValue: 'Wi-Fi',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Carrier Name',
      Items: ['Carrier Name', 'Radio Technology', 'Country Code'],
      Key: 'WFCellularDetail',
      Label: 'Get',
      RequiredResources: [
        {
          WFParameterKey: 'WFNetworkDetailsNetwork',
          WFParameterValue: 'Cellular',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
