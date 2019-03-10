const identifier = 'is.workflow.actions.venmo.pay';
const icon = 'ApplePay';

const WFAction = {
  ActionClass: 'WFHandlePaymentIntentAction',
  ActionKeywords: ['venmo', 'money', 'send', 'pay', 'request', 'cash', 'curency', 'dollars'],
  Description: {
    DescriptionSummary:
      'Sends a payment to the specified people using a payment app on your device.',
  },
  InputPassthrough: true,
  IntentIdentifier: 'sirikit.intent.payments.SendPaymentIntent',
  Name: 'Send Payment',
  Parameters: [
    {
      Class: 'WFIntentAppPickerParameter',
      DefaultValue: 'com.apple.PassKit.PassKitIntentsExtension',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      IntentName: 'INSendPaymentIntent',
      Key: 'IntentAppIdentifier',
      Label: 'App',
    },
    {
      Class: 'WFContactHandleFieldParameter',
      IntentSlotName: 'payee',
      Key: 'WFVenmoActionRecipients',
      Label: 'Recipients',
      Placeholder: 'Phone or email',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      IntentSlotName: 'currencyAmount',
      Key: 'WFVenmoActionAmount',
      Label: 'Amount',
      Placeholder: '7.00',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: false,
      Key: 'WFVenmoActionAppSwitch',
      Label: 'Open in App',
    },
    {
      Class: 'WFTextInputParameter',
      IntentSlotName: 'note',
      Key: 'WFVenmoActionNote',
      Label: 'Note',
      Multiline: true,
      Placeholder: 'Note',
    },
  ],
  RequiredResources: [
    'WFContactAccessResource',
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
};

export { identifier, icon, WFAction };
