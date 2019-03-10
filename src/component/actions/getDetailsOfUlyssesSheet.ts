const identifier = 'is.workflow.actions.properties.ulysses.sheet';
const icon = 'Ulysses';

const WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.soulmen.ulysses.pad',
  CreationDate: '2017-03-17T07:00:00.000Z',
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFUlyssesSheetContentItem'],
  },
  Name: 'Get Details of Ulysses Sheet',
  WFContentItemClass: 'WFUlyssesSheetContentItem',
};

export { identifier, icon, WFAction };
