const identifier = 'is.workflow.actions.exportsong';
const icon = 'Music';

const WFAction = {
  ActionClass: 'WFSelectMusicAction',
  ActionKeywords: ['export', 'song', 'music', 'itunes', 'library'],
  AppIdentifier: 'com.apple.Music',
  Description: {
    DescriptionSummary: 'Prompts to select music from your local music library.',
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-05-12T07:00:00.000Z',
  Name: 'Select Music',
  Output: {
    Multiple: true,
    OutputName: 'Music',
    Types: ['MPMediaItem'],
  },
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      Key: 'WFExportSongActionSelectMultiple',
      Label: 'Select Multiple Songs',
    },
  ],
  RequiredResources: ['WFAppleMusicAccessResource', 'WFUserInteractionResource'],
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
