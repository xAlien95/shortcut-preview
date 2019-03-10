const identifier = 'is.workflow.actions.filter.images';
const icon = 'Image';

const WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFPhotoMediaContentItem', 'WFImageContentItem', 'WFAVAssetContentItem'],
  },
  Name: 'Filter Images',
  WFContentItemClass: 'WFImageContentItem',
};

export { identifier, icon, WFAction };
