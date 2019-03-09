const identifier = 'is.workflow.actions.avairyeditphoto';
const icon = 'Markup';

const WFAction = {
  ActionClass: 'WFMarkupAction',
  ActionKeywords: [
    'edit',
    'photo',
    'modify',
    'picture',
    'aviary',
    'adobe',
    'pdf',
    'sign',
    'draw',
    'document',
  ],
  CreationDate: '2014-01-20T06:00:00.000Z',
  Description: {
    DescriptionResult: 'The edited content',
    DescriptionSummary: 'Edits an image or PDF with Markup.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['WFImageContentItem', 'WFPDFContentItem'],
  },
  LastModifiedDate: '2018-06-30T07:00:00.000Z',
  Name: 'Markup',
  Output: {
    Multiple: true,
    OutputName: 'Markup Result',
    Types: ['WFImageContentItem', 'WFPDFContentItem'],
  },
  Parameters: [],
  RequiredResources: ['WFUserInteractionResource'],
  UserInterfaces: ['UIKit'],
};

export { identifier, icon, WFAction };
