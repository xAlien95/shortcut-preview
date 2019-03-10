const identifier = 'is.workflow.actions.setitemname';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFSetItemNameAction',
  ActionKeywords: ['title'],
  Description: {
    DescriptionSummary: 'Sets the name of the item passed as input.',
  },
  Input: {
    Multiple: false,
    Required: true,
    TypePassthrough: true,
    Types: ['WFContentItem'],
  },
  LastModifiedDate: '2016-10-10T19:00:00.000Z',
  Name: 'Set Name',
  Output: {
    Multiple: false,
    OutputName: 'Set Name',
    Types: ['WFContentItem'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFName',
      Label: 'Name',
      Placeholder: 'example',
    },
    {
      Class: 'WFExpandingParameter',
      Key: 'Advanced',
      Label: 'Advanced',
    },
    {
      Class: 'WFSwitchParameter',
      Description:
        "By default, Shortcuts will automatically include a file extension if one isn't specified. Turn this on if you want to create a file with no extension.",
      Key: 'WFDontIncludeFileExtension',
      Label: "Don't Include File Extension",
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
};

export { identifier, icon, WFAction };
