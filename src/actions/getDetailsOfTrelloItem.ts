const identifier = 'is.workflow.actions.properties.trello';
const icon = 'Trello';

const WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.fogcreek.trello',
  CreationDate: '2016-03-15T07:00:00.000Z',
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFTrelloBoardContentItem', 'WFTrelloListContentItem', 'WFTrelloCardContentItem'],
  },
  Name: 'Get Details of Trello Item',
  RequiredResources: ['WFTrelloAccessResource'],
  WFContentItemClass: 'WFTrelloItemContentItem',
};

export { identifier, icon, WFAction };
