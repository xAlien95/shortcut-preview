const identifier = 'is.workflow.actions.adjustdate';
const icon = 'Date';

const WFAction = {
  ActionClass: 'WFAdjustDateAction',
  ActionKeywords: [
    'add',
    'subtract',
    'math',
    'time',
    'get',
    'start',
    'of',
    'minute',
    'hour',
    'day',
    'month',
    'year',
  ],
  CreationDate: '2015-02-03T08:00:00.000Z',
  Description: {
    DescriptionNote:
      'This action supports decimal numbers when adding or subtracting seconds, minutes, hours, or days. Otherwise only integers are supported.',
    DescriptionSummary: 'Adds or subtracts an amount of time from the date passed into the action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFDateContentItem', 'WFCalendarEventContentItem', 'WFTimeIntervalContentItem'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2017-02-27T08:00:00.000Z',
  Name: 'Adjust Date',
  Output: {
    Multiple: true,
    OutputName: 'Adjusted Date',
    Types: ['NSDate'],
  },
  Parameters: [
    {
      Class: 'WFTimeOffsetParameter',
      Key: 'WFAdjustOffsetPicker',
    },
  ],
  RequiredResources: [
    {
      RequiredResources: [
        {
          WFParameterKey: 'WFAdjustAsksWhenRun',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFResourceClass: 'WFUserInteractionResource',
    },
  ],
};

export { identifier, icon, WFAction };
