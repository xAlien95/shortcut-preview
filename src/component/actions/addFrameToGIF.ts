const identifier = 'is.workflow.actions.addframetogif';
const icon = 'GIF';

const WFAction = {
  ActionClass: 'WFAddFrameToGIFAction',
  ActionKeywords: ['animate', 'make', 'generate', 'gif'],
  CreationDate: '2016-03-08T06:00:00.000Z',
  Description: {
    DescriptionInput: 'An existing animated GIF, if desired.',
    DescriptionResult: 'An animated GIF',
    DescriptionSummary:
      'Adds an image to the existing animated GIF passed as input. If no GIF is passed as input, a new animated GIF is created.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFImageContentItem'],
  },
  InputPassthrough: false,
  Name: 'Add Frame to GIF',
  Output: {
    Multiple: false,
    OutputName: 'GIF',
    Types: ['com.compuserve.gif'],
  },
  Parameters: [
    {
      Class: 'WFVariablePickerParameter',
      Key: 'WFImage',
      Label: 'Image',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      DefaultValue: 0.25,
      Key: 'WFGIFDelayTime',
      Label: 'Delay Time',
      Placeholder: '0.25',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFGIFAutoSize',
      Label: 'Auto Size',
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFGIFManualSizeWidth',
      Label: 'Width',
      Placeholder: '500',
      RequiredResources: [
        {
          WFParameterKey: 'WFGIFAutoSize',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFGIFManualSizeHeight',
      Label: 'Height',
      Placeholder: '500',
      RequiredResources: [
        {
          WFParameterKey: 'WFGIFAutoSize',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
};

export { identifier, icon, WFAction };
