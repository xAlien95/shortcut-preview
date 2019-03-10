const identifier = 'is.workflow.actions.file.append';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFAppendFileAction',
  ActionKeywords: ['add', 'text', 'prepend'],
  CreationDate: '2017-03-13T05:00:00.000Z',
  Description: {
    DescriptionNote:
      'If no file exists yet at the specified path, a new file will be created. Make sure to include a file extension (usually .txt) at the end of your path.',
    DescriptionResult: 'The file that was appended to',
    DescriptionSummary: 'Adds the text passed as input to the end of the specified file.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFStringContentItem'],
  },
  Name: 'Append to File',
  Output: {
    Multiple: false,
    OutputName: 'Append to File',
    Types: ['public.data'],
  },
  Parameters: [
    {
      AlwaysRequiresServiceResource: true,
      AlwaysShowsButton: true,
      Class: 'WFStorageServicePickerParameter',
      Key: 'WFFileStorageService',
      Label: 'Service',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      Description:
        'The name or path of the file to retrieve. For example, if you are appending a file called “notes.txt” in a folder called “Public”, use “/Public/notes.txt”.',
      DisableAutocorrection: true,
      Key: 'WFFilePath',
      KeyboardType: 'WebSearch',
      Label: 'File Path',
      Placeholder: 'example.txt',
      Prefix: '/Shortcuts/',
      TextAlignment: 'Left',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Append',
      Items: ['Append', 'Prepend'],
      Key: 'WFAppendFileWriteMode',
      Label: 'Mode',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFAppendOnNewLine',
      Label: 'Make New Line',
    },
  ],
  ShortName: 'Append to File',
};

export { identifier, icon, WFAction };
