const identifier = 'is.workflow.actions.skipback';
const icon = 'Rewind';

const WFAction = {
  ActionClass: 'WFSkipSongAction',
  ActionKeywords: ['ipod', 'track', 'music', 'itunes', 'previous'],
  Description: {
    DescriptionSummary: 'Skips to the previous song in the current music queue.',
  },
  InputPassthrough: true,
  Name: 'Skip Back',
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Beginning',
      Items: ['Beginning', 'Previous Song'],
      Key: 'WFSkipBackBehavior',
      Label: 'Skip To',
    },
  ],
  RequiredResources: ['WFMainThreadResource'],
  WFSkipSongActionMode: 'Back',
};

export { identifier, icon, WFAction };
