const identifier = 'is.workflow.actions.detectlanguage';
const icon = 'Translate';

const WFAction = {
  ActionClass: 'WFDetectLanguageAction',
  ActionKeywords: ['Translate', 'Get', 'Text'],
  CreationDate: '2015-08-29T17:26:33.000Z',
  Description: {
    DescriptionNote: 'Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services)',
    DescriptionSummary: 'Detects the language of the text provided as input.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString'],
  },
  Name: 'Detect Language with Microsoft',
  Output: {
    Multiple: true,
    OutputName: 'Language',
    Types: ['NSString'],
  },
};

export { identifier, icon, WFAction };
