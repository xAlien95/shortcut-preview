const identifier = 'is.workflow.actions.makezip';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFMakeArchiveAction',
  ActionKeywords: ['make', 'generate', 'gzip'],
  Description: {
    DescriptionResult: 'Archive',
    DescriptionSummary:
      'Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar, gzip, cpio, or iso archives.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  LastModifiedDate: '2016-09-23T05:00:00.000Z',
  Name: 'Make Archive',
  Output: {
    Multiple: false,
    OutputName: 'Archive',
    Types: ['WFGenericFileContentItem'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFZIPName',
      Label: 'Archive Name',
      Placeholder: 'optional',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFArchiveFormatParameter',
      Key: 'WFArchiveFormat',
      Label: 'Format',
      DefaultValue: '.zip',
    },
  ],
};

export { identifier, icon, WFAction };
