const identifier = 'is.workflow.actions.documentpicker.open';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFGetFileAction',
  ActionKeywords: ['pick', 'select', 'file', 'document', 'filepicker.io', 'filepicker', 'ink'],
  Description: {
    DescriptionNote:
      'In the iCloud picker, tap “Locations” to see document pickers from other apps.',
    DescriptionSummary:
      'Get files from iCloud Drive or Dropbox. Turn off “Show Document Picker” to specify a path to retrieve.',
  },
  LastModifiedDate: '2017-03-13T05:00:00.000Z',
  Name: 'Get File',
  Output: {
    Multiple: true,
    OutputName: 'File',
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
      Key: 'WFShowFilePicker',
      Label: 'Show Document Picker',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: false,
      Key: 'SelectMultiple',
      Label: 'Select Multiple',
      RequiredResources: [
        {
          WFParameterKey: 'WFShowFilePicker',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      Description: 'The path to retrieve, such as "/folder/file.txt"',
      DisableAutocorrection: true,
      Key: 'WFGetFilePath',
      KeyboardType: 'WebSearch',
      Label: 'File Path',
      Placeholder: 'example.txt',
      RequiredResources: [
        {
          WFParameterKey: 'WFShowFilePicker',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Left',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DisableAutocorrection: true,
      Key: 'WFGetFileInitialDirectoryPath',
      KeyboardType: 'WebSearch',
      Label: 'Initial Path',
      Placeholder: 'optional',
      TextAlignment: 'Left',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFFileErrorIfNotFound',
      Label: 'Error If Not Found',
      RequiredResources: [
        {
          WFParameterKey: 'WFShowFilePicker',
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
          WFParameterKey: 'WFShowFilePicker',
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
