const identifier = 'is.workflow.actions.documentpicker.save';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFSaveFileAction',
  ActionKeywords: ['save', 'file', 'document', 'icloud', 'cloud', 'upload'],
  Description: {
    DescriptionNote:
      'In the iCloud picker, tap “Locations” to see document pickers from other apps.',
    DescriptionResult: 'The saved files',
    DescriptionSummary:
      'Save files to iCloud Drive or Dropbox. Turn off “Ask Where to Save” in order to specify a destination path.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['public.data'],
  },
  LastModifiedDate: '2017-03-13T05:00:00.000Z',
  Name: 'Save File',
  Output: {
    Multiple: true,
    OutputName: 'Saved File',
    Types: ['public.data'],
  },
  Parameters: [
    {
      AlwaysShowsButton: true,
      Class: 'WFStorageServicePickerParameter',
      Key: 'WFFileStorageService',
      Label: 'Service',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFAskWhereToSave',
      Label: 'Ask Where to Save',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      Description: 'The path to save to, such as "/folder/file.txt"',
      DisableAutocorrection: true,
      Key: 'WFFileDestinationPath',
      Label: 'Destination Path',
      RequiredResources: [
        {
          WFParameterKey: 'WFAskWhereToSave',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Left',
    },
    {
      Class: 'WFSwitchParameter',
      Key: 'WFSaveFileOverwrite',
      Label: 'Overwrite If File Exists',
      RequiredResources: [
        {
          WFParameterKey: 'WFAskWhereToSave',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
  RequiredResources: [
    {
      RequiredResources: [
        {
          WFParameterKey: 'WFAskWhereToSave',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFResourceClass: 'WFUserInteractionResource',
    },
  ],
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
