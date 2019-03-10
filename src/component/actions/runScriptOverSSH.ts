const identifier = 'is.workflow.actions.runsshscript';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFRunSSHScriptAction',
  ActionKeywords: ['unix', 'shell', 'script', 'ssh', 'terminal', 'linux', 'mac'],
  Description: {
    DescriptionInput: 'The input passed to the shell script (stdin)',
    DescriptionResult: 'The output from the shell script (stdout)',
    DescriptionSummary: 'Runs a script on a remote computer over SSH.',
  },
  Input: {
    Multiple: false,
    Required: false,
    Types: ['public.data'],
  },
  LastModifiedDate: '2015-01-11T06:00:00.000Z',
  Name: 'Run Script Over SSH',
  Output: {
    Multiple: false,
    OutputName: 'Run Script Over SSH',
    Types: ['public.data'],
  },
  Parameters: [
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DisableAutocorrection: true,
      Key: 'WFSSHHost',
      KeyboardType: 'URL',
      Label: 'Host',
      Placeholder: '192.168.1.100',
      TextContentType: 'URL',
    },
    {
      Class: 'WFTextInputParameter',
      DefaultValue: '22',
      Key: 'WFSSHPort',
      KeyboardType: 'NumberPad',
      Label: 'Port',
      Placeholder: '22',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DisableAutocorrection: true,
      DoNotLocalizeValues: true,
      Key: 'WFSSHUser',
      Label: 'User',
      Placeholder: 'root',
      TextContentType: 'Username',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFSSHPassword',
      Label: 'Password',
      Placeholder: '••••••••',
      SecureTextInput: true,
      TextContentType: 'Password',
    },
    {
      AutocapitalizationType: 'None',
      Class: 'WFTextInputParameter',
      DisableAutocorrection: true,
      Key: 'WFSSHScript',
      Label: 'Script',
      Multiline: true,
      Placeholder: 'Script',
    },
  ],
  ShortName: 'Run SSH Script',
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
