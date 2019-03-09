const identifier = 'is.workflow.actions.getlatestphotoimport';
const icon = 'Photos';

const WFAction = {
  ActionClass: 'WFGetLatestPhotoImportAction',
  ActionKeywords: ['camera', 'roll', 'picture', 'photo', 'import', 'camera', 'sd', 'card', 'usb'],
  AppIdentifier: 'com.apple.mobileslideshow',
  CreationDate: '2018-09-28T07:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets the most recent photo import from the Photos app.',
  },
  Name: 'Get Last Import',
  Output: {
    Multiple: true,
    OutputName: 'Imported Photos',
    Types: ['PHAsset'],
  },
  Parameters: [],
  RequiredResources: ['WFPhotoAccessResource'],
};

export { identifier, icon, WFAction };
