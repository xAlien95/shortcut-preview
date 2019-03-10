const identifier = 'is.workflow.actions.text.combine';
const icon = 'Text';

const WFAction = {
  ActionClass: 'WFTextComponentsAction',
  ActionKeywords: ['separate', 'delimiter'],
  Description: {
    DescriptionSummary: 'Joins text together, inserting the separator between each join.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString'],
  },
  InputPassthrough: false,
  Name: 'Combine Text',
  Output: {
    Multiple: false,
    OutputName: 'Combined Text',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Spaces',
      Items: ['New Lines', 'Spaces', 'Custom'],
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
    },
  ],
  WFTextComponentsMode: 'Combine',
};

export { identifier, icon, WFAction };
