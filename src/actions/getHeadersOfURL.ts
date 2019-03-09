const identifier = 'is.workflow.actions.url.getheaders';
const icon = 'Downloads';

const WFAction = {
  ActionClass: 'WFGetURLHeadersAction',
  ActionKeywords: ['URL', 'web', 'http'],
  CreationDate: '2016-06-04T05:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Retrieves the HTTP headers of the URL passed as input using a HEAD request.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  InputPassthrough: false,
  Name: 'Get Headers of URL',
  Output: {
    Multiple: true,
    OutputName: 'Headers of URL',
    Types: ['NSDictionary'],
  },
  ShortName: 'Get Headers',
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
