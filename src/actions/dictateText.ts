const identifier = 'is.workflow.actions.dictatetext';
const icon = 'Dictation';

const WFAction = {
  ActionClass: 'WFDictateTextAction',
  ActionKeywords: [
    'speech',
    'detection',
    'dictation',
    'speak',
    'say',
    'voice',
    'recognize',
    'microphone',
    'transcribe',
    'transcription',
    'siri',
  ],
  CreationDate: '2016-09-09T07:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Transcribes what you say aloud into text and passes the result to the next action.',
  },
  Name: 'Dictate Text',
  Output: {
    Multiple: false,
    OutputName: 'Dictated Text',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFDictateTextLanguagePickerParameter',
      Items: [],
      Key: 'WFSpeechLanguage',
      Label: 'Language',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'After Pause',
      Items: ['After Pause', 'After Short Pause', 'On Tap'],
      Key: 'WFDictateTextStopListening',
      Label: 'Stop Listening',
    },
  ],
  RequiredResources: [
    {
      WFDeviceAttributes: {
        WFDeviceAttributeSystemVersion: {
          WFSystemVersion: '10.0',
          WFSystemVersionRelation: '>=',
        },
      },
      WFResourceClass: 'WFDeviceAttributesResource',
    },
    'WFUserInteractionResource',
    'WFSpeechRecognitionAccessResource',
    'WFMicrophoneAccessResource',
  ],
  RunningUIComponentClass: 'WFDictateTextActionComponent',
  UserInterfaces: ['UIKit', 'UIKitWidget'],
};

export { identifier, icon, WFAction };
