const identifier = 'is.workflow.actions.base64encode';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFBase64EncodingAction',
  ActionKeywords: ['base', '64', 'encode', 'decode'],
  CreationDate: '2015-05-03T05:00:00.000Z',
  Description: {
    DescriptionSummary: 'Encodes or decodes text or files using Base64 encoding.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFStringContentItem', 'public.data'],
  },
  Name: 'Base64 Encode',
  Output: {
    Multiple: true,
    OutputName: 'Base64 Encoded',
    Types: ['WFStringContentItem', 'public.data'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Encode',
      Items: ['Encode', 'Decode'],
      Key: 'WFEncodeMode',
      Label: 'Mode',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Every 76 Characters',
      Items: ['None', 'Every 64 Characters', 'Every 76 Characters'],
      Key: 'WFBase64LineBreakMode',
      Label: 'Line Breaks',
      RequiredResources: [
        {
          WFParameterKey: 'WFEncodeMode',
          WFParameterValue: 'Encode',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
