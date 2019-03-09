const identifier = 'is.workflow.actions.skipforward';
const icon = 'FastForward';

const WFAction = {
  ActionClass: 'WFSkipSongAction',
  ActionKeywords: ['ipod', 'track', 'music', 'itunes', 'next'],
  Description: {
    DescriptionSummary: 'Skips to the next song in the current music queue.',
  },
  InputPassthrough: true,
  Name: 'Skip Forward',
  RequiredResources: ['WFMainThreadResource'],
  WFSkipSongActionMode: 'Forward',
};

export { identifier, icon, WFAction };
