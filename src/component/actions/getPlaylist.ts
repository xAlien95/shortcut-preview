const identifier = 'is.workflow.actions.get.playlist';
const icon = 'Music';

const WFAction = {
  ActionClass: 'WFGetPlaylistAction',
  ActionKeywords: ['song', 'track'],
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2015-04-06T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets every song in the specified playlist.',
  },
  Name: 'Get Playlist',
  Output: {
    Multiple: true,
    OutputName: 'Playlist',
    Types: ['MPMediaItem'],
  },
  Parameters: [
    {
      Class: 'WFPlaylistPickerParameter',
      Key: 'WFPlaylistName',
      Label: 'Playlist',
    },
  ],
  RequiredResources: ['WFAppleMusicAccessResource'],
};

export { identifier, icon, WFAction };
