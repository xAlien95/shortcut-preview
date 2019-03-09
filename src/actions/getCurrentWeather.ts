const identifier = 'is.workflow.actions.weather.currentconditions';
const icon = 'Weather';

const WFAction = {
  ActionClass: 'WFGetCurrentWeatherConditionsAction',
  ActionKeywords: [
    'current',
    'temperature',
    'visibility',
    'humidity',
    'pressure',
    'wind',
    'sunrise',
    'sunset',
  ],
  AppIdentifier: 'com.apple.weather',
  Description: {
    DescriptionAttribution: {
      Description: 'Weather information provided by ${Link}',
      Link: {
        Text: 'The Weather Channel',
        URL: 'https://www.weather.com',
      },
    },
    DescriptionSummary: 'Gets the current weather conditions at the specified location.',
  },
  InputPassthrough: false,
  Name: 'Get Current Weather',
  Output: {
    Multiple: false,
    OutputName: 'Weather Conditions',
    Types: ['WFWeatherData'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Current Location',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      Items: ['Current Location', 'Custom Location'],
      Key: 'WFWeatherLocation',
      Label: 'At',
    },
    {
      Class: 'WFLocationFieldParameter',
      HintDisplayMode: 'Never',
      Key: 'WFWeatherCustomLocation',
      Label: 'Location',
      Placeholder: 'Cupertino, CA',
      RequiredResources: [
        {
          WFParameterKey: 'WFWeatherLocation',
          WFParameterValue: 'Custom Location',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
  RequiredResources: ['WFWeatherAttributionAccessResource', 'WFLocationAccessResource'],
  UnsupportedEnvironments: ['Background'],
};

export { identifier, icon, WFAction };
