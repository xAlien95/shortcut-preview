export type Attachment = (
  | {
      Type: 'Ask' | 'Clipboard' | 'CurrentDate' | 'ExtensionInput' | 'Input';
    }
  | {
      Type: 'ActionOutput';
      OutputUUID: string;
      OutputName?: string;
    }
  | { Type: 'Variable'; VariableName: string }) & {
  Aggrandizements?: any[];
};
