const identifier = 'is.workflow.actions.repeat.count';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFFiniteRepeatAction',
  ActionKeywords: ['loop', 'while', 'for'],
  Description: {
    DescriptionSummary:
      'Repeats the contained actions, running them the specified number of times.',
  },
  Input: {
    Multiple: true,
    Required: false,
    Types: ['WFContentItem'],
  },
  LastModifiedDate: '2015-05-12T07:00:00.000Z',
  Name: 'Repeat',
  Output: {
    Multiple: true,
    OutputName: 'Repeat',
    Types: ['WFContentItem'],
  },
  Parameters: [
    {
      Class: 'WFStepperParameter',
      Key: 'WFRepeatCount',
      StepperDescription: 'Repetitions',
      StepperNoun: 'Time',
      StepperPluralNoun: 'Times',
      StepperPrefix: 'Repeat',
    },
  ],
};

export { identifier, icon, WFAction };
