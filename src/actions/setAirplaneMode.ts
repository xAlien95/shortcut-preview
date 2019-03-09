const identifier = 'is.workflow.actions.airplanemode.set';
const icon = 'AirplaneMode';

const WFAction = {
  ACECommandClass: 'SASettingSetAirplaneMode',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetSettingAction',
  ActionKeywords: ['airport', 'wi-fi', 'bluetooth', 'cellular'],
  Description: {
    DescriptionSummary: 'Sets the device’s Airplane Mode to on or off.',
  },
  InputPassthrough: true,
  Name: 'Set Airplane Mode',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'OnValue',
      Label: 'Airplane Mode',
    },
  ],
  RequiredResources: ['WFSiriAccessResource'],
  UnsupportedEnvironments: ['WatchOS'],
};

export { identifier, icon, WFAction };
