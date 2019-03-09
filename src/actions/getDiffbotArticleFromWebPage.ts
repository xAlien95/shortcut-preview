const identifier = 'is.workflow.actions.getarticle';
const icon = 'DownloadArticle';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: [
    'web',
    'pages',
    'author',
    'word',
    'excerpt',
    'title',
    'content',
    'body',
    'published',
  ],
  CoercionItemClass: 'WFArticleContentItem',
  CreationDate: '2015-02-13T08:00:00.000Z',
  Description: {
    DescriptionNote:
      'Use a Get Details of Diffbot Article action immediately after this action to get specific details about the article. This action only supports getting one article from each URL.\n\nPowered by Diffbot (diffbot.com)',
    DescriptionSummary:
      'Gets article details, including body text, author, publish date, and more, from every URL passed into the action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  InputPassthrough: false,
  Name: 'Get Diffbot Article from Web Page',
  Output: {
    OutputName: 'Article',
    Types: ['WFArticleContentItem'],
  },
  ShortName: 'Get Article',
};

export { identifier, icon, WFAction };
