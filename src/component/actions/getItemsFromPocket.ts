const identifier = 'is.workflow.actions.pocket.get';
const icon = 'Pocket';

const WFAction = {
  ActionClass: 'WFPocketGetAction',
  AppIdentifier: 'com.ideashower.ReadItLaterPro',
  Description: {
    DescriptionSummary: 'Returns items in your Pocket account.',
  },
  Name: 'Get Items from Pocket',
  Output: {
    Multiple: true,
    OutputName: 'Items from Pocket',
    Types: ['NSURL'],
  },
  Parameters: [
    {
      Class: 'WFStepperParameter',
      Key: 'WFPocketItemCount',
      StepperDescription: 'Number of Items',
      StepperNoun: 'Item',
      StepperPluralNoun: 'Items',
      StepperPrefix: 'Get',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'All',
      Items: ['Unread', 'Archived', 'All'],
      Key: 'WFPocketItemState',
      Label: 'Type',
    },
    {
      Class: 'WFTextInputParameter',
      Description:
        'If specified, only items with titles or URLs matching this search will be returned.',
      Key: 'WFPocketItemSearchTerm',
      Label: 'Search',
      Placeholder: 'optional',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Description: 'If specified, only items matching this tag will be returned.',
      Key: 'WFPocketItemSearchTags',
      Label: 'Tag',
      Placeholder: 'optional',
      TextAlignment: 'Right',
    },
  ],
  RequiredResources: ['WFPocketAccessResource'],
  ShortName: 'Get Pocket Items',
};

export { identifier, icon, WFAction };
