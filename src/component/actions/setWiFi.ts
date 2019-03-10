const identifier = 'is.workflow.actions.wifi.set';
const icon = 'Wi-Fi';

const WFAction = {
  ACECommandClass: 'SASettingSetWiFi',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetWiFiAction',
  ActionKeywords: ['airport', 'wifi', 'wi-fi', 'wireless', 'internet', 'network', 'wlan'],
  Description: {
    DescriptionSummary: 'Sets the device’s Wi-Fi to on or off.',
  },
  InputPassthrough: true,
  Name: 'Set Wi-Fi',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'OnValue',
      Label: 'Wi-Fi',
    },
  ],
  RequiredResources: ['WFSiriAccessResource'],
  UnsupportedEnvironments: ['WatchOS'],
};

export { identifier, icon, WFAction };
