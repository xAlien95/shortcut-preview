const identifier = 'is.workflow.actions.detect.images';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['find', 'search', 'detect', 'scan', 'e-mail', 'emails'],
  CoercionItemClass: 'WFImageContentItem',
  Description: {
    DescriptionSummary:
      'Gets images from the result of the previous action.\n\nFor example, this action can get the album art of a song, or all the images on a web page.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['UIImage'],
  },
  Name: 'Get Images from Input',
  Output: {
    Multiple: true,
    OutputName: 'Images',
    Types: ['WFImageContentItem'],
  },
  ShortName: 'Get Images',
};

export { identifier, icon, WFAction };
