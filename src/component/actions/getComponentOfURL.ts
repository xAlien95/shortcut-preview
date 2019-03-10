const identifier = 'is.workflow.actions.geturlcomponent';
const icon = 'URL';

const WFAction = {
  ActionClass: 'WFURLGetComponentAction',
  ActionKeywords: ['Scheme', 'User', 'Password', 'Host', 'Port', 'Path', 'Query', 'Fragment'],
  Description: {
    DescriptionNote:
      'URLs are structured as follows: scheme://user:password@host:port/path?query#fragment',
    DescriptionSummary: 'Gets the specified part of the URL passed into the action.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  InputPassthrough: false,
  Name: 'Get Component of URL',
  Output: {
    Multiple: false,
    OutputName: 'Component of URL',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Scheme',
      Items: ['Scheme', 'User', 'Password', 'Host', 'Port', 'Path', 'Query', 'Fragment'],
      Key: 'WFURLComponent',
      Label: 'Component',
    },
  ],
  ShortName: 'Get Component',
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
