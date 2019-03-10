const identifier = 'is.workflow.actions.filter.music';
const icon = 'Music';

const WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  AppIdentifier: 'com.apple.Music',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['WFMPMediaContentItem', 'WFAVAssetContentItem', 'WFGenericFileContentItem'],
  },
  Name: 'Find Music',
  RequiredResources: ['WFAppleMusicAccessResource'],
  WFContentItemClass: 'WFMPMediaContentItem',
  WFContentItemDefaultProperty: 'Artist',
};

export { identifier, icon, WFAction };
