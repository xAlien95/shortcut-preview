const identifier = 'is.workflow.actions.print';
const icon = 'Print';

const WFAction = {
  ActionClass: 'WFPrintAction',
  ActionKeywords: ['pdf', 'print', 'printer', 'airprint'],
  Description: {
    DescriptionSummary: 'Prints the input using AirPrint.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['UIPrintFormatter', 'com.adobe.pdf'],
  },
  InputPassthrough: true,
  Name: 'Print',
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
