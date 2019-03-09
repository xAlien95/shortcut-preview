const identifier = 'is.workflow.actions.format.number';
const icon = 'Calculator';

const WFAction = {
  ActionClass: 'WFFormatNumberAction',
  ActionKeywords: ['digits', 'decimal'],
  Description: {
    DescriptionSummary: 'Formats a number into text.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFBooleanContentItem', 'WFNumberContentItem'],
  },
  Name: 'Format Number',
  Output: {
    Multiple: true,
    OutputName: 'Formatted Number',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFStepperParameter',
      DefaultValue: 2,
      Key: 'WFNumberFormatDecimalPlaces',
      MinimumValue: 0,
      StepperDescription: 'Decimal Places',
      StepperNoun: 'Decimal Place',
      StepperPluralNoun: 'Decimal Places',
    },
  ],
};

export { identifier, icon, WFAction };
