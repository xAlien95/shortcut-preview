const identifier = 'is.workflow.actions.getclipboard';
const icon = 'Clipboard';

const WFAction = {
  ActionClass: 'WFGetClipboardAction',
  ActionKeywords: ['text', 'clipboard', 'copy', 'paste', 'contents', 'of'],
  Description: {
    DescriptionSummary: 'Passes the contents of the clipboard to the next action.',
  },
  Name: 'Get Clipboard',
  Output: {
    Multiple: true,
    OutputName: 'Clipboard',
    Types: ['WFContentItem'],
  },
  RequiredResources: ['WFMainThreadResource'],
  UnsupportedEnvironments: ['Background'],
};

export { identifier, icon, WFAction };
