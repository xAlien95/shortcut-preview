const identifier = 'is.workflow.actions.trello.add.board';
const icon = 'Trello';

const WFAction = {
  ActionClass: 'WFTrelloCreateBoardAction',
  AppIdentifier: 'com.fogcreek.trello',
  CreationDate: '2016-05-12T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Creates a new board in your Trello account.',
  },
  Name: 'Create Trello Board',
  Output: {
    Multiple: false,
    OutputName: 'Trello Board',
    Types: ['WFTrelloBoard'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFTrelloName',
      Label: 'Name',
      Placeholder: 'Shortcuts',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFTrelloDescription',
      Multiline: true,
      Placeholder: 'Description',
    },
  ],
  RequiredResources: ['WFTrelloAccessResource'],
  ShortName: 'Create Board',
};

export { identifier, icon, WFAction };
