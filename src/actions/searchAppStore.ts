const identifier = 'is.workflow.actions.searchappstore';
const icon = 'AppStore';

const WFAction = {
  ActionClass: 'WFSearchiTunesAction',
  ActionKeywords: ['app', 'song', 'music', 'movie', 'ebook', 'audiobook', 'tv', 'album', 'store'],
  AppIdentifier: 'com.apple.AppStore',
  CreationDate: '2016-03-15T07:00:00.000Z',
  Description: {
    DescriptionSummary:
      'Searches the App Store, returning the apps that match the specified search terms. You can get more details about the results using the Get Details of App Store App action.',
  },
  InputPassthrough: false,
  Name: 'Search App Store',
  Output: {
    Multiple: true,
    OutputName: 'App Store Apps',
    Types: ['WFAppStoreAppContentItem'],
  },
  Parameters: [
    {
      Class: 'WFTextInputParameter',
      Key: 'WFSearchTerm',
      Label: 'Search',
      Placeholder: 'Shortcuts',
      TextAlignment: 'Right',
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
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
