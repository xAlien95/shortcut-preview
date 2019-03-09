const identifier = 'is.workflow.actions.encodemedia';
const icon = 'QuickTime';

const WFAction = {
  ActionClass: 'WFEncodeMediaAction',
  ActionKeywords: [
    'quicktime',
    'render',
    'audio',
    'transcode',
    'metadata',
    'artwork',
    'id3',
    'video',
  ],
  Description: {
    DescriptionSummary:
      'Re-encodes the media passed as input at the specified size, optionally converting to audio.',
  },
  Input: {
    Multiple: true,
    Required: true,
    Types: ['AVAsset'],
  },
  InputPassthrough: false,
  LastModifiedDate: '2016-05-23T07:00:00.000Z',
  Name: 'Encode Media',
  Output: {
    Multiple: true,
    OutputName: 'Encoded Media',
    Types: ['AVAsset'],
  },
  Parameters: [
    {
      Class: 'WFSwitchParameter',
      DefaultValue: false,
      Key: 'WFMediaAudioOnly',
      Label: 'Audio Only',
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'M4A',
      Items: ['M4A', 'AIFF'],
      Key: 'WFMediaAudioFormat',
      Label: 'Format',
      RequiredResources: [
        {
          WFParameterKey: 'WFMediaAudioOnly',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Passthrough',
      Items: [
        '640x480',
        '960x540',
        '1280x720',
        '1920x1080',
        'HEVC 1920x1080',
        'HEVC 3840x2160',
        'Passthrough',
      ],
      Key: 'WFMediaSize',
      Label: 'Size',
      RequiredResources: [
        {
          WFParameterKey: 'WFMediaAudioOnly',
          WFParameterValue: false,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
    {
      Class: 'WFEnumerationParameter',
      DefaultValue: 'Normal',
      Items: ['0.5X', 'Normal', '2X', 'Custom'],
      Key: 'WFMediaSpeed',
      Label: 'Speed',
    },
    {
      AllowsDecimalNumbers: true,
      Class: 'WFNumberFieldParameter',
      Description:
        'A number greater than zero that indicates how fast or slow to encode the media. Values between 0.0 and 1.0 slow down the media.',
      Key: 'WFMediaCustomSpeed',
      Label: 'Custom Speed',
      Placeholder: '1.0',
      RequiredResources: [
        {
          WFParameterKey: 'WFMediaSpeed',
          WFParameterValue: 'Custom',
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFExpandingParameter',
      Key: 'Metadata',
      Label: 'Metadata',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFMetadataTitle',
      Label: 'Title',
      Placeholder: 'My Great Track',
      RequiredResources: [
        {
          WFParameterKey: 'Metadata',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFMetadataArtist',
      Label: 'Artist',
      Placeholder: 'Nicholas Fryingpan',
      RequiredResources: [
        {
          WFParameterKey: 'Metadata',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFMetadataAlbum',
      Label: 'Album',
      Placeholder: 'Abbey Road',
      RequiredResources: [
        {
          WFParameterKey: 'Metadata',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFMetadataGenre',
      Label: 'Genre',
      Placeholder: 'Indie',
      RequiredResources: [
        {
          WFParameterKey: 'Metadata',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFTextInputParameter',
      Key: 'WFMetadataYear',
      Label: 'Year',
      Placeholder: '2001',
      RequiredResources: [
        {
          WFParameterKey: 'Metadata',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
      TextAlignment: 'Right',
    },
    {
      Class: 'WFVariablePickerParameter',
      Key: 'WFMetadataArtwork',
      Label: 'Artwork',
      RequiredResources: [
        {
          WFParameterKey: 'Metadata',
          WFParameterValue: true,
          WFResourceClass: 'WFParameterRelationResource',
        },
      ],
    },
  ],
};

export { identifier, icon, WFAction };
