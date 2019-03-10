const identifier = 'is.workflow.actions.cellulardata.set';
const icon = 'CellularData';

const WFAction = {
  ACECommandClass: 'SASettingSetCellularData',
  ACESettingValueKey: 'OnValue',
  ActionClass: 'WFACESetSettingAction',
  ActionKeywords: ['service', 'phone', 'airplane'],
  Description: {
    DescriptionSummary: 'Sets the device’s Cellular Data to on or off.',
  },
  InputPassthrough: true,
  Name: 'Set Cellular Data',
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'OnValue',
      Label: 'Cellular Data',
    },
  ],
  RequiredResources: ['WFSiriAccessResource'],
  UnsupportedEnvironments: ['WatchOS'],
};

export { identifier, icon, WFAction };
