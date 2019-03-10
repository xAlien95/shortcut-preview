const identifier = 'is.workflow.actions.makepdf';
const icon = 'PDF';

const WFAction = {
  ActionClass: 'WFMakePDFAction',
  ActionKeywords: ['make', 'generate', 'pdf', 'print'],
  Description: {
    DescriptionSummary:
      'Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFContentItem'],
  },
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Make PDF',
  Output: {
    Multiple: false,
    OutputName: 'PDF',
    Types: ['WFPDFContentItem'],
  },
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: false,
      Key: 'WFPDFIncludeMargin',
      Label: 'Include Margin',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'All Pages',
      Items: ['All Pages', 'Single Page', 'Page Range'],
      Key: 'WFPDFIncludedPages',
      Label: 'Include',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      Key: 'WFPDFSinglePage',
      Label: 'Page #',
      Placeholder: '1',
      RequiredResources: [
        {
          WFParameterKey: 'WFPDFIncludedPages',
          WFParameterValue: 'Single Page',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      Key: 'WFPDFPageRangeStart',
      Label: 'Start Page #',
      Placeholder: '1',
      RequiredResources: [
        {
          WFParameterKey: 'WFPDFIncludedPages',
          WFParameterValue: 'Page Range',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      Key: 'WFPDFPageRangeEnd',
      Label: 'End Page #',
      Placeholder: '3',
      RequiredResources: [
        {
          WFParameterKey: 'WFPDFIncludedPages',
          WFParameterValue: 'Page Range',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
  UnsupportedEnvironments: ['MemoryConstrained'],
};

export { identifier, icon, WFAction };
