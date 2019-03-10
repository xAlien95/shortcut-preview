const identifier = 'is.workflow.actions.text.split';
const icon = 'Text';

const WFAction = {
  ActionClass: 'WFTextComponentsAction',
  ActionKeywords: ['separate', 'delimiter'],
  Description: {
    DescriptionSummary: 'Separates text passed into the action into a list.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2016-10-10T19:00:00.000Z',
  Name: 'Split Text',
  Output: {
    Multiple: true,
    OutputName: 'Split Text',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'New Lines',
      Items: ['New Lines', 'Spaces', 'Every Character', 'Custom'],
      Key: 'WFTextSeparator',
      Label: 'Separator',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFTextCustomSeparator',
      Label: 'Custom',
      Placeholder: 'Text',
      RequiredResources: [
        {
          WFParameterKey: 'WFTextSeparator',
          WFParameterValue: 'Custom',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
  WFTextComponentsMode: 'Split',
};

export { identifier, icon, WFAction };
