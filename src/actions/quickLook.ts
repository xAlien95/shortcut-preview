const identifier = 'is.workflow.actions.previewdocument';
const icon = 'QuickLook';

const WFAction = {
  ActionClass: 'WFQuickLookAction',
  ActionKeywords: ['preview', 'show', 'file', 'document', 'quicklook', 'quick', 'look'],
  Description: {
    DescriptionSummary: 'Displays a preview of the input.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['public.data'],
  },
  InputPassthrough: true,
  Name: 'Quick Look',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      Key: 'WFQuickLookActionFullScreen',
      Label: 'Full Screen',
      RequiredResources: [
        {
          WFDeviceAttributes: {
            WFDeviceAttributeIdiom: 'Pad',
          },
          WFResourceClass: 'WFDeviceAttributesResource',
        },
      ],
    },
  ],
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['WatchKit', 'UIKit'],
};

export { identifier, icon, WFAction };
