const identifier = 'is.workflow.actions.measurement.convert';
const icon = 'Calculator';

const WFAction = {
  ActionClass: 'WFMeasurementConvertAction',
  ActionKeywords: ['degrees', 'distance', 'pressure', 'measure', 'speed', 'weather'],
  CreationDate: '2018-09-22T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Converts the measurements passed into the action to the specified unit.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['NSMeasurement'],
  },
  InputPassthrough: false,
  Name: 'Convert Measurement',
  Output: {
    Multiple: false,
    OutputName: 'Converted Measurement',
    Types: ['NSMeasurement'],
  },
  Parameters: [
    {
      Class: 'WFUnitTypePickerParameter',
      DefaultValue: 'Length',
      DisallowedVariableTypes: ['Variable'],
      Key: 'WFMeasurementUnitType',
      Label: 'Type',
    },
    {
      AlwaysShowsButton: true,
      Class: 'WFMeasurementUnitPickerParameter',
      Key: 'WFMeasurementUnit',
      Label: 'Unit',
      RequiredResources: [
        {
          WFParameterKey: 'WFMeasurementUnitType',
          WFParameterRelation: '??',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFMeasurementUnitTypeKey: 'WFMeasurementUnitType',
    },
  ],
};

export { identifier, icon, WFAction };
