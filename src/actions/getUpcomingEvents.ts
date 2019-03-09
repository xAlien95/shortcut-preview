const identifier = 'is.workflow.actions.getupcomingevents';
const icon = 'Calendar';

const WFAction = {
  ActionClass: 'WFGetUpcomingCalendarItemsAction',
  ActionKeywords: ['calendar', 'event', 'events', 'next', 'upcoming'],
  AppIdentifier: 'com.apple.mobilecal',
  Description: {
    DescriptionSummary:
      'Gets upcoming calendar events, ordered from nearest to farthest away in time.',
  },
  LastModifiedDate: '2015-02-03T08:00:00.000Z',
  Name: 'Get Upcoming Events',
  Output: {
    Multiple: true,
    OutputName: 'Upcoming Events',
    Types: ['EKEvent'],
  },
  Parameters: [
    {
      AllowsAllCalendars: true,
      Class: 'WFCalendarPickerParameter',
      EventKitEntityType: 'Event',
      Key: 'WFGetUpcomingItemCalendar',
      Label: 'Calendar',
    },
    {
      Class: 'WFStepperParameter',
      DefaultValue: 1,
      Key: 'WFGetUpcomingItemCount',
      StepperDescription: 'Number of Events',
      StepperNoun: 'Event',
      StepperPluralNoun: 'Events',
      StepperPrefix: 'Get',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Any Day',
      Items: ['Any Day', 'Today', 'Tomorrow', 'Specified Day'],
      Key: 'WFDateSpecifier',
      Label: 'Day',
    },
    {
      Class: 'WFDateFieldParameter',
      HintDateMode: 'Date',
      Key: 'WFSpecifiedDate',
      Label: 'Specified Day',
      Placeholder: 'June 29, 2007',
      RequiredResources: [
        {
          WFParameterKey: 'WFDateSpecifier',
          WFParameterValue: 'Specified Day',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
  RequiredResources: ['WFCalendarAccessResource'],
  ShortName: 'Get Events',
  WFGetUpcomingItemType: 0,
};

export { identifier, icon, WFAction };
