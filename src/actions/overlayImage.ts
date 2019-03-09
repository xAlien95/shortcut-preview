const identifier = 'is.workflow.actions.overlayimageonimage';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFOverlayImageAction',
  ActionKeywords: ['picture', 'edit', 'editor'],
  CreationDate: '2016-03-07T08:00:00.000Z',
  Description: {
    DescriptionInput: 'Background images',
    DescriptionResult: 'The combined images',
    DescriptionSummary: 'Overlays an image on top of another image.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFImageContentItem'],
  },
  InputPassthrough: false,
  Name: 'Overlay Image',
  Output: {
    Multiple: true,
    OutputName: 'Overlaid Image',
    Types: ['WFImageContentItem'],
  },
  Parameters: [
    {
      Class: 'WFVariablePickerParameter',
      Key: 'WFImage',
      Label: 'Image',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFShouldShowImageEditor',
      Label: 'Show Image Editor',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Center',
      Items: ['Center', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right', 'Custom'],
      Key: 'WFImagePosition',
      Label: 'Position',
      RequiredResources: [
        {
          WFParameterKey: 'WFShouldShowImageEditor',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFImageWidth',
      Label: 'Width',
      Placeholder: 'Auto',
      RequiredResources: [
        {
          WFParameterKey: 'WFShouldShowImageEditor',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFImageHeight',
      Label: 'Height',
      Placeholder: 'Auto',
      RequiredResources: [
        {
          WFParameterKey: 'WFShouldShowImageEditor',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      Key: 'WFImageX',
      Label: 'X Coordinate',
      Placeholder: '0',
      RequiredResources: [
        {
          WFParameterKey: 'WFShouldShowImageEditor',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFParameterKey: 'WFImagePosition',
          WFParameterValue: 'Custom',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      Key: 'WFImageY',
      Label: 'Y Coordinate',
      Placeholder: '0',
      RequiredResources: [
        {
          WFParameterKey: 'WFShouldShowImageEditor',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFParameterKey: 'WFImagePosition',
          WFParameterValue: 'Custom',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      DefaultValue: 0,
      Key: 'WFRotation',
      Label: 'Rotation (Degrees)',
      Placeholder: '0',
      RequiredResources: [
        {
          WFParameterKey: 'WFShouldShowImageEditor',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFNumberFieldParameter',
      DefaultValue: 100,
      Key: 'WFOverlayImageOpacity',
      Label: 'Opacity',
      Placeholder: '100%',
      RequiredResources: [
        {
          WFParameterKey: 'WFShouldShowImageEditor',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
  ],
  RequiredResources: [
    {
      RequiredResources: [
        {
          WFParameterKey: 'WFShouldShowImageEditor',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFResourceClass: 'WFUserInteractionResource',
    },
  ],
  UnsupportedEnvironments: ['MemoryConstrained'],
  UserInterfaces: ['UIKit', 'UIKitWidget'],
};

export { identifier, icon, WFAction };
