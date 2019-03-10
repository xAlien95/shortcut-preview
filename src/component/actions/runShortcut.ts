const identifier = 'is.workflow.actions.runworkflow';
const icon = 'Shortcuts';

const WFAction = {
  ActionClass: 'WFRunWorkflowAction',
  ActionKeywords: ['action', 'workflow', 'shortcuts'],
  AppIdentifier: 'is.workflow.my.app',
  CreationDate: '2017-02-15T06:00:00.000Z',
  Description: {
    DescriptionInput: 'The input to pass to the shortcut.',
    DescriptionResult: "The shortcut's result",
    DescriptionSummary: 'Run a shortcut from your shortcut.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  Name: 'Run Shortcut',
  Output: {
    Multiple: true,
    OutputName: 'Run Shortcut',
    Types: ['WFContentItem'],
  },
  Parameters: [
    {
      Class: 'WFWorkflowPickerParameter',
      Key: 'WFWorkflowName',
      Label: 'Shortcut',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFShowWorkflow',
      Label: 'Show While Running',
    },
  ],
  RequiredResources: [
    'WFMainThreadResource',
    {
      RequiredResources: [
        {
          WFParameterKey: 'WFShowWorkflow',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFResourceClass: 'WFUserInteractionResource',
    },
  ],
  SuggestedNever: true,
  UserInterfaces: ['UIKit', 'UIKitWidget', 'WatchKit'],
};

export { identifier, icon, WFAction };
