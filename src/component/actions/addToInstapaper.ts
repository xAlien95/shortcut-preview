const identifier = 'is.workflow.actions.instapaper.add';
const icon = 'Instapaper';

const WFAction = {
  ActionClass: 'WFInstapaperAddAction',
  AppIdentifier: 'com.marcoarment.instapaperpro',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Adds the input to Instapaper.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  InputPassthrough: true,
  Name: 'Add to Instapaper',
  Parameters: [
    {
      AlwaysShowsButton: true,
      Class: 'WFDynamicEnumerationParameter',
      Description:
        "This action will save your input to the specified folder. Leaving this empty will save the input to Instapaper's Home folder.",
      Key: 'WFInstapaperFolder',
      Label: 'Folder',
      NoneLabel: 'None',
    },
  ],
  RequiredResources: ['WFInstapaperAccessResource', 'WFMainThreadResource'],
  ShortName: 'Add',
};

export { identifier, icon, WFAction };
