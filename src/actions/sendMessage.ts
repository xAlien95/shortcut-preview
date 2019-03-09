const identifier = 'is.workflow.actions.sendmessage';
const icon = 'Messages';

const WFAction = {
  ActionClass: 'WFSendMessageAction',
  ActionKeywords: ['message', 'sms', 'send', 'text'],
  AppIdentifier: 'com.apple.MobileSMS',
  Description: {
    DescriptionSummary:
      'Sends an iMessage or SMS. Pass images, videos, or other files as input to include attachments.',
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['WFContentItem'],
  },
  InputPassthrough: true,
  IntentIdentifier: 'sirikit.intent.messages.SendMessageIntent',
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Send Message',
  Parameters: [
    {
      Class: 'WFIntentAppPickerParameter',
      DefaultValue: 'com.apple.MobileSMS',
      Hidden: true,
      IntentName: 'INSendMessageIntent',
      Key: 'IntentAppIdentifier',
      Label: 'App',
      RequiredResources: [
        {
          WFDeviceAttributes: {
            WFDeviceAttributeSystemVersion: {
              WFSystemVersion: '12.0',
              WFSystemVersionRelation: '>=',
            },
          },
          WFResourceClass: 'WFDeviceAttributesResource',
        },
      ],
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'ShowWhenRun',
      Label: 'Show When Run',
      RequiredResources: [
        {
          WFDeviceAttributes: {
            WFDeviceAttributeSystemVersion: {
              WFSystemVersion: '12.0',
              WFSystemVersionRelation: '>=',
            },
          },
          WFResourceClass: 'WFDeviceAttributesResource',
        },
      ],
    },
    {
      Class: 'WFContactHandleFieldParameter',
      IntentSlotName: 'recipients',
      Key: 'WFSendMessageActionRecipients',
      Label: 'Recipients',
      Placeholder: 'Phone or email',
    },
    {
      Class: 'WFTextInputParameter',
      IntentSlotName: 'content',
      Key: 'WFSendMessageContent',
      Multiline: true,
      Placeholder: 'Message',
    },
    {
      Class: 'WFTextInputParameter',
      Hidden: true,
      Key: 'WFSendMessagePrefix',
      Label: 'Prefix',
    },
  ],
  RateLimit: {
    Delay: 3,
    Threshold: 4,
    Timeout: 30,
  },
  RequiredResources: ['WFContactAccessResource', 'WFUserInteractionResource'],
  SuggestedAsInitialAction: true,
  UserInterfaces: ['UIKit', 'UIKitWidget', 'WatchKit', 'Siri'],
};

export { identifier, icon, WFAction };
