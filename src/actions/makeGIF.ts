const identifier = 'is.workflow.actions.makegif';
const icon = 'GIF';

const WFAction = {
  ActionClass: 'WFMakeGIFAction',
  ActionKeywords: ['animate', 'make', 'generate', 'gif'],
  Description: {
    DescriptionResult: 'An animated GIF',
    DescriptionSummary: 'Creates an animated GIF from the images or video passed into the action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage', 'public.mpeg-4'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-02-03T08:00:00.000Z',
  Name: 'Make GIF',
  Output: {
    Multiple: false,
    OutputName: 'GIF',
    Types: ['com.compuserve.gif'],
  },
  Parameters: [
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      DefaultValue: 0.2,
      Key: 'WFMakeGIFActionDelayTime',
      Label: 'Seconds Per Photo',
      Placeholder: '0.2',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFMakeGIFActionLoopEnabled',
      Label: 'Loop Forever',
    },
    {
      Class: 'WFStepperParameter',
      Key: 'WFMakeGIFActionLoopCount',
      RequiredResources: [
        {
          WFParameterKey: 'WFMakeGIFActionLoopEnabled',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      StepperDescription: 'Number of Loops',
      StepperNoun: 'Time',
      StepperPluralNoun: 'Times',
      StepperPrefix: 'Loop',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFMakeGIFActionAutoSize',
      Label: 'Auto Size',
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFMakeGIFActionManualSizeWidth',
      Label: 'Width',
      Placeholder: '500',
      RequiredResources: [
        {
          WFParameterKey: 'WFMakeGIFActionAutoSize',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFMakeGIFActionManualSizeHeight',
      Label: 'Height',
      Placeholder: '500',
      RequiredResources: [
        {
          WFParameterKey: 'WFMakeGIFActionAutoSize',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
};

export { identifier, icon, WFAction };
