const identifier = 'is.workflow.actions.image.convert';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFImageConvertAction',
  ActionKeywords: ['jpeg', 'jpg', 'png', 'bmp', 'tiff', 'strip', 'remove', 'preserve', 'metadata'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Converts the images passed into the action to the specified image format.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage'],
  },
  InputPassthrough: false,
  Name: 'Convert Image',
  Output: {
    Multiple: false,
    OutputName: 'Converted Image',
    Types: ['UIImage'],
  },
  Parameters: [
    {
      Class: 'WFImageConvertFormatPickerParameter',
      DefaultValue: 'JPEG',
      Key: 'WFImageFormat',
      Label: 'Format',
    },
    {
      Class: 'WFSliderParameter',
      DefaultValue: 0.75,
      Description:
        'Allows you to choose the image quality used when compressing the image file. Higher quality images will look better, but result in larger files.',
      Key: 'WFImageCompressionQuality',
      Label: 'Quality',
      RequiredResources: [
        {
          WFParameterKey: 'WFImageFormat',
          WFParameterValues: ['JPEG', 'JPEG-2000'],
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Description:
        'When Preserve Metadata is turned off, all metadata, such as the GPS coordinates where the photo was taken, will be stripped from the image file.',
      Key: 'WFImagePreserveMetadata',
      Label: 'Preserve Metadata',
      RequiredResources: [
        {
          WFParameterKey: 'WFImageFormat',
          WFParameterValues: ['JPEG', 'PNG', 'TIFF', 'HEIF', 'Match Input'],
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
};

export { identifier, icon, WFAction };
