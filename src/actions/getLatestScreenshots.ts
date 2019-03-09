const identifier = 'is.workflow.actions.getlastscreenshot';
const icon = 'Photos';

const WFAction = {
  ActionClass: 'WFGetLatestPhotosAction',
  ActionKeywords: ['camera', 'roll', 'picture', 'photo', 'screen'],
  AppIdentifier: 'com.apple.mobileslideshow',
  Description: {
    DescriptionSummary: 'Gets the most recent screenshots from the camera roll.',
  },
  Name: 'Get Latest Screenshots',
  Output: {
    Multiple: true,
    OutputName: 'Latest Screenshots',
    Types: ['PHAsset'],
  },
  Parameters: [
    {
      Class: 'WFStepperParameter',
      DefaultValue: 1,
      Key: 'WFGetLatestPhotoCount',
      StepperDescription: 'Number of Screenshots',
      StepperNoun: 'Screenshot',
      StepperPluralNoun: 'Screenshots',
    },
  ],
  RequiredResources: ['WFPhotoAccessResource'],
  ShortName: 'Get Screenshots',
  WFGetLatestPhotosActionType: 'Screenshot',
};

export { identifier, icon, WFAction };
