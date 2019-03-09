const identifier = 'is.workflow.actions.evernote.new';
const icon = 'Evernote';

const WFAction = {
  ActionClass: 'WFEvernoteCreateAction',
  ActionKeywords: ['make', 'save'],
  AppIdentifier: 'com.evernote.iPhone.Evernote',
  Description: {
    DescriptionInput: 'The content to include in your new note',
    DescriptionSummary: 'Saves the input as a note in Evernote.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  Name: 'Create New Note',
  Output: {
    Multiple: false,
    OutputName: 'New Note',
    Types: ['ENNoteRef'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFEvernoteNoteTitle',
      Label: 'Note Title',
      Placeholder: 'optional',
    },
    {
      Class: 'WFEvernoteNotebookPickerParameter',
      Description: 'The notebook in which to save your new note (optional)',
      Key: 'WFEvernoteNotebook',
      Label: 'Notebook',
    },
    {
      Class: 'WFEvernoteTagsTagFieldParameter',
      Description: 'A list of tags to apply to the new note (optional)',
      Key: 'WFEvernoteTags',
      Label: 'Tags',
      Placeholder: 'optional',
    },
  ],
  RequiredResources: ['WFEvernoteAccessResource'],
};

export { identifier, icon, WFAction };
