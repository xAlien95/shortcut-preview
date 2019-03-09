const identifier = 'is.workflow.actions.setclipboard';
const icon = 'Clipboard';

const WFAction = {
  ActionClass: 'WFSetClipboardAction',
  ActionKeywords: ['text', 'clipboard', 'copy', 'paste', 'set'],
  Description: {
    DescriptionSummary: 'Copies the result of the last action to the clipboard.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  InputPassthrough: true,
  LastModifiedDate: '2016-09-10T07:00:00.000Z',
  Name: 'Copy to Clipboard',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: false,
      Description:
        'When enabled, the input will only be copied locally, and will not be shared to other devices via Handoff.',
      Key: 'WFLocalOnly',
      Label: 'Local Only',
    },
    {
      Class: 'WFDateFieldParameter',
      Description:
        'When set, the clipboard contents will expire and be automatically deleted at the specified time. Optional.',
      Key: 'WFExpirationDate',
      Label: 'Expire At',
      Placeholder: 'Today at 3 PM',
      TextAlignment: 'Right',
    },
  ],
  RequiredResources: ['WFMainThreadResource'],
  ShortName: 'Copy',
};

export { identifier, icon, WFAction };
