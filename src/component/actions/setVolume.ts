const identifier = 'is.workflow.actions.setvolume';
const icon = 'Sound';

const WFAction = {
  ActionClass: 'WFSetVolumeAction',
  ActionKeywords: ['sound', 'speaker', 'loud'],
  Description: {
    DescriptionSummary: 'Sets the system volume.',
  },
  InputPassthrough: true,
  Name: 'Set Volume',
  Parameters: [
    {
      Class: 'WFSliderParameter',
      DefaultValue: 0.5,
      Description:
        'If you set the volume using a variable, use a number between 0 and 1 (for example, pass 0.5 for half volume).',
      Key: 'WFVolume',
      Label: 'Volume',
    },
  ],
};

export { identifier, icon, WFAction };
