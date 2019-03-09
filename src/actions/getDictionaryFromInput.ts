const identifier = 'is.workflow.actions.detect.dictionary';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFCoercionAction',
  ActionKeywords: ['json', 'xml', 'plist', 'www', 'urlencoded', 'form', 'query', 'string'],
  CoercionItemClass: 'WFDictionaryContentItem',
  Description: {
    DescriptionSummary:
      'Makes a dictionary from the text passed as input. JSON (like {"foo": "bar"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSDictionary'],
  },
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Get Dictionary from Input',
  Output: {
    Multiple: true,
    OutputName: 'Dictionary',
    Types: ['WFDictionaryContentItem'],
  },
  ShortName: 'Get Dictionary',
};

export { identifier, icon, WFAction };
