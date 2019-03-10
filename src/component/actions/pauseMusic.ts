const identifier = 'is.workflow.actions.pausemusic';
const icon = 'Pause';

const WFAction = {
  ActionClass: 'WFPauseMusicAction',
  ActionKeywords: ['pause', 'song', 'ipod', 'track', 'music', 'itunes'],
  Description: {
    DescriptionSummary: 'Pauses the currently playing music.',
  },
  InputPassthrough: true,
  Name: 'Pause Music',
  RequiredResources: ['WFMainThreadResource'],
};

export { identifier, icon, WFAction };
