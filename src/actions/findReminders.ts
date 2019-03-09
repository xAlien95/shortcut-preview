const identifier = 'is.workflow.actions.filter.reminders';
const icon = 'Reminders';

const WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.reminders',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Name: 'Find Reminders',
  RequiredResources: ['WFReminderAccessResource'],
  SuggestedAsInitialAction: false,
  WFContentItemClass: 'WFReminderContentItem',
  WFContentItemDefaultProperty: 'List',
};

export { identifier, icon, WFAction };
