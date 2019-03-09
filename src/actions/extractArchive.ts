const identifier = 'is.workflow.actions.unzip';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFExtractArchiveAction',
  ActionKeywords: ['extract', 'unarchive', 'unzip', 'contents', 'gzip'],
  CreationDate: '2016-09-23T05:00:00.000Z',
  Description: {
    DescriptionInput: 'Archive',
    DescriptionSummary:
      'Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['public.data'],
  },
  Name: 'Extract Archive',
  Output: {
    Multiple: true,
    OutputName: 'Files',
    Types: ['WFGenericFileContentItem'],
  },
  Parameters: [],
};

export { identifier, icon, WFAction };
