const identifier = 'is.workflow.actions.getmapslink';
const icon = 'Maps';

const WFAction = {
  ActionClass: 'WFGetMapsLinkAction',
  ActionKeywords: ['link', 'location', 'app'],
  AppIdentifier: 'com.apple.Maps',
  Description: {
    DescriptionSummary:
      'Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString', 'CLLocation', 'MKMapItem'],
  },
  Name: 'Get Maps URL',
  Output: {
    Multiple: true,
    OutputName: 'Maps URL',
    Types: ['NSURL'],
  },
};

export { identifier, icon, WFAction };
