const identifier = 'is.workflow.actions.pinboard.add';
const icon = 'Pinboard';

const WFAction = {
  ActionClass: 'WFPinboardAddAction',
  ActionKeywords: ['URL', 'web', 'later', 'save', 'pinboard'],
  AppSection: 'Pinboard',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionSummary: 'Adds the URL passed into the action to your Pinboard.',
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFURLContentItem'],
  },
  InputPassthrough: true,
  Name: 'Add to Pinboard',
  Parameters: [
    {
      AutocapitalizationType: 'Words',
      Class: 'WFTextInputParameter',
      Key: 'WFPinTitle',
      Label: 'Title',
      Placeholder: 'optional',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      Key: 'WFPinTags',
      Label: 'Tags',
      Placeholder: 'apple longread',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFPinPublic',
      Label: 'Public',
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFPinUnread',
      Label: 'Unread',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFPinDescription',
      Label: 'Description',
      Multiline: true,
      Placeholder: 'Description',
    },
  ],
  RequiredResources: ['WFPinboardAccessResource'],
};

export { identifier, icon, WFAction };
