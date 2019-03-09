const identifier = 'is.workflow.actions.pocket.add';
const icon = 'Pocket';

const WFAction = {
  ActionClass: 'WFPocketAddAction',
  AppIdentifier: 'com.ideashower.ReadItLaterPro',
  Description: {
    DescriptionSummary: 'Adds the input to Pocket.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  InputPassthrough: true,
  Name: 'Add to Pocket',
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Description: 'A comma-separated list of tags to apply to the items added to Pocket.',
      Key: 'WFPocketTags',
      Label: 'Tags',
      Placeholder: 'example, tags',
    },
  ],
  RequiredResources: ['WFPocketAccessResource'],
};

export { identifier, icon, WFAction };
