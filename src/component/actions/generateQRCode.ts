const identifier = 'is.workflow.actions.generatebarcode';
const icon = 'QRCode';

const WFAction = {
  ActionClass: 'WFGenerateMachineReadableCodeAction',
  Description: {
    DescriptionSummary: 'Generates a QR code from the input text.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['NSString'],
  },
  LastModifiedDate: '2015-04-06T05:00:00.000Z',
  Name: 'Generate QR Code',
  Output: {
    Multiple: true,
    OutputName: 'QR Code',
    Types: ['UIImage'],
  },
  Parameters: [
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Medium',
      Items: ['Low', 'Medium', 'Quartile', 'High'],
      Key: 'WFQRErrorCorrectionLevel',
      Label: 'Error Correction',
    },
  ],
  ShortName: 'Generate QR',
};

export { identifier, icon, WFAction };
