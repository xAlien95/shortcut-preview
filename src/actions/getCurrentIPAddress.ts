const identifier = 'is.workflow.actions.getipaddress';
const icon = 'Network';

const WFAction = {
  ActionClass: 'WFGetIPAddressAction',
  ActionKeywords: ['network', 'local', 'external', 'cellular', 'wi-fi', 'wifi'],
  CreationDate: '2015-08-20T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Returns the local or external IP address of the device.',
  },
  Name: 'Get Current IP Address',
  Output: {
    Multiple: false,
    OutputName: 'Current IP Address',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'External',
      Items: ['External', 'Local'],
      Key: 'WFIPAddressSourceOption',
      Label: 'Address',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'IPv4',
      Items: ['IPv4', 'IPv6'],
      Key: 'WFIPAddressTypeOption',
      Label: 'Type',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
