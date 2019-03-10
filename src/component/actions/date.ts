const identifier = 'is.workflow.actions.date';
const icon = 'Date';

const WFAction = {
  ActionClass: 'WFDateAction',
  ActionKeywords: ['date', 'set date', 'pass date', 'time', 'current', 'now'],
  Description: {
    DescriptionSummary: 'Passes the specified date and time to the next action.',
  },
  Name: 'Date',
  Output: {
    Multiple: false,
    OutputName: 'Date',
    Types: ['NSDate'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Current Date',
      Items: ['Current Date', 'Specified Date'],
      Key: 'WFDateActionMode',
      Label: 'Use',
    },
    {
      Class: 'WFDateFieldParameter',
      Key: 'WFDateActionDate',
      Label: 'Date',
      Placeholder: 'June 29, 2007',
      RequiredResources: [
        {
          WFParameterKey: 'WFDateActionMode',
          WFParameterValue: 'Specified Date',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
