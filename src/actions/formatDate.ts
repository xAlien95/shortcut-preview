const identifier = 'is.workflow.actions.format.date';
const icon = 'Date';

const WFAction = {
  ActionClass: 'WFFormatDateAction',
  ActionKeywords: ['date', 'time', 'formatter'],
  Description: {
    DescriptionNote:
      'Custom format strings use the format patterns from Unicode Technical Standard #35 (unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns).',
    DescriptionSummary: 'Formats a date and time into text.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFDateContentItem'],
  },
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Format Date',
  Output: {
    Multiple: true,
    OutputName: 'Formatted Date',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Short',
      Items: ['None', 'Short', 'Medium', 'Long', 'Relative', 'RFC 2822', 'ISO 8601', 'Custom'],
      Key: 'WFDateFormatStyle',
      Label: 'Date Format',
      RequiredResources: [
        {
          WFParameterKey: 'WFTimeFormatStyle',
          WFParameterValues: ['None', 'Short', 'Medium', 'Long'],
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Medium',
      Items: ['Short', 'Medium', 'Long'],
      Key: 'WFRelativeDateFormatStyle',
      Label: 'Alternate Format',
      RequiredResources: [
        {
          WFParameterKey: 'WFDateFormatStyle',
          WFParameterValue: 'Relative',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Short',
      Items: ['None', 'Short', 'Medium', 'Long', 'Relative'],
      Key: 'WFTimeFormatStyle',
      Label: 'Time Format',
      RequiredResources: [
        {
          WFParameterKey: 'WFDateFormatStyle',
          WFParameterValues: ['None', 'Short', 'Medium', 'Long', 'Relative'],
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFSwitchParameter',
      Key: 'WFISO8601IncludeTime',
      Label: 'Include ISO 8601 Time',
      RequiredResources: [
        {
          WFParameterKey: 'WFDateFormatStyle',
          WFParameterValue: 'ISO 8601',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFCustomDateFormatParameter',
      Key: 'WFDateFormat',
      Label: 'Format String',
      RequiredResources: [
        {
          WFParameterKey: 'WFDateFormatStyle',
          WFParameterValue: 'Custom',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
};

export { identifier, icon, WFAction };
