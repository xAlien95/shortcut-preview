const identifier = 'is.workflow.actions.getnameofemoji';
const icon = 'Smiley';

const WFAction = {
  ActionClass: 'WFGetEmojiNameAction',
  CreationDate: '2015-03-07T08:00:00.000Z',
  Description: {
    DescriptionSummary: 'Gets the names of emoji passed into the action.',
  },
  Input: {
    Required: true,
    Types: ['NSString'],
  },
  InputPassthrough: false,
  Name: 'Get Name of Emoji',
  Output: {
    Multiple: true,
    OutputName: 'Name of Emoji',
    Types: ['NSString'],
  },
  ShortName: 'Get Emoji Name',
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
