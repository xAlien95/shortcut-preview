const identifier = 'is.workflow.actions.getcurrentlocation';
const icon = 'Location';

const WFAction = {
  ActionClass: 'WFGetCurrentLocationAction',
  ActionKeywords: ['gps', 'map', 'place', 'address'],
  Description: {
    DescriptionSummary: 'Gets the current location of the device.',
  },
  Name: 'Get Current Location',
  Output: {
    Multiple: false,
    OutputName: 'Current Location',
    Types: ['CLLocation'],
  },
  RequiredResources: ['WFMainThreadResource', 'WFLocationAccessResource'],
  ShortName: 'Current Location',
  UnsupportedEnvironments: ['Background'],
};

export { identifier, icon, WFAction };
