const identifier = 'is.workflow.actions.statistics';
const icon = 'Calculator';

const WFAction = {
  ActionClass: 'WFCalculateStatisticsAction',
  ActionKeywords: [
    'number',
    'average',
    'mean',
    'mode',
    'median',
    'maximum',
    'deviation',
    'sum',
    'minimum',
  ],
  CreationDate: '2015-06-16T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Calculates statistics on the numbers that are provided as input.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSNumber'],
  },
  Name: 'Calculate Statistics',
  Output: {
    Multiple: true,
    OutputName: 'Statistics',
    Types: ['NSNumber'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Average',
      Items: [
        'Average',
        'Minimum',
        'Maximum',
        'Sum',
        'Median',
        'Mode',
        'Range',
        'Standard Deviation',
      ],
      Key: 'WFStatisticsOperation',
      Label: 'Operation',
    },
  ],
};

export { identifier, icon, WFAction };
