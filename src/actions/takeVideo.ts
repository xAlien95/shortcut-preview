const identifier = 'is.workflow.actions.takevideo';
const icon = 'Camera';

const WFAction = {
  ActionClass: 'WFTakeVideoAction',
  ActionKeywords: ['camera', 'clip', 'record'],
  AppIdentifier: 'com.apple.camera',
  Description: {
    DescriptionResult: 'Video from the camera.',
    DescriptionSummary: 'Uses the camera to take a video clip.',
  },
  InputPassthrough: false,
  Name: 'Take Video',
  Output: {
    Multiple: false,
    OutputName: 'Video',
    Types: ['com.apple.quicktime-movie'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Back',
      Items: ['Front', 'Back'],
      Key: 'WFCameraCaptureDevice',
      Label: 'Camera',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Medium',
      Items: ['Low', 'Medium', 'High'],
      Key: 'WFCameraCaptureQuality',
      Label: 'Quality',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Immediately',
      Items: ['On Tap', 'Immediately'],
      Key: 'WFRecordingStart',
      Label: 'Start Recording',
    },
  ],
  RequiredResources: ['WFUserInteractionResource', 'WFCameraAccessResource'],
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
