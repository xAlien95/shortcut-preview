const identifier = 'is.workflow.actions.text.translate';
const icon = 'Translate';

const WFAction = {
  ActionClass: 'WFTranslateTextAction',
  ActionKeywords: ['microsoft', 'bing', 'translation', 'language'],
  CreationDate: '2015-02-19T08:00:00.000Z',
  Description: {
    DescriptionNote:
      'Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services). Your text input will be sent to Microsoft to translate your request.',
    DescriptionSummary: 'Translates the text passed into the action into another language.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString'],
  },
  InputPassthrough: false,
  Name: 'Translate Text with Microsoft',
  Output: {
    Multiple: true,
    OutputName: 'Translated Text',
    Types: ['NSString'],
  },
  Parameters: [
    {
      Class: 'WFTranslateTextLanguagePickerParameter',
      Key: 'WFSelectedFromLanguage',
      Label: 'From',
      LanguageDetection: true,
    },
    {
      Class: 'WFTranslateTextLanguagePickerParameter',
      Key: 'WFSelectedLanguage',
      Label: 'To',
    },
  ],
};

export { identifier, icon, WFAction };
