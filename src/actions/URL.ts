const identifier = 'is.workflow.actions.url';
const icon = 'URL';

const WFAction = {
  ActionClass: 'WFURLAction',
  ActionKeywords: ['text', 'such text', 'very speech', 'much words', 'so wow'],
  Description: {
    DescriptionSummary: 'Passes the specified URL to the next action.',
  },
  Name: 'URL',
  Output: {
    Multiple: false,
    OutputName: 'URL',
    Types: ['NSURL'],
  },
  Parameters: [
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DisableAutocorrection: true,
      Key: 'WFURLActionURL',
      KeyboardType: 'URL',
      Label: 'URL',
      Placeholder: 'example.com',
      TextContentType: 'URL',
    },
  ],
};

export { identifier, icon, WFAction };
