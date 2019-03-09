const identifier = 'is.workflow.actions.rss.extract';
const icon = 'RSS';

const WFAction = {
  ActionClass: 'WFRSSFeedExtractAction',
  ActionKeywords: ['extract', 'clipboard', 'copy', 'paste'],
  CreationDate: '2015-02-19T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Extracts any RSS feed URLs from the given web URLs or web page.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem', 'WFRichTextContentItem'],
  },
  Name: 'Get RSS Feeds from Page',
  Output: {
    Multiple: true,
    OutputName: 'RSS Feeds from Page',
    Types: ['WFURLContentItem'],
  },
  ShortName: 'Get RSS Feeds',
};

export { identifier, icon, WFAction };
