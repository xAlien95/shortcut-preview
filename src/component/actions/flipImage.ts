const identifier = 'is.workflow.actions.image.flip';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFImageFlipAction',
  ActionKeywords: ['portrait', 'landscape', 'horizontal', 'vertical'],
  Description: {
    DescriptionSummary: 'Reverses the direction of images either horizontally or vertically.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-08-20T07:00:00.000Z',
  Name: 'Flip Image',
  Output: {
    Multiple: true,
    OutputName: 'Flipped Image',
    Types: ['UIImage'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Horizontal',
      Items: ['Horizontal', 'Vertical'],
      Key: 'WFImageFlipDirection',
      Label: 'Direction',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
