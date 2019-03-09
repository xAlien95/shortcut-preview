const identifier = 'is.workflow.actions.sendemail';
const icon = 'Mail';

const WFAction = {
  ActionClass: 'WFSendEmailAction',
  ActionKeywords: ['email', 'e-mail', 'mail', 'send', 'gmail', 'yahoo', 'hotmail', 'icloud', 'aol'],
  AppIdentifier: 'com.apple.mobilemail',
  Description: {
    DescriptionSummary:
      'Presents an email composer. Pass text into the action to set the email body. Other types of input are added as attachments.',
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['NSString', 'WFContentItem'],
  },
  InputPassthrough: true,
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Send Email',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFSendEmailActionShowComposeSheet',
      Label: 'Show Compose Sheet',
    },
    {
      AlwaysShowsButton: true,
      Class: 'WFEmailAccountPickerParameter',
      Key: 'WFEmailAccountActionSelectedAccount',
      Label: 'From',
      RequiredResources: [
        {
          WFParameterKey: 'WFSendEmailActionShowComposeSheet',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      Description:
        'The email address to send from. This must be an email address that is set up in the Mail app.',
      DisableAutocorrection: true,
      Key: 'WFSendEmailActionFrom',
      KeyboardType: 'EmailAddress',
      Label: 'From',
      Placeholder: 'optional',
      RequiredResources: [
        {
          WFParameterKey: 'WFSendEmailActionShowComposeSheet',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFDeviceAttributes: {
            WFDeviceAttributeSystemVersion: {
              WFSystemVersion: '11.0',
              WFSystemVersionRelation: '>=',
            },
          },
          WFResourceClass: 'WFDeviceAttributesResource',
        },
      ],
      TextContentType: 'EmailAddress',
    },
    {
      Class: 'WFEmailAddressFieldParameter',
      Key: 'WFSendEmailActionToRecipients',
      Label: 'To',
      Placeholder: 'Email addresses',
    },
    {
      Class: 'WFEmailAddressFieldParameter',
      Key: 'WFSendEmailActionCcRecipients',
      Label: 'Cc',
      Placeholder: 'Email addresses',
    },
    {
      Class: 'WFEmailAddressFieldParameter',
      Key: 'WFSendEmailActionBccRecipients',
      Label: 'Bcc',
      Placeholder: 'Email addresses',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFSendEmailActionSubject',
      Label: 'Subject',
      Placeholder: 'optional',
    },
  ],
  RequiredResources: [
    {
      RequiredResources: [
        {
          WFResourceClass: 'WFWorkflowTypeResource',
          WFWorkflowType: 'WatchKit',
        },
      ],
      WFResourceClass: 'WFEmailAccessResource',
    },
    {
      RequiredResources: [
        {
          WFParameterKey: 'WFSendEmailActionShowComposeSheet',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFResourceClass: 'WFUserInteractionResource',
    },
    {
      RequiredResources: [
        {
          WFParameterKey: 'WFSendEmailActionShowComposeSheet',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFResourceClass: 'WFEmailAccessResource',
    },
  ],
  SettingsUI: {
    ShowWhenResourcesUnavailable: true,
    ViewControllerClass: 'WFEmailAccountListViewController',
  },
  SuggestedAsInitialAction: true,
  UserInterfaces: ['UIKit', 'WatchKit', 'UIKitWidget'],
};

export { identifier, icon, WFAction };
