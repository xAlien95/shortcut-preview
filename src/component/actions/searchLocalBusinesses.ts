const identifier = 'is.workflow.actions.searchlocalbusinesses';
const icon = 'Maps';

const WFAction = {
  ActionClass: 'WFSearchLocalBusinessesAction',
  ActionKeywords: ['maps', 'search', 'query', 'place', 'location', 'nearby', 'find'],
  AppIdentifier: 'com.apple.Maps',
  CreationDate: '2014-07-13T05:00:00.000Z',
  Description: {
    DescriptionInput: 'A location to search near.',
    DescriptionSummary: 'Searches for nearby businesses.',
  },
  Input: {
    Multiple: false,
    Required: false,
    Types: ['CLLocation'],
  },
  LastModifiedDate: '2015-01-11T06:00:00.000Z',
  Name: 'Search Local Businesses',
  Output: {
    Multiple: true,
    OutputName: 'Local Businesses',
    Types: ['MKMapItem'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Description: 'Keywords used to search for businesses.',
      Key: 'WFSearchQuery',
      Label: 'Search',
      Placeholder: 'coffee shops',
      TextAlignment: 'Right',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      DefaultValue: 1.5,
      Description: 'Maximum distance in kilometers from the source location to find businesses.',
      Key: 'WFSearchRadius',
      Label: 'Radius (km)',
      Placeholder: '1.5',
      TextAlignment: 'Right',
    },
  ],
  RequiredResources: ['WFMainThreadResource', 'WFLocationAccessResource'],
  ShortName: 'Search Maps',
  UnsupportedEnvironments: ['Background'],
};

export { identifier, icon, WFAction };
