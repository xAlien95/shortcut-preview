const identifier = 'is.workflow.actions.runscene';
const icon = 'Home';

const WFAction = {
  ActionClass: 'WFRunSceneAction',
  ActionKeywords: ['homekit', 'home', 'scene'],
  AppIdentifier: 'com.apple.Home',
  Description: {
    DescriptionSummary: 'Sets a Home scene.',
  },
  InputPassthrough: true,
  Name: 'Run Home Scene',
  Parameters: [
    {
      AlwaysShowsButton: true,
      Class: 'WFHomePickerParameter',
      Description: 'The home in which the scene is configured',
      DisallowedVariableTypes: ['Variable'],
      Key: 'WFHomeName',
      Label: 'Home',
    },
    {
      AlwaysShowsButton: true,
      Class: 'WFHomeScenePickerParameter',
      Key: 'WFHomeSceneName',
      Label: 'Scene',
    },
  ],
  RequiredResources: ['WFHomeKitAccessResource'],
};

export { identifier, icon, WFAction };
