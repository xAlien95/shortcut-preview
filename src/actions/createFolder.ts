const identifier = 'is.workflow.actions.file.createfolder';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFCreateFolderAction',
  ActionKeywords: ['directory'],
  CreationDate: '2017-03-13T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Makes a new folder in the specified file storage service.',
  },
  Name: 'Create Folder',
  Parameters: [
    {
      AlwaysShowsButton: true,
      Class: 'WFStorageServicePickerParameter',
      Key: 'WFFileStorageService',
      Label: 'Service',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      Description:
        'The path of the new folder. For example, if you want create “Adventure” in an existing folder titled “Photos”, put “/Photos/Adventure/”',
      DisableAutocorrection: true,
      Key: 'WFFilePath',
      KeyboardType: 'WebSearch',
      Label: 'Path',
      TextAlignment: 'Left',
    },
  ],
  SuggestedAsInitialAction: false,
};

export { identifier, icon, WFAction };
