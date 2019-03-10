const identifier = 'is.workflow.actions.recordaudio';
const icon = 'Microphone';

const WFAction = {
  ActionClass: 'WFRecordAudioAction',
  ActionKeywords: ['camera', 'clip', 'record'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Uses the microphone to record audio.',
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-05-12T07:00:00.000Z',
  Name: 'Record Audio',
  Output: {
    Multiple: false,
    OutputName: 'Recorded Audio',
    Types: ['com.apple.m4a-audio'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Normal',
      Description:
        'High-quality audio takes up a lot more space than normal audio, so stick with normal unless you really need it. Normal audio is returned as an M4A file (with AAC audio), while high-quality audio is returned in uncompressed WAV format.',
      Items: ['Normal', 'Very High'],
      Key: 'WFRecordingCompression',
      Label: 'Audio Quality',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'On Tap',
      Items: ['On Tap', 'Immediately'],
      Key: 'WFRecordingStart',
      Label: 'Start Recording',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'On Tap',
      Items: ['On Tap', 'After Time'],
      Key: 'WFRecordingEnd',
      Label: 'Finish Recording',
    },
    {
      Class: 'WFTimeIntervalParameter',
      Key: 'WFRecordingTimeInterval',
      Label: 'Duration',
      RequiredResources: [
        {
          WFParameterKey: 'WFRecordingEnd',
          WFParameterValue: 'After Time',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
  RequiredResources: ['WFUserInteractionResource', 'WFMicrophoneAccessResource'],
  UnsupportedEnvironments: ['Extension'],
  UserInterfaces: ['UIKit', 'WatchKit'],
};

export { identifier, icon, WFAction };
