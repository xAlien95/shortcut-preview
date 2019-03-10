const identifier = 'is.workflow.actions.goodreader.open';
const icon = 'GoodReader';

const WFAction = {
  ActionClass: 'WFSendToGoodReaderAction',
  ActionKeywords: ['save', 'file', 'document'],
  AppIdentifier: 'com.goodiware.goodreader4',
  CreationDate: '2015-02-03T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Opens a file in GoodReader.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['public.data'],
  },
  InputPassthrough: true,
  Name: 'Open in GoodReader',
  RequiredResources: [
    'WFURLOpenResource',
    {
      AppIdentifier: 'com.goodiware.goodreader4',
      WFResourceClass: 'WFAppInstalledResource',
    },
  ],
};

export { identifier, icon, WFAction };
