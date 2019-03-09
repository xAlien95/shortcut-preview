const identifier = 'com.apple.facetime.facetime';
const icon = 'FaceTime';

const WFAction = {
  ActionClass: 'WFStartCallAction',
  ActionKeywords: ['phone', 'number', 'call'],
  AppIdentifier: 'com.apple.facetime',
  Description: {
    DescriptionSummary: 'Calls the contact passed in as input using FaceTime.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFPhoneNumber', 'WFEmailAddress', 'NSString'],
  },
  InputPassthrough: true,
  LastModifiedDate: '2018-10-09T05:00:00.000Z',
  Name: 'FaceTime',
  Parameters: [
    {
      Class: 'WFIntentAppPickerParameter',
      DefaultValue: 'com.apple.TelephonyUtilities.PhoneIntentHandler',
      Hidden: true,
      IntentName: 'INStartAudioCallIntent',
      Key: 'IntentAppIdentifier',
      Label: 'App',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Video',
      Items: ['Video', 'Audio'],
      Key: 'WFFaceTimeType',
      Label: 'Call Type',
    },
  ],
  RequiredResources: ['WFContactAccessResource'],
  WFStartCallActionType: 'FaceTime',
};

export { identifier, icon, WFAction };
