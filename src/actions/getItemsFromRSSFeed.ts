const identifier = 'is.workflow.actions.rss';
const icon = 'RSS';

const WFAction = {
  ActionClass: 'WFRSSFeedAction',
  ActionKeywords: ['article', 'podcast', 'text', 'clipboard', 'copy', 'paste'],
  Description: {
    DescriptionSummary: 'Downloads the latest items from an RSS feed.',
  },
  LastModifiedDate: '2015-02-19T08:00:00.000Z',
  Name: 'Get Items from RSS Feed',
  Output: {
    Multiple: true,
    OutputName: 'Items from RSS Feed',
    Types: ['WFArticle', 'NSURL'],
  },
  Parameters: [
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DefaultValue: 'https://www.apple.com/newsroom/rss-feed.rss',
      DisableAutocorrection: true,
      Key: 'WFRSSFeedURL',
      KeyboardType: 'URL',
      Label: 'URL',
      TextContentType: 'URL',
    },
    {
      Class: 'WFStepperParameter',
      DefaultValue: 10,
      Key: 'WFRSSItemQuantity',
      StepperDescription: 'Number of Items',
      StepperNoun: 'Item',
      StepperPluralNoun: 'Items',
      StepperPrefix: 'Get',
    },
  ],
  ShortName: 'Get RSS Items',
};

export { identifier, icon, WFAction };
