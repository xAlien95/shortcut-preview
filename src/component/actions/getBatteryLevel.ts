const identifier = 'is.workflow.actions.getbatterylevel';
const icon = 'Battery';

const WFAction = {
  ActionClass: 'WFBatteryLevelAction',
  ActionKeywords: ['remaining', 'percentage', 'left', 'power'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Outputs the percentage of battery remaining as a number from 0 to 100.',
  },
  Name: 'Get Battery Level',
  Output: {
    Multiple: false,
    OutputName: 'Battery Level',
    Types: ['NSDecimalNumber'],
  },
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
