const identifier = 'is.workflow.actions.addnewreminder';
const icon = 'Reminders';

const WFAction = {
  ActionClass: 'WFAddNewReminderAction',
  ActionKeywords: ['create', 'calendar', 'task', 'todo', 'to-do'],
  AppIdentifier: 'com.apple.reminders',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionResult: 'The new reminder',
    DescriptionSummary: 'Creates a new reminder and adds it to the selected list of reminders.',
  },
  InputPassthrough: false,
  Name: 'Add New Reminder',
  Output: {
    Multiple: false,
    OutputName: 'New Reminder',
    Types: ['EKReminder'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Description: 'The title of this reminder.',
      Key: 'WFCalendarItemTitle',
      Label: 'Title',
      Placeholder: 'Buy some milk',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFCalendarPickerParameter',
      Description: 'The list of reminders to add this reminder to.',
      EventKitEntityType: 'Reminder',
      Key: 'WFCalendarItemCalendar',
      Label: 'List',
    },
    {
      Class: 'WFExpandingParameter',
      Description: 'Optionally, where or when to show an alert to notify me of this reminder.',
      Key: 'WFCalendarItemAlert',
      Label: 'Remind Me',
    },
    {
      Class: 'WFEnumerationParameter',
      Items: ['At Time', 'At Location'],
      Key: 'WFAlertTrigger',
      Label: 'Remind',
      RequiredResources: [
        {
          WFParameterKey: 'WFCalendarItemAlert',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFEnumerationParameter',
      Items: ['Enter', 'Leave'],
      Key: 'WFAlertLocationProximity',
      Label: 'When I...',
      RequiredResources: [
        {
          WFParameterKey: 'WFCalendarItemAlert',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFParameterKey: 'WFAlertTrigger',
          WFParameterValue: 'At Location',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      DefaultValue: 300,
      Description:
        'The distance (in meters) from the provided location to consider “entering” or “leaving” the location.',
      Key: 'WFAlertLocationRadius',
      Label: 'Radius',
      Placeholder: 'in meters',
      RequiredResources: [
        {
          WFParameterKey: 'WFCalendarItemAlert',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFParameterKey: 'WFAlertTrigger',
          WFParameterValue: 'At Location',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFLocationFieldParameter',
      Description:
        'Text representing the address or coordinates of the location that triggers the alert.',
      HintDisplayMode: 'WhileProcessing',
      Key: 'WFAlertLocation',
      Label: 'Of Location',
      Placeholder: 'One Apple Park Way, Cupertino, CA',
      RequiredResources: [
        {
          WFParameterKey: 'WFCalendarItemAlert',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFParameterKey: 'WFAlertTrigger',
          WFParameterValue: 'At Location',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFDateFieldParameter',
      Description:
        'Text representing the date when the alert should occur. Examples: “tonight at 7”, “March 7”',
      HintDisplayMode: 'WhileProcessing',
      Key: 'WFAlertCustomTime',
      Label: 'Alert Time',
      Placeholder: 'Tomorrow at 4pm',
      RequiredResources: [
        {
          WFParameterKey: 'WFCalendarItemAlert',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFParameterKey: 'WFAlertTrigger',
          WFParameterValue: 'At Time',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Description: 'Optionally, a description for this reminder.',
      Key: 'WFCalendarItemNotes',
      Label: 'Notes',
      Multiline: true,
      Placeholder: 'Notes',
    },
  ],
  RequiredResources: ['WFReminderAccessResource'],
  ShortName: 'Add Reminder',
};

export { identifier, icon, WFAction };
