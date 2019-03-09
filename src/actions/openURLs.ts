const identifier = 'is.workflow.actions.openurl';
const icon = 'Safari';

const WFAction = {
  ActionClass: 'WFOpenURLAction',
  ActionKeywords: ['URL', 'web', 'display', 'site', 'open', 'show', 'multiple'],
  AppIdentifier: 'com.apple.mobilesafari',
  Description: {
    DescriptionSummary: 'Opens URLs passed into the action in Safari.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSURL'],
  },
  InputPassthrough: true,
  IntentIdentifier: 'sirikit.intents.custom.com.apple.mobilesafari.OpenURLsIntent',
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Open URLs',
  Parameters: [],
  RequiredResources: ['WFURLOpenResource'],
};

export { identifier, icon, WFAction };
