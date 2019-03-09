const identifier = 'is.workflow.actions.savetocameraroll';
const icon = 'Photos';

const WFAction = {
  ActionClass: 'WFSaveToCameraRollAction',
  ActionKeywords: ['save', 'photo', 'photos', 'picture', 'image', 'camera', 'roll'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionInput: 'Photos, videos, or audio to save',
    DescriptionNote:
      'If a photo passed as input is already in the specified album, the photo will be duplicated.',
    DescriptionResult: 'The saved items',
    DescriptionSummary: 'Adds the photos and videos passed as input to the specified photo album.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFPhotoMediaContentItem', 'UIImage', 'AVAsset'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-02-03T08:00:00.000Z',
  Name: 'Save to Photo Album',
  Output: {
    Multiple: true,
    OutputName: 'Saved Photo Media',
    Types: ['PHAsset'],
  },
  Parameters: [
    {
      AlwaysShowsButton: true,
      Class: 'WFPhotoAlbumPickerParameter',
      Key: 'WFCameraRollSelectedGroup',
      Label: 'Album',
    },
  ],
  RequiredResources: ['WFPhotoAccessResource'],
  ShortName: 'Save to Photos',
};

export { identifier, icon, WFAction };
