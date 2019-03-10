const identifier = 'is.workflow.actions.lowpowermode.set';
const icon = 'Battery';

const WFAction = {
  ACECommandClass: 'SASettingSetPowerSavingMode',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetSettingAction',
  ActionKeywords: ['battery', 'life', 'charge'],
  Description: {
    DescriptionSummary: 'Sets the device’s Low Power Mode to on or off.',
  },
  InputPassthrough: true,
  Name: 'Set Low Power Mode',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'OnValue',
      Label: 'Low Power Mode',
    },
  ],
  RequiredResources: [
    'WFSiriAccessResource',
    {
      WFDeviceAttributes: {
        WFDeviceAttributeIdiom: 'Phone',
      },
      WFResourceClass: 'WFDeviceAttributesResource',
    },
  ],
  UnsupportedEnvironments: ['WatchOS'],
};

export { identifier, icon, WFAction };
