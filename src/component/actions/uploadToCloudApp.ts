const identifier = 'is.workflow.actions.cloudapp.upload';
const icon = 'CloudApp';

const WFAction = {
  ActionClass: 'WFCloudAppUploadAction',
  AppSection: 'CloudApp',
  CreationDate: '2015-01-11T06:00:00.000Z',
  Description: {
    DescriptionResult: 'CloudApp URL',
    DescriptionSummary: 'Uploads the input to CloudApp and returns the CloudApp URL.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFGenericFileContentItem', 'WFURLContentItem'],
  },
  LastModifiedDate: '2015-11-24T06:00:00.000Z',
  Name: 'Upload to CloudApp',
  Output: {
    Multiple: true,
    OutputName: 'CloudApp URLs',
    Types: ['NSURL'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Private',
      Items: ['Private', 'Public'],
      Key: 'WFCloudAppPrivacyType',
      Label: 'Link Privacy',
    },
  ],
  RequiredResources: ['WFCloudAppAccessResource'],
  ShortName: 'Upload',
};

export { identifier, icon, WFAction };
