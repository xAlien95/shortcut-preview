const identifier = 'is.workflow.actions.selectphone';
const icon = 'PhoneNumber';

const WFAction = {
  ActionClass: 'WFSelectContactsAction',
  ActionKeywords: ['select', 'phone', 'number', 'telephone', 'addressbook'],
  ContactProperties: ['Phone'],
  Description: {
    DescriptionSummary:
      'Prompts to pick a phone number from your contacts and passes the selection to the next action.',
  },
  InputPassthrough: false,
  Name: 'Select Phone Number',
  Output: {
    Multiple: true,
    OutputName: 'Phone Numbers',
    Types: ['WFPhoneNumber'],
  },
  RequiredResources: ['WFUserInteractionResource', 'WFContactAccessResource'],
  ShortName: 'Select Phone #',
  SuggestedAsInitialAction: false,
  UserInterfaces: ['UIKit', 'WatchKit'],
};

export { identifier, icon, WFAction };
