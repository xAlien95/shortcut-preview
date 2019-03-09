const identifier = 'is.workflow.actions.filter.eventattendees';
const icon = 'Calendar';

const WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.mobilecal',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Name: 'Filter Event Attendees',
  ShortName: 'Filter Attendees',
  WFContentItemClass: 'WFEKParticipantContentItem',
};

export { identifier, icon, WFAction };
