const identifier = 'is.workflow.actions.phonenumber';
const icon = 'PhoneNumber';

const WFAction = {
  ActionClass: 'WFPhoneNumberAction',
  ActionKeywords: ['phone', 'number', 'mobile', 'home', 'cellular', 'telephone'],
  Description: {
    DescriptionSummary: 'Passes the specified phone numbers to the next action.',
  },
  LastModifiedDate: '2015-01-11T06:00:00.000Z',
  Name: 'Phone Number',
  Output: {
    Multiple: true,
    OutputName: 'Phone Number',
    Types: ['WFPhoneNumber'],
  },
  Parameters: [
    {
      Class: 'WFPhoneNumberFieldParameter',
      Key: 'WFPhoneNumber',
      Placeholder: 'Type in a phone number',
    },
  ],
  RequiredResources: ['WFContactAccessResource'],
};

export { identifier, icon, WFAction };
