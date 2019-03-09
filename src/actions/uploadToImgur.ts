const identifier = 'is.workflow.actions.imgur.upload';
const icon = 'Imgur';

const WFAction = {
  ActionClass: 'WFImgurUploadAction',
  ActionKeywords: ['image', 'reddit', 'album', 'photo'],
  AppIdentifier: 'imgurmobile',
  CreationDate: '2015-05-03T05:00:00.000Z',
  Description: {
    DescriptionNote: 'Powered by Imgur (imgur.com)',
    DescriptionSummary: 'Uploads the input to Imgur.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFImageContentItem'],
  },
  Name: 'Upload to Imgur',
  Output: {
    Multiple: true,
    OutputName: 'Imgur URLs',
    Types: ['NSURL'],
  },
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: true,
      Key: 'WFImgurAnonymous',
      Label: 'Upload Anonymously',
    },
    {
      Class: 'WFSwitchParameter',
      Description:
        'If enabled, the action will return a link to the image, and not its Imgur page.',
      Key: 'WFImgurDirectLink',
      Label: 'Direct Link',
      RequiredResources: [
        {
          WFParameterKey: 'WFImgurAlbum',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFSwitchParameter',
      DefaultValue: false,
      Description:
        'If enabled, the input images will be grouped into an album. Otherwise, the individual links will be returned.',
      Key: 'WFImgurAlbum',
      Label: 'Create Album',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Blog',
      Items: ['Blog', 'Grid', 'Horizontal', 'Vertical'],
      Key: 'WFImgurAlbumLayout',
      Label: 'Album Layout',
      RequiredResources: [
        {
          WFParameterKey: 'WFImgurAlbum',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Hidden',
      Items: ['Public', 'Hidden', 'Secret'],
      Key: 'WFImgurAlbumPrivacy',
      Label: 'Album Privacy',
      RequiredResources: [
        {
          WFParameterKey: 'WFImgurAlbum',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFImgurTitle',
      Label: 'Title',
      Placeholder: 'optional',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFImgurDescription',
      Label: 'Description',
      Multiline: true,
      Placeholder: 'Description',
    },
  ],
  RequiredResources: [
    {
      RequiredResources: [
        {
          WFParameterKey: 'WFImgurAnonymous',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      WFAccountClass: 'WFImgurAccount',
      WFResourceClass: 'WFAccountAccessResource',
    },
  ],
};

export { identifier, icon, WFAction };
