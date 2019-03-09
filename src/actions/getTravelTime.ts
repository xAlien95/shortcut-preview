const identifier = 'is.workflow.actions.gettraveltime';
const icon = 'Maps';

const WFAction = {
  ActionClass: 'WFGetTravelTimeAction',
  ActionKeywords: ['maps', 'directions', 'calculate', 'estimated', 'arrival', 'eta'],
  AppIdentifier: 'com.apple.Maps',
  Description: {
    DescriptionInput: 'The destination',
    DescriptionNote:
      'Travel times are provided by Apple Maps and take into account current traffic conditions.',
    DescriptionResult:
      'The amount of time it will take to get to the destination. If passed into an action expecting a date, this will be the date and time of arrival if you leave now.',
    DescriptionSummary:
      'Estimates the amount of time it will take to travel to the location passed into this action.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSString', 'CLLocation', 'MKMapItem'],
  },
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Get Travel Time',
  Output: {
    Multiple: false,
    OutputName: 'Travel Time',
    Types: ['WFTimeInterval'],
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
      DefaultValue: 'Driving',
      Items: ['Driving', 'Walking', 'Transit'],
      Key: 'WFGetDirectionsActionMode',
      Label: 'Transportation Mode',
    },
  ],
  RequiredResources: ['WFMainThreadResource', 'WFLocationAccessResource'],
  UnsupportedEnvironments: ['Background'],
};

export { identifier, icon, WFAction };
