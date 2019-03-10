const identifier = 'is.workflow.actions.properties.files';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFContentItemPropertiesAction',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['public.data'],
  },
  Name: 'Get Details of Files',
  SuggestedNever: true,
  WFContentItemClass: 'WFGenericFileContentItem',
};

export { identifier, icon, WFAction };
