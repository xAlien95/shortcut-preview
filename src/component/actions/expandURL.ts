const identifier = 'is.workflow.actions.url.expand';
const icon = 'URL';

const WFAction = {
  ActionClass: 'WFExpandURLAction',
  ActionKeywords: ['clean', 'link', 'links', 'long', 'short'],
  CreationDate: '2015-02-03T08:00:00.000Z',
  Description: {
    DescriptionNote:
      'The expanded URL is cleaned, removing unnecessary parameters such as "utm_source".',
    DescriptionResult: 'The full, expanded URL, or the original URL if the URL was not shortened',
    DescriptionSummary:
      'This action expands and cleans up URLs which have been shortened using a URL shortening service like TinyURL or Bit.ly.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  Name: 'Expand URL',
  Output: {
    Multiple: true,
    OutputName: 'Expanded URL',
    Types: ['WFURLContentItem'],
  },
};

export { identifier, icon, WFAction };
