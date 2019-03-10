const identifier = 'is.workflow.actions.image.resize';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFImageResizeAction',
  ActionKeywords: ['scale', 'transform', 'shrink', 'stretch', 'expand', 'width', 'height'],
  Description: {
    DescriptionNote:
      "If the width or height is not set, that dimension is automatically calculated to maintain the original image's aspect ratio.",
    DescriptionSummary: 'Scales images to a particular width and height.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Resize Image',
  Output: {
    Multiple: true,
    OutputName: 'Resized Image',
    Types: ['UIImage'],
  },
  Parameters: [
    {
      Class: 'WFNumberFieldParameter',
      DefaultValue: 640,
      Key: 'WFImageResizeWidth',
      Label: 'Width',
      Placeholder: 'Auto',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFNumberFieldParameter',
      Key: 'WFImageResizeHeight',
      Label: 'Height',
      Placeholder: 'Auto',
      TextAlignment: 'Right',
    },
  ],
};

export { identifier, icon, WFAction };
