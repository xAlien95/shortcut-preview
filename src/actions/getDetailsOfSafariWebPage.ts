const identifier = 'is.workflow.actions.properties.safariwebpage';
const icon = 'Safari';

const WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.apple.mobilesafari',
  CreationDate: '2016-03-07T08:00:00.000Z',
  Description: {
    DescriptionNote:
      'Safari Web Page items are only available when running your shortcut as an Action Extension in Safari.',
  },
  Name: 'Get Details of Safari Web Page',
  WFContentItemClass: 'WFSafariWebPageContentItem',
};

export { identifier, icon, WFAction };
