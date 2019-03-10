const identifier = 'is.workflow.actions.playmusic';
const icon = 'Music';

const WFAction = {
  ActionClass: 'WFPlayMusicAction',
  ActionKeywords: ['play', 'song', 'ipod', 'track', 'music', 'itunes', 'library'],
  AppIdentifier: 'com.apple.Music',
  Description: {
    DescriptionInput: 'The music to be played',
    DescriptionSummary: 'Plays music using the Music app.',
  },
  Input: {
    Multiple: true,
    Types: ['MPMediaItem'],
  },
  InputPassthrough: true,
  Name: 'Play Music',
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      Items: ['Off', 'Songs'],
      Key: 'WFPlayMusicActionShuffle',
      Label: 'Shuffle',
    },
    {
      Class: 'WFEnumerationParameter',
      Items: ['None', 'One', 'All'],
      Key: 'WFPlayMusicActionRepeat',
      Label: 'Repeat',
    },
  ],
  RequiredResources: ['WFAppleMusicAccessResource', 'WFMainThreadResource'],
};

export { identifier, icon, WFAction };
