const identifier = 'is.workflow.actions.playsound';
const icon = 'Sound';

const WFAction = {
  ActionClass: 'WFPlaySoundAction',
  ActionKeywords: ['notification', 'audio', 'music'],
  Description: {
    DescriptionSummary:
      'Plays the audio file passed as input, or a default notification sound if no audio file was passed.',
  },
  Input: {
    Multiple: false,
    Required: false,
    Types: ['AVAsset'],
  },
  InputPassthrough: true,
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Play Sound',
  UnsupportedEnvironments: ['Background'],
};

export { identifier, icon, WFAction };
