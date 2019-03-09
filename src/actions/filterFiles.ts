const identifier = 'is.workflow.actions.filter.files';
const icon = 'Documents';

const WFAction = {
  ActionClass: 'WFContentItemFilterAction',
  CreationDate: '2015-01-22T08:00:00.000Z',
  Input: {
    Types: ['public.data'],
  },
  Name: 'Filter Files',
  SuggestedNever: true,
  WFContentItemClass: 'WFGenericFileContentItem',
};

export { identifier, icon, WFAction };
