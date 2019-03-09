const identifier = 'is.workflow.actions.readinglist';
const icon = 'Safari';

const WFAction = {
  ActionClass: 'WFAddToReadingListAction',
  ActionKeywords: ['URL', 'web', 'later', 'save', 'reading', 'list'],
  AppIdentifier: 'com.apple.mobilesafari',
  Description: {
    DescriptionSummary: 'Adds URLs passed into the action to your reading list.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  InputPassthrough: true,
  Name: 'Add to Reading List',
  ShortName: 'Read Later',
};

export { identifier, icon, WFAction };
