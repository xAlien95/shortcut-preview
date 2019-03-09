const identifier = 'is.workflow.actions.filter.contacts';
const icon = 'Contacts';

const WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.MobileAddressBook',
  CreationDate: '2015-01-22T08:00:00.000Z',
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Find Contacts',
  RequiredResources: ['WFContactAccessResource'],
  SuggestedAsInitialAction: false,
  WFContentItemClass: 'WFContactContentItem',
};

export { identifier, icon, WFAction };
