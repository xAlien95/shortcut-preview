const identifier = 'is.workflow.actions.removereminders';
const icon = 'Reminders';

const WFAction = {
  ActionClass: 'WFRemoveCalendarItemsAction',
  ActionKeywords: ['calendar', 'delete'],
  AppIdentifier: 'com.apple.reminders',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionNote:
      'This is a destructive and permanent action. You will be asked to confirm before reminders are removed.',
    DescriptionSummary:
      'Removes all reminders passed into the action from the lists they are contained in.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['EKReminder'],
  },
  InputPassthrough: false,
  Name: 'Remove Reminders',
  RequiredResources: ['WFReminderAccessResource', 'WFUserInteractionResource'],
  WFCalendarItemEntityType: 'Reminder',
};

export { identifier, icon, WFAction };
