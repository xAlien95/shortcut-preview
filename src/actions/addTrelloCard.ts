const identifier = 'is.workflow.actions.trello.add.card';
const icon = 'Trello';

const WFAction = {
  ActionClass: 'WFTrelloAddCardAction',
  AppIdentifier: 'com.fogcreek.trello',
  CreationDate: '2016-05-12T05:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Creates a new card on the specified list and board in your Trello account.',
  },
  Name: 'Add Trello Card',
  Output: {
    Multiple: false,
    OutputName: 'Trello Card',
    Types: ['WFTrelloCard'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFTrelloName',
      Label: 'Name',
      Placeholder: 'Be productive',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTrelloBoardPickerParameter',
      Key: 'WFTrelloBoard',
      Label: 'Board',
    },
    {
      BoardKey: 'WFTrelloBoard',
      Class: 'WFTrelloListPickerParameter',
      Key: 'WFTrelloList',
      Label: 'List',
    },
    {
      Class: 'WFDateFieldParameter',
      Key: 'WFTrelloDueDate',
      Label: 'Due',
      Placeholder: 'Tomorrow at 1pm',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Top',
      Items: ['Top', 'Bottom'],
      Key: 'WFTrelloCardPosition',
      Label: 'Position',
    },
    {
      Class: 'WFVariablePickerParameter',
      Description: 'A list of items to be attached to the new card as files',
      Key: 'WFTrelloAttachments',
      Label: 'Attachments',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFTrelloDescription',
      Multiline: true,
      Placeholder: 'Description',
    },
  ],
  RequiredResources: ['WFTrelloAccessResource'],
  ShortName: 'Add Card',
};

export { identifier, icon, WFAction };
