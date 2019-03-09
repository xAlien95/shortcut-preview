const identifier = 'is.workflow.actions.setbrightness';
const icon = 'Brightness';

const WFAction = {
  ACECommandClass: 'SASettingSetBrightness',
  ACESettingValueKey: 'WFBrightness',
  ActionClass: 'WFSetBrightnessAction',
  ActionKeywords: ['screen', 'display', 'backlight'],
  Description: {
    DescriptionSummary: 'Sets the device brightness.',
  },
  InputPassthrough: true,
  Name: 'Set Brightness',
  Parameters: [
    {
      Class: 'WFSliderParameter',
      DefaultValue: 0.5,
      Description:
        'If you set the brightness using a variable, use a number between 0 and 1 (for example, pass 0.5 for half brightness).',
      Key: 'WFBrightness',
      Label: 'Brightness',
    },
  ],
  RequiredResources: ['WFSiriAccessResource'],
};

export { identifier, icon, WFAction };
