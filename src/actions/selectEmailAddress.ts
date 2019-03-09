const identifier = 'is.workflow.actions.selectemail';
const icon = 'Mail';

const WFAction = {
  ActionClass: 'WFSelectContactsAction',
  ActionKeywords: ['select', 'email', 'address', 'e-mail', 'addressbook'],
  AppIdentifier: 'com.apple.mobilemail',
  ContactProperties: ['Email'],
  Description: {
    DescriptionSummary:
      'Prompts to pick an email address from your contacts and passes the selection to the next action.',
  },
  InputPassthrough: false,
  Name: 'Select Email Address',
  Output: {
    Multiple: true,
    OutputName: 'Email Addresses',
    Types: ['WFEmailAddress'],
  },
  RequiredResources: ['WFUserInteractionResource', 'WFContactAccessResource'],
  ShortName: 'Select Email',
  SuggestedAsInitialAction: false,
  UserInterfaces: ['UIKit', 'WatchKit'],
};

export { identifier, icon, WFAction };
