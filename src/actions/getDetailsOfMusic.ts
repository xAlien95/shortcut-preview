const identifier = 'is.workflow.actions.properties.music';
const icon = 'Music';

const WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFMPMediaContentItem', 'WFAVAssetContentItem'],
  },
  LastModifiedDate: '2016-05-23T07:00:00.000Z',
  Name: 'Get Details of Music',
  WFContentItemClass: 'WFMPMediaContentItem',
  WFContentItemDefaultProperty: 'Artist',
};

export { identifier, icon, WFAction };
