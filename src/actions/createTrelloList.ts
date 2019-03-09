const identifier = 'is.workflow.actions.trello.add.list';
const icon = 'Trello';

const WFAction = {
  ActionClass: 'WFTrelloCreateListAction',
  AppIdentifier: 'com.fogcreek.trello',
  CreationDate: '2016-05-12T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Creates a new list on the specified board in your Trello account.',
  },
  Name: 'Create Trello List',
  Output: {
    Multiple: false,
    OutputName: 'Trello List',
    Types: ['WFTrelloList'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFTrelloName',
      Label: 'Name',
      Placeholder: 'Shortcut Ideas',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTrelloBoardPickerParameter',
      Key: 'WFTrelloBoard',
      Label: 'Board',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Top',
      Items: ['Top', 'Bottom'],
      Key: 'WFTrelloPosition',
      Label: 'Position',
    },
  ],
  RequiredResources: ['WFTrelloAccessResource'],
  ShortName: 'Create List',
};

export { identifier, icon, WFAction };
