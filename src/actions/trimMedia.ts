const identifier = 'is.workflow.actions.trimvideo';
const icon = 'QuickTime';

const WFAction = {
  ActionClass: 'WFTrimVideoAction',
  ActionKeywords: ['clip', 'editor', 'audio', 'video', 'movie'],
  Description: {
    DescriptionInput: 'The audio or video file to edit.',
    DescriptionResult: 'The trimmed media.',
    DescriptionSummary: 'Presents a view allowing you to trim the media passed into the action.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFAVAssetContentItem'],
  },
  Name: 'Trim Media',
  Output: {
    Multiple: false,
    OutputName: 'Trimmed Media',
    Types: ['com.apple.quicktime-movie'],
  },
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
