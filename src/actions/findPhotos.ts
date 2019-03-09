const identifier = 'is.workflow.actions.filter.photos';
const icon = 'Photos';

const WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.mobileslideshow',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: [
      'WFPhotoMediaContentItem',
      'WFImageContentItem',
      'WFAVAssetContentItem',
      'WFGenericFileContentItem',
    ],
  },
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Find Photos',
  RequiredResources: ['WFPhotoAccessResource'],
  SuggestedAsInitialAction: false,
  WFContentItemClass: 'WFPhotoMediaContentItem',
  WFContentItemDefaultProperty: 'Album',
};

export { identifier, icon, WFAction };
