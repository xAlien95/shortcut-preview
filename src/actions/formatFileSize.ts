const identifier = 'is.workflow.actions.format.filesize';
const icon = 'Calculator';

const WFAction = {
  ActionClass: 'WFFormatFileSizeAction',
  ActionKeywords: ['byte', 'bytes', 'megabyte', 'megabytes', 'count'],
  CreationDate: '2016-03-15T07:00:00.000Z',
  Description: {
    DescriptionInput: 'A file size from another action, or a number of bytes',
    DescriptionNote: '1000 bytes are shown as 1 KB.',
    DescriptionSummary: 'Formats a file size into text.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFFileSizeContentItem', 'WFNumberContentItem'],
  },
  Name: 'Format File Size',
  Output: {
    Multiple: true,
    OutputName: 'Formatted File Size',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Automatic',
      Items: ['Automatic', 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB or Higher'],
      Key: 'WFFileSizeFormat',
      Label: 'Format',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFFileSizeIncludeUnits',
      Label: 'Include Units',
      RequiredResources: [
        {
          WFParameterKey: 'WFFileSizeFormat',
          WFParameterRelation: '!=',
          WFParameterValue: 'Automatic',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
};

export { identifier, icon, WFAction };
