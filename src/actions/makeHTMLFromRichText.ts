const identifier = 'is.workflow.actions.gethtmlfromrichtext';
const icon = 'RichText';

const WFAction = {
  ActionClass: 'WFHTMLFromRichTextAction',
  ActionKeywords: ['page', 'source', 'web', 'get'],
  Description: {
    DescriptionResult: 'HTML',
    DescriptionSummary: 'Converts the rich text passed as input to HTML text.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFRichTextContentItem'],
  },
  Name: 'Make HTML from Rich Text',
  Output: {
    Multiple: false,
    OutputName: 'HTML from Rich Text',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      Description:
        'This indicates whether or not this action writes out an entire HTML document. If this is turned off, partial HTML will be returned if possible.',
      Key: 'WFMakeFullDocument',
      Label: 'Make Full Document',
    },
  ],
  ShortName: 'Make HTML',
};

export { identifier, icon, WFAction };
