const identifier = 'is.workflow.actions.getdistance';
const icon = 'Maps';

const WFAction = {
  ActionClass: 'WFGetDistanceAction',
  ActionKeywords: ['maps', 'directions', 'calculate'],
  AppIdentifier: 'com.apple.Maps',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionInput: 'The destination',
    DescriptionResult: 'The distance to the location in miles or kilometers.',
    DescriptionSummary: 'Calculates the distance to the location passed into this action.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSString', 'CLLocation', 'MKMapItem'],
  },
  Name: 'Get Distance',
  Output: {
    Multiple: false,
    OutputName: 'Distance',
    Types: ['NSNumber'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Current Location',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      Items: ['Current Location', 'Custom Location'],
      Key: 'WFGetDirectionsFrom',
      Label: 'From',
    },
    {
      Class: 'WFLocationFieldParameter',
      Key: 'WFGetDirectionsCustomLocation',
      Label: 'Location',
      Placeholder: 'One Apple Park Way',
      RequiredResources: [
        {
          WFParameterKey: 'WFGetDirectionsFrom',
          WFParameterValue: 'Custom Location',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Direct',
      Items: ['Direct', 'Driving', 'Walking'],
      Key: 'WFGetDirectionsActionMode',
      Label: 'Route Type',
    },
    {
      Class: 'WFGetDistanceUnitPickerParameter',
      Items: ['Miles', 'Kilometers'],
      Key: 'WFDistanceUnit',
      Label: 'Unit',
    },
  ],
  RequiredResources: ['WFMainThreadResource', 'WFLocationAccessResource'],
  UnsupportedEnvironments: ['Background'],
};

export { identifier, icon, WFAction };
