const identifier = 'is.workflow.actions.selectcontacts';
const icon = 'Contacts';

const WFAction = {
  ActionClass: 'WFSelectContactsAction',
  ActionKeywords: ['select', 'person', 'people', 'contact', 'addressbook'],
  AppIdentifier: 'com.apple.MobileAddressBook',
  Description: {
    DescriptionNote:
      'The "Select Multiple" option is supported on iOS 9 and later, and is not currently supported from Apple Watch.',
    DescriptionSummary:
      'Prompts to pick a person from your contacts and passes the selection to the next action.',
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Select Contact',
  Output: {
    Multiple: true,
    OutputName: 'Contacts',
    Types: ['WFContact'],
  },
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      Key: 'WFSelectMultiple',
      Label: 'Select Multiple',
    },
  ],
  RequiredResources: ['WFUserInteractionResource', 'WFContactAccessResource'],
  UserInterfaces: ['UIKit', 'WatchKit'],
};

export { identifier, icon, WFAction };
