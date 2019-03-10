const identifier = 'is.workflow.actions.image.crop';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFImageCropAction',
  ActionKeywords: ['transform', 'shrink', 'stretch', 'expand', 'rectangle', 'clip', 'canvas'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Crops images to a smaller rectangle.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Crop Image',
  Output: {
    Multiple: true,
    OutputName: 'Cropped Image',
    Types: ['UIImage'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Center',
      Description: 'Where on the original image the crop should occur.',
      Items: ['Center', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right', 'Custom'],
      Key: 'WFImageCropPosition',
      Label: 'Position',
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFImageCropX',
      Label: 'X Coordinate',
      Placeholder: '0',
      RequiredResources: [
        {
          WFParameterKey: 'WFImageCropPosition',
          WFParameterValue: 'Custom',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFImageCropY',
      Label: 'Y Coordinate',
      Placeholder: '0',
      RequiredResources: [
        {
          WFParameterKey: 'WFImageCropPosition',
          WFParameterValue: 'Custom',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFNumberFieldParameter',
      DefaultValue: 100,
      Key: 'WFImageCropWidth',
      Label: 'Width',
      Placeholder: '100',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFNumberFieldParameter',
      DefaultValue: 100,
      Key: 'WFImageCropHeight',
      Label: 'Height',
      Placeholder: '100',
      TextAlignment: 'Right',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
