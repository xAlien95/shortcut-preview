const identifier = 'is.workflow.actions.deletephotos';
const icon = 'Photos';

const WFAction = {
  ActionClass: 'WFDeletePhotosAction',
  ActionKeywords: ['remove', 'trash', 'picture'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionSummary:
      "Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion.",
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['PHAsset'],
  },
  InputPassthrough: false,
  Name: 'Delete Photos',
  RequiredResources: ['WFPhotoAccessResource'],
};

export { identifier, icon, WFAction };
