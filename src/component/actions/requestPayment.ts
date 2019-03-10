const identifier = 'is.workflow.actions.venmo.request';
const icon = 'ApplePay';

const WFAction = {
  ActionClass: 'WFHandlePaymentIntentAction',
  ActionKeywords: ['venmo', 'money', 'send', 'pay', 'request', 'cash', 'curency', 'dollars'],
  Description: {
    DescriptionSummary:
      'Requests a payment from the specified people using a payment app on your device.',
  },
  InputPassthrough: true,
  IntentIdentifier: 'sirikit.intent.payments.RequestPaymentIntent',
  Name: 'Request Payment',
  Parameters: [
    {
      Class: 'WFIntentAppPickerParameter',
      DefaultValue: 'com.apple.PassKit.PassKitIntentsExtension',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      IntentName: 'INRequestPaymentIntent',
      Key: 'IntentAppIdentifier',
      Label: 'App',
    },
    {
      Class: 'WFContactHandleFieldParameter',
      IntentSlotName: 'payer',
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
  RequiredResources: ['WFContactAccessResource'],
};

export { identifier, icon, WFAction };
