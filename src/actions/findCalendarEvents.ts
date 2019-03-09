const identifier = 'is.workflow.actions.filter.calendarevents';
const icon = 'Calendar';

const WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.mobilecal',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Name: 'Find Calendar Events',
  RequiredResources: ['WFCalendarAccessResource'],
  ShortName: 'Find Events',
  SuggestedAsInitialAction: false,
  WFContentItemClass: 'WFCalendarEventContentItem',
  WFContentItemDefaultProperty: 'Calendar',
};

export { identifier, icon, WFAction };
