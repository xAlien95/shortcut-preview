const identifier = 'is.workflow.actions.round';
const icon = 'Calculator';

const WFAction = {
  ActionClass: 'WFRoundNumberAction',
  ActionKeywords: ['calculator', 'calculate', 'number', 'ceiling', 'floor'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Rounds the number(s) passed into the action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFNumberContentItem'],
  },
  Name: 'Round Number',
  Output: {
    Multiple: true,
    OutputName: 'Rounded Number',
    Types: ['NSDecimalNumber'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Left of Decimal',
      Items: ['Left of Decimal', 'Right of Decimal'],
      Key: 'WFRoundType',
      Label: 'Round',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Normal',
      Items: ['Normal', 'Always Round Up', 'Always Round Down'],
      Key: 'WFRoundMode',
      Label: 'Mode',
    },
    {
      Class: 'WFStepperParameter',
      DefaultValue: 0,
      Key: 'WFRoundDecimalPlaces',
      MinimumValue: 0,
      StepperDescription: 'Decimal Places',
      StepperNoun: 'Decimal Place',
      StepperPluralNoun: 'Decimal Places',
    },
  ],
};

export { identifier, icon, WFAction };
