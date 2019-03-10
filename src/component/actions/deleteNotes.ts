const identifier = 'is.workflow.actions.evernote.delete';
const icon = 'Evernote';

const WFAction = {
  ActionClass: 'WFEvernoteDeleteAction',
  ActionKeywords: ['banish', 'demolish', 'remove', 'peace', 'byebye'],
  AppIdentifier: 'com.evernote.iPhone.Evernote',
  Description: {
    DescriptionSummary: 'Deletes the notes passed as input from Evernote.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['ENNoteRef'],
  },
  Name: 'Delete Notes',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Description:
        "When enabled, this action will confirm with you before deleting notes from Evernote. You'll always be asked for confirmation when deleting 10 notes or more at a time.",
      Key: 'WFEvernoteConfirmDeletion',
      Label: 'Confirm Before Deleting',
    },
  ],
  RequiredResources: ['WFEvernoteAccessResource'],
};

export { identifier, icon, WFAction };
