const identifier = 'is.workflow.actions.getcurrentsong';
const icon = 'Music';

const WFAction = {
  ActionClass: 'WFGetCurrentSongAction',
  ActionKeywords: [
    'current',
    'song',
    'ipod',
    'track',
    'music',
    'itunes',
    'library',
    'listening',
    'playing',
  ],
  AppIdentifier: 'com.apple.Music',
  Description: {
    DescriptionSummary: 'Returns the song that is currently playing in the Music app, if any.',
  },
  InputPassthrough: false,
  Name: 'Get Current Song',
  Output: {
    Multiple: false,
    OutputName: 'Current Song',
    Types: ['MPMediaItem'],
  },
  RequiredResources: ['WFMainThreadResource', 'WFAppleMusicAccessResource'],
};

export { identifier, icon, WFAction };
