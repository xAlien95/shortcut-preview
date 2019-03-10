const identifier = 'is.workflow.actions.giphy';
const icon = 'Giphy';

const WFAction = {
  ActionClass: 'WFGiphyAction',
  ActionKeywords: ['gif'],
  CreationDate: '2015-02-19T08:00:00.000Z',
  Description: {
    DescriptionNote: 'Powered by Giphy (giphy.com)',
    DescriptionSummary: 'Searches for GIFs representing the text specified using Giphy.',
  },
  Name: 'Search Giphy',
  Output: {
    Multiple: true,
    OutputName: 'GIFs',
    Types: ['WFGiphyObject'],
  },
  Parameters: [
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      Key: 'WFGiphyQuery',
      Label: 'Search',
      Placeholder: 'leave blank for trending',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFGiphyShowPicker',
      Label: 'Show GIF Picker',
    },
    {
      Class: 'WFStepperParameter',
      DefaultValue: 1,
      Key: 'WFGiphyLimit',
      RequiredResources: [
        {
          WFParameterKey: 'WFGiphyShowPicker',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      StepperDescription: 'Number of GIFs',
      StepperNoun: 'GIF',
      StepperPluralNoun: 'GIFs',
      StepperPrefix: 'Get',
    },
    {
      Class: 'WFSwitchParameter',
      Key: 'WFGiphySelectMultiple',
      Label: 'Select Multiple',
      RequiredResources: [
        {
          WFParameterKey: 'WFGiphyShowPicker',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
  RequiredResources: [
    {
      RequiredResources: [
        {
          WFParameterKey: 'WFGiphyShowPicker',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFResourceClass: 'WFUserInteractionResource',
    },
  ],
  UserInterfaces: ['UIKit', 'WatchKit'],
};

export { identifier, icon, WFAction };
