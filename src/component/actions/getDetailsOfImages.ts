const identifier = 'is.workflow.actions.properties.images';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  ActionKeywords: ['photo', 'video', 'media'],
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFPhotoMediaContentItem', 'WFImageContentItem', 'WFAVAssetContentItem'],
  },
  LastModifiedDate: '2015-12-14T08:00:00.000Z',
  Name: 'Get Details of Images',
  WFContentItemClass: 'WFImageContentItem',
};

export { identifier, icon, WFAction };
