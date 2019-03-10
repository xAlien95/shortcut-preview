const identifier = 'is.workflow.actions.evernote.get';
const icon = 'Evernote';

const WFAction = {
  ActionClass: 'WFEvernoteGetNotesAction',
  ActionKeywords: ['search', 'tag'],
  AppIdentifier: 'com.evernote.iPhone.Evernote',
  Description: {
    DescriptionSummary: 'Get recent notes from Evernote, optionally filtering based on criteria.',
  },
  Name: 'Get Notes',
  Output: {
    Multiple: true,
    OutputName: 'Notes',
    Types: ['ENNoteRef'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Description: 'Text to look for in the title of notes.',
      Key: 'WFEvernoteNotesTitleSearch',
      Label: 'Title Search',
      Placeholder: 'optional',
    },
    {
      Class: 'WFEvernoteTagsTagFieldParameter',
      Description:
        'A list of tags with which to find matching notes. Wildcard characters (*) may be used.',
      Key: 'WFEvernoteNotesTags',
      Label: 'Tags',
      Placeholder: 'optional',
    },
    {
      Class: 'WFEvernoteNotebookPickerParameter',
      Description: 'The notebook in which to look for notes (optional)',
      Key: 'WFEvernoteNotesNotebookName',
      Label: 'In Notebook',
    },
    {
      Class: 'WFStepperParameter',
      DefaultValue: 1,
      Key: 'WFEvernoteNotesCount',
      StepperDescription: 'Number of Notes',
      StepperNoun: 'Note',
      StepperPluralNoun: 'Notes',
      StepperPrefix: 'Get',
    },
  ],
  RequiredResources: ['WFEvernoteAccessResource'],
};

export { identifier, icon, WFAction };
