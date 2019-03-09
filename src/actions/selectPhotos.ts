const identifier = 'is.workflow.actions.selectphoto';
const icon = 'Photos';

const WFAction = {
  ActionClass: 'WFSelectPhotoAction',
  ActionKeywords: ['select', 'photo', 'from', 'library', 'picture'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionResult: 'The selected photos/videos',
    DescriptionSummary: 'Prompts to choose photos and videos from your photo library.',
  },
  Name: 'Select Photos',
  Output: {
    Multiple: true,
    OutputName: 'Photos',
    Types: ['PHAsset'],
  },
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      Key: 'WFSelectMultiplePhotos',
      Label: 'Select Multiple',
    },
  ],
  RequiredResources: ['WFPhotoAccessResource', 'WFUserInteractionResource'],
  UserInterfaces: ['WatchKit', 'UIKit'],
};

export { identifier, icon, WFAction };
