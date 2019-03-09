const identifier = 'is.workflow.actions.wordpress.post';
const icon = 'WordPress';

const WFAction = {
  ActionClass: 'WFWordPressPostAction',
  AppIdentifier: 'org.wordpress',
  CreationDate: '2015-11-24T06:00:00.000Z',
  Description: {
    DescriptionResult: 'The URL of the new blog post',
    DescriptionSummary: 'Posts the input to a WordPress blog as a new post or page.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFRichTextContentItem', 'WFStringContentItem', 'WFImageContentItem'],
  },
  LastModifiedDate: '2016-03-08T06:00:00.000Z',
  Name: 'Post to WordPress',
  Output: {
    Multiple: false,
    OutputName: 'WordPress Post URL',
    Types: ['NSURL'],
  },
  Parameters: [
    {
      AccountClass: 'WFWordPressAccount',
      Class: 'WFAccountPickerParameter',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      Key: 'WFAccount',
      Label: 'Account',
    },
    {
      Class: 'WFDynamicEnumerationParameter',
      DisallowedVariableTypes: ['Ask', 'Variable'],
      Key: 'Blog',
      Label: 'Blog',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'Title',
      Label: 'Title',
      Placeholder: 'Quarterly Results',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFDynamicEnumerationParameter',
      Key: 'Type',
      Label: 'Type',
    },
    {
      Class: 'WFDynamicEnumerationParameter',
      Key: 'Format',
      Label: 'Format',
    },
    {
      Class: 'WFDynamicEnumerationParameter',
      Key: 'Status',
      Label: 'Status',
    },
    {
      Class: 'WFDynamicTagFieldParameter',
      Key: 'Categories',
      Label: 'Categories',
      Placeholder: 'Finance, News',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFDynamicTagFieldParameter',
      Key: 'Tags',
      Label: 'Tags',
      Placeholder: 'stock market, trends',
      TextAlignment: 'Right',
    },
    {
      Class: 'WFExpandingParameter',
      Key: 'Advanced',
      Label: 'Advanced',
    },
    {
      Class: 'WFSwitchParameter',
      Key: 'AllowComments',
      Label: 'Allow Comments',
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'Slug',
      Label: 'Slug',
      Placeholder: 'quarterly-results',
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'Excerpt',
      Label: 'Excerpt',
      Placeholder: 'An overall great quarter',
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFDateFieldParameter',
      Key: 'Date',
      Label: 'Publish Date',
      Placeholder: 'optional',
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFDynamicEnumerationParameter',
      Key: 'Template',
      Label: 'Template',
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFVariablePickerParameter',
      Key: 'ThumbnailImage',
      Label: 'Featured Image',
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFExpandingParameter',
      Key: 'ShowCustomFields',
      Label: 'Custom Fields',
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFDictionaryParameter',
      Key: 'CustomFields',
      Label: 'Custom Fields',
      RequiredResources: [
        {
          WFParameterKey: 'Advanced',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
        {
          WFParameterKey: 'ShowCustomFields',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
  RequiredResources: [
    {
      WFAccountClass: 'WFWordPressAccount',
      WFResourceClass: 'WFAccountAccessResource',
    },
  ],
};

export { identifier, icon, WFAction };
