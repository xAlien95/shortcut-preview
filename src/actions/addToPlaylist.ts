const identifier = 'is.workflow.actions.addtoplaylist';
const icon = 'Music';

const WFAction = {
  ActionClass: 'WFAddToPlaylistAction',
  ActionKeywords: ['song', 'music', 'itunes', 'playlist', 'apple', 'album'],
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2016-03-15T07:00:00.000Z',
  Description: {
    DescriptionInput: 'Items in your music library or items from the Search iTunes action.',
    DescriptionResult: 'The contents of the updated playlist',
    DescriptionSummary: 'Adds the items passed as input to the specified playlist.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFiTunesProductContentItem', 'WFMPMediaContentItem'],
  },
  InputPassthrough: false,
  Name: 'Add to Playlist',
  Output: {
    Multiple: true,
    OutputName: 'Updated Playlist',
    Types: ['MPMediaItem'],
  },
  Parameters: [
    {
      Class: 'WFPlaylistPickerParameter',
      Key: 'WFPlaylistName',
      Label: 'Playlist',
      ShowLibrary: true,
    },
  ],
  RequiredResources: [
    'WFAppleMusicAccessResource',
    {
      WFDeviceAttributes: {
        WFDeviceAttributeSystemVersion: {
          WFSystemVersion: '9.3',
          WFSystemVersionRelation: '>=',
        },
      },
      WFResourceClass: 'WFDeviceAttributesResource',
    },
  ],
};

export { identifier, icon, WFAction };
