const identifier = 'is.workflow.actions.getframesfromimage';
const icon = 'GIF';

const WFAction = {
  ActionClass: 'WFGetFramesFromImageAction',
  ActionKeywords: ['animated', 'gif', 'burst', 'split', 'individual', 'explode', 'separate'],
  CreationDate: '2015-12-08T08:00:00.000Z',
  Description: {
    DescriptionInput: 'An animated GIF or photo burst',
    DescriptionResult: 'The frames',
    DescriptionSummary: 'Splits an animated GIF or a photo burst into individual frames.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['com.compuserve.gif'],
  },
  InputPassthrough: false,
  Name: 'Get Frames from Image',
  Output: {
    Multiple: true,
    OutputName: 'Frames from Image',
    Types: ['WFImageContentItem', 'WFPhotoMediaContentItem'],
  },
  ShortName: 'Get Frames',
};

export { identifier, icon, WFAction };
