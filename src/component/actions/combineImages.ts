const identifier = 'is.workflow.actions.image.combine';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFImageCombineAction',
  ActionKeywords: ['horizontal', 'vertical', 'compile', 'connect', 'montage', 'photos'],
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Combines the images passed into the action horizontally, vertically, or in a grid.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Combine Images',
  Output: {
    Multiple: false,
    OutputName: 'Combined Image',
    Types: ['UIImage'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Side-by-Side',
      Items: ['Side-by-Side', 'Grid'],
      Key: 'WFImageCombineMode',
      Label: 'Mode',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Horizontal',
      Description:
        'When horizontal, images are connected together from left to right. When vertical, images are connected from top to bottom.',
      Items: ['Horizontal', 'Vertical'],
      Key: 'WFImageCombineDirection',
      Label: 'Direction',
      RequiredResources: [
        {
          WFParameterKey: 'WFImageCombineMode',
          WFParameterValue: 'Side-by-Side',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      DefaultValue: 0,
      Description: 'The number of pixels of transparent space to place between consecutive images.',
      Key: 'WFImageCombineSpacing',
      Label: 'Spacing',
      Placeholder: '0',
      TextAlignment: 'Right',
    },
  ],
};

export { identifier, icon, WFAction };
