const identifier = 'is.workflow.actions.wunderlist.add';
const icon = 'Wunderlist';

const WFAction = {
  ActionClass: 'WFWunderlistAddAction',
  ActionKeywords: ['note', 'text', 'todo', 'to-do', 'task'],
  AppIdentifier: 'com.6wunderkinder.wunderlistmobile',
  CreationDate: '2015-04-23T05:00:00.000Z',
  Description: {
    DescriptionInput: 'Files to attach to the task',
    DescriptionResult: 'The URL of the newly created task',
    DescriptionSummary: 'Adds a new task to Wunderlist.',
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['WFGenericFileContentItem'],
  },
  Name: 'Add Wunderlist Task',
  Output: {
    Multiple: false,
    OutputName: 'Wunderlist Task',
    Types: ['NSURL'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFWunderlistTitle',
      Label: 'Title',
      Placeholder: 'Buy some milk',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFWunderlistListPickerParameter',
      Key: 'WFWunderlistList',
      Label: 'List',
    },
    {
      Class: 'WFDateFieldParameter',
      Key: 'WFWunderlistDueDate',
      Label: 'Due Date',
      Placeholder: 'optional',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFDateFieldParameter',
      Key: 'WFWunderlistReminder',
      Label: 'Reminder',
      Placeholder: 'optional',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFSwitchParameter',
      Key: 'WFWunderlistStarred',
      Label: 'Starred',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFWunderlistNotes',
      Label: 'Notes',
      Multiline: true,
      Placeholder: 'Notes',
    },
  ],
  RequiredResources: [
    {
      WFAccountClass: 'WFWunderlistAccount',
      WFResourceClass: 'WFAccountAccessResource',
    },
  ],
  ShortName: 'Add Task',
};

export { identifier, icon, WFAction };
