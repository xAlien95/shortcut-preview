const identifier = 'is.workflow.actions.makevideofromgif';
const icon = 'GIF';

const WFAction = {
  ActionClass: 'WFMakeVideoFromGIFAction',
  ActionKeywords: ['video', 'gif', 'convert', 'make'],
  CreationDate: '2015-02-03T08:00:00.000Z',
  Description: {
    DescriptionInput: 'An animated GIF',
    DescriptionResult: 'A video',
    DescriptionSummary: 'Converts an animated GIF into a video.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['com.compuserve.gif'],
  },
  InputPassthrough: false,
  Name: 'Make Video from GIF',
  Output: {
    Multiple: false,
    OutputName: 'Video',
    Types: ['public.mpeg-4'],
  },
  Parameters: [
    {
      Class: 'WFStepperParameter',
      DefaultValue: 1,
      Key: 'WFMakeVideoFromGIFActionLoopCount',
      StepperDescription: 'Number of Loops',
      StepperNoun: 'Time',
      StepperPluralNoun: 'Times',
      StepperPrefix: 'Loop',
    },
  ],
  ShortName: 'Make Video',
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
