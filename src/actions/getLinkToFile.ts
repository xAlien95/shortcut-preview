const identifier = 'is.workflow.actions.file.getlink';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFGetFileLinkAction',
  ActionKeywords: ['url', 'share'],
  CreationDate: '2017-03-13T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets a public link to the file passed into the action.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: [],
  },
  Name: 'Get Link to File',
  Output: {
    Multiple: true,
    Types: ['NSURL'],
  },
  OutputName: 'Link to File',
  ShortName: 'Get Link',
};

export { identifier, icon, WFAction };
