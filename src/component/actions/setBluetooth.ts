const identifier = 'is.workflow.actions.bluetooth.set';
const icon = 'Bluetooth';

const WFAction = {
  ACECommandClass: 'SASettingSetBluetooth',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetSettingAction',
  ActionKeywords: ['wireless', 'accessories', 'accessory'],
  Description: {
    DescriptionSummary: 'Sets the device’s Bluetooth to on or off.',
  },
  InputPassthrough: true,
  Name: 'Set Bluetooth',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'OnValue',
      Label: 'Bluetooth',
    },
  ],
  RequiredResources: ['WFSiriAccessResource'],
  UnsupportedEnvironments: ['WatchOS'],
};

export { identifier, icon, WFAction };
