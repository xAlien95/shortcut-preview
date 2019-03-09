const identifier = 'is.workflow.actions.delay';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFDelayAction',
  ActionKeywords: ['time', 'delay', 'script', 'wait', 'second'],
  Description: {
    DescriptionSummary:
      'Waits for the specified number of seconds before continuing with the next action.',
  },
  InputPassthrough: true,
  Name: 'Wait',
  Parameters: [
    {
      Class: 'WFStepperParameter',
      DefaultValue: 1,
      Key: 'WFDelayTime',
      Placeholder: 0,
      StepperDescription: 'Number of Seconds',
      StepperNoun: 'Second',
      StepperPluralNoun: 'Seconds',
    },
  ],
  RequiredResources: ['WFMainThreadResource'],
};

export { identifier, icon, WFAction };
