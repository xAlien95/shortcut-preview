const identifier = 'is.workflow.actions.searchitunes';
const icon = 'iTunes';

const WFAction = {
  ActionClass: 'WFSearchiTunesAction',
  ActionKeywords: ['app', 'song', 'music', 'movie', 'ebook', 'audiobook', 'tv', 'album', 'store'],
  AppIdentifier: 'com.apple.MobileStore',
  CreationDate: '2016-03-15T07:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Searches the iTunes Store, returning the items that match the specified search terms. You can get more details about the results using the Get Details of iTunes Product action.',
  },
  InputPassthrough: false,
  Name: 'Search iTunes Store',
  Output: {
    Multiple: true,
    OutputName: 'iTunes Products',
    Types: ['WFiTunesProductContentItem'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFSearchTerm',
      Label: 'Search',
      Placeholder: 'U2',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFDynamicEnumerationParameter',
      Key: 'WFMediaType',
      Label: 'Category',
    },
    {
      Class: 'WFDynamicEnumerationParameter',
      Key: 'WFAttribute',
      Label: 'Search By',
    },
    {
      Class: 'WFDynamicEnumerationParameter',
      Key: 'WFEntity',
      Label: 'Results',
    },
    {
      Class: 'WFiTunesStoreCountryPickerParameter',
      Key: 'WFCountry',
      Label: 'Country',
    },
    {
      Class: 'WFStepperParameter',
      DefaultValue: 25,
      Key: 'WFItemLimit',
      MaximumValue: 100,
      MinimumValue: 1,
      Pefix: 'Get',
      StepperDescription: 'Number of Items',
      StepperNoun: 'Item',
      StepperPluralNoun: 'Items',
    },
  ],
  SuggestedAsInitialAction: false,
};

export { identifier, icon, WFAction };
