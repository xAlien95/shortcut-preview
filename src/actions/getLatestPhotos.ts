const identifier = 'is.workflow.actions.getlastphoto';
const icon = 'Photos';

const WFAction = {
  ActionClass: 'WFGetLatestPhotosAction',
  ActionKeywords: ['camera', 'roll', 'picture', 'last'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionSummary: 'Gets the most recent photos from the camera roll.',
  },
  Name: 'Get Latest Photos',
  Output: {
    Multiple: true,
    OutputName: 'Latest Photos',
    Types: ['PHAsset'],
  },
  Parameters: [
    {
      Class: 'WFStepperParameter',
      DefaultValue: 1,
      Key: 'WFGetLatestPhotoCount',
      StepperDescription: 'Number of Photos',
      StepperNoun: 'Photo',
      StepperPluralNoun: 'Photos',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFGetLatestPhotosActionIncludeScreenshots',
      Label: 'Include Screenshots',
    },
  ],
  RequiredResources: ['WFPhotoAccessResource'],
  ShortName: 'Get Photos',
  WFGetLatestPhotosActionType: 'Photo',
};

export { identifier, icon, WFAction };
