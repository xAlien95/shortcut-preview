const identifier = 'is.workflow.actions.runjavascriptonwebpage';
const icon = 'Safari';

const WFAction = {
  ActionClass: 'WFRunJavaScriptOnWebPageAction',
  ActionKeywords: [
    'script',
    'safari',
    'java',
    'javascript',
    'webpage',
    'webkit',
    'browser',
    'json',
  ],
  AppIdentifier: 'com.apple.mobilesafari',
  Description: {
    DescriptionInput: 'Safari web pages',
    DescriptionNote:
      'Safari Web Page items are only available when running your shortcut as an Action Extension in Safari.',
    DescriptionResult: 'The output from the JavaScript (JSON)',
    DescriptionSummary: 'Runs JavaScript on a Safari web page passed in as input',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFSafariWebPageContentItem'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2015-01-11T06:00:00.000Z',
  Name: 'Run JavaScript on Web Page',
  Output: {
    Multiple: false,
    OutputName: 'JavaScript Result',
    Types: [
      'WFDictionaryContentItem',
      'WFStringContentItem',
      'WFBooleanContentItem',
      'WFNumberContentItem',
    ],
  },
  Parameters: [
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DefaultValue:
        'var result = [];\n// Get all links from the page\nvar elements = document.querySelectorAll("a");\nfor (let element of elements) {\n\tresult.push({\n\t\t"url": element.href,\n\t\t"text": element.innerText\n\t});\n}\n\n// Call completion to finish\ncompletion(result);',
      DisableAutocorrection: true,
      DisableSmartDashes: true,
      DisableSmartQuotes: true,
      Key: 'WFJavaScript',
      Label: 'JavaScript',
      Multiline: true,
      Placeholder: 'JavaScript',
      SyntaxHighlightingType: 'JavaScript',
    },
  ],
  RequiredResources: [
    {
      WFDeviceAttributes: {
        WFDeviceAttributeSystemVersion: {
          WFSystemVersion: '12',
          WFSystemVersionRelation: '>=',
        },
      },
      WFResourceClass: 'WFDeviceAttributesResource',
    },
  ],
  ShortName: 'Run JavaScript',
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
