import React from 'react';

import { Attachment } from '../../interfaces/Attachment';
import Icon from '../ActionIcon';
import Field from './Field';
import Select from './Select';
import AppField from './AppField';

import { classList } from '../utils';
import styles from './styles.module.scss';

let previousOutputUUID = '';

interface Props {
  data?: any;
  value?: any;
  icon?: string;
  missing?: string;
  indentation: number;
  getVariable: (attachment: any) => JSX.Element | null;
  onVariable: ({
    uuid,
    name,
    icon,
  }: {
    uuid: string;
    name: string;
    icon: string;
  }) => void;
  debug: boolean;
}

export default class ActionBlock extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    const {
      data = {},
      value = {},
      icon = 'Placeholder',
      onVariable,
    } = this.props;
    const { UUID, CustomOutputName } = value;

    if (UUID) {
      let OutputName = data.Output && data.Output.OutputName;

      // Missing OutputNames
      if (data.Name === 'If') OutputName = 'If Result';
      if (data.Name === 'Choose from Menu') OutputName = 'Menu Result';
      if (data.Name === 'Filter Files') OutputName = 'Files';
      if (data.Name === 'Get Details of Images')
        OutputName = 'Details of Images';
      if (data.Name === 'Find Music') OutputName = 'Music';
      if (data.Name === 'Find Reminders') OutputName = 'Reminders';
      if (data.Name === 'Find Photos') OutputName = 'Photos';
      if (data.Name === 'Find Contacts') OutputName = 'Contacts';

      onVariable({
        uuid: UUID,
        name:
          CustomOutputName ||
          OutputName ||
          console.error(
            `[ERROR: OutputName] Unknown OutputName for "${data.Name}" action`,
          ) ||
          'UNKNOWN',
        icon: icon,
      });

      previousOutputUUID = UUID;
    }

    // TODO: handle Filter Files (and all the ".filter" actions) parameters
    // if (data.Name === 'Filter Files') console.log(value);
  }

  getParameterInput = (Param: any, value: any) => {
    if (value === '' && Param.Placeholder) {
      value = undefined;
    } else if (value && value.WFSerializationType) {
      switch (value.WFSerializationType) {
        case 'WFTextTokenAttachment':
        case 'WFTextTokenString':
          break;
        default:
          console.error(
            `[ERROR: Parameter] Unknown Value.WFSerializationType "${
              value.WFSerializationType
            }"`,
          );
      }
    }

    // "Create Folder", "Get/Save File" actions, "File/Destination Path" parameters
    // - add '/Shortcuts/' starting folder before the file path
    if (
      ['WFFilePath', 'WFGetFilePath', 'WFFileDestinationPath'].includes(
        Param.Key,
      )
    ) {
      return (
        <Field
          data={Param}
          value={
            [
              <span
                key="getFileInitialPath"
                className={styles.getFileInitialPath}
              >
                /Shortcuts/
              </span>,
              ((value as any) || {}).WFSerializationType
                ? this.parseWFValue(value)
                : value,
            ] as any
          }
        />
      );
    }

    switch (Param.Class) {
      case 'WFEnumerationParameter':
        if (value.WFSerializationType) value = this.parseWFValue(value);
        return <Select values={Param.Items} value={value} />;
      case 'WFSwitchParameter':
        return (
          <span
            className={classList({
              [styles.switch]: true,
              [styles.checked]: value,
            })}
          >
            <small />
          </span>
        );
      case 'WFTextInputParameter':
      case 'WFNumberFieldParameter':
        return (
          <Field
            data={Param}
            value={
              ((value as any) || {}).WFSerializationType
                ? this.parseWFValue(value)
                : value
            }
          />
        );
      case 'WFVariablePickerParameter':
      case 'WFWorkflowPickerParameter':
      case 'WFArchiveFormatParameter':
      case 'WFDateFieldParameter':
        return (
          <Field
            data={{
              ...Param,
              TextAlignment: 'Right',
            }}
            value={
              ((value as any) || {}).WFSerializationType
                ? this.parseWFValue(value)
                : value
            }
          />
        );
      case 'WFAppPickerParameter':
        const apps = new Map([['is.workflow.my.app', 'Shortcuts']]);

        return (
          <Field
            data={{
              ...Param,
              TextAlignment: 'Right',
            }}
            value={apps.get(value) || value}
          />
        );
      case 'WFVariableFieldParameter':
        return <Field data={Param} value={value} className={styles.variable} />;
      case 'WFStorageServicePickerParameter':
        return <AppField value={value} />;
      case 'WFExpandingParameter':
        return (
          <svg
            viewBox="0 0 448 512"
            className={classList({
              [styles.chevron]: true,
              [styles.expanded]: value,
            })}
          >
            <path
              d="
              M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13
              180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284
              0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687
              4.687-4.687 12.285 0 16.971z"
            />
          </svg>
        );
      default:
        console.error(`[ERROR: Parameter] Unknown Class "${Param.Class}"`);
        return null;
    }
  };

  parseWFValue = ({ Value, WFSerializationType }: any): any => {
    const RC = '\ufffc'; // replacement character
    const { getVariable } = this.props;

    switch (WFSerializationType) {
      case 'WFTextTokenString':
        const text = Value.string;

        let tokens: any[] = [];
        Object.entries(Value.attachmentsByRange).forEach(
          ([position, value]: any) => {
            const index = Number(position.match(/\d+/)![0]);
            const attachment = value as Attachment;

            switch (attachment.Type) {
              case 'ActionOutput':
              case 'Ask':
              case 'Clipboard':
              case 'CurrentDate':
              case 'ExtensionInput':
              case 'Input':
              case 'Variable':
                tokens[index] = getVariable(attachment);
                break;
              default:
                console.error(
                  `[ERROR: Attachment] Unknown Type "${
                    (attachment as any).Type
                  }"`,
                );
            }
          },
        );
        tokens = tokens.filter(Boolean);

        return text.split(RC).reduce((previous: any, current: any) => {
          previous = Array.isArray(previous) ? previous : [previous];
          return [...previous, tokens.shift(), current];
        });
      case 'WFTextTokenAttachment':
        return getVariable(Value);
      case 'WFArrayParameterState':
        const arrayLength = Value.length;
        return arrayLength === 1 ? '1 item' : `${arrayLength} items`;
      case 'WFDictionaryFieldValue':
        const dictLength = Value.Value.WFDictionaryFieldValueItems.length;
        return dictLength === 1 ? '1 item' : `${dictLength} items`;
      case 'WFNumberSubstitutableState':
        return Value.WFSerializationType
          ? this.parseWFValue(Value)
          : `${Boolean(Value)}`;
      default:
        console.error(
          `[ERROR: Parameter] Unknown Value.WFSerializationType "${WFSerializationType}"`,
        );
    }
  };

  render() {
    const { value, data, icon, missing, indentation, debug } = this.props;

    const parameters =
      (data &&
        data.Parameters &&
        data.Parameters.reduce(
          (
            result: any,
            { Key, DefaultValue }: { Key: string; DefaultValue?: any },
          ) => {
            const currentValue = value[Key];
            result[Key] =
              currentValue !== undefined
                ? currentValue
                : DefaultValue !== undefined
                ? DefaultValue
                : '';
            return result;
          },
          {},
        )) ||
      {};

    const hasInput =
      (data && data.Input) ||
      // TODO: check over the parameters directly
      JSON.stringify(parameters).includes(
        `"OutputUUID":"${previousOutputUUID}"`,
      );

    if (missing)
      return (
        <div
          className={classList({
            [styles.actionBlockWrapper]: true,
            [styles.input]: hasInput,
          })}
          style={
            {
              '--indent': indentation,
            } as any
          }
        >
          <div
            className={classList({
              [styles.actionBlock]: true,
              [styles.missing]: true,
            })}
          >
            <div className={styles.header}>
              <Icon name={icon} className={styles.icon} />
              <span className={styles.title}>[{missing}]</span>
            </div>
            <div className={styles.item}>
              <label>Unkown action identifier</label>
              <Field data={{ Placeholder: missing }} value={missing} />
            </div>
          </div>
        </div>
      );

    if (value.GroupingIdentifier && value.WFControlFlowMode) {
      let name;
      switch (value.WFControlFlowMode) {
        case 1:
          name =
            data.Name === 'Choose from Menu'
              ? value.WFMenuItemTitle || ''
              : 'Otherwise';
          break;
        case 2:
          name = `End ${
            data.Name === 'Choose from Menu'
              ? 'Menu'
              : ['Repeat', 'Repeat with Each'].includes(data.Name)
              ? 'Repeat'
              : data.Name
          }`;
          break;
      }

      return (
        <div
          className={classList({
            [styles.actionBlockWrapper]: true,
            [styles.input]: hasInput,
          })}
          style={
            {
              '--indent': indentation,
            } as any
          }
        >
          <div
            className={classList({
              [styles.actionBlock]: true,
              [styles.noIcon]: true,
            })}
          >
            <div className={styles.header}>
              <span className={styles.title}>{name || data.Name}</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className={classList({
          [styles.actionBlockWrapper]: true,
          [styles.input]: hasInput,
        })}
        style={
          {
            '--indent': indentation,
          } as any
        }
      >
        <div
          className={classList({
            [styles.actionBlock]: true,
            [styles.comment]: data.Name === 'Comment',
          })}
        >
          <div className={styles.header}>
            <Icon name={icon} className={styles.icon} />
            <span className={styles.title}>{name || data.Name}</span>

            {debug && (
              <span
                className={styles.log}
                onClick={() =>
                  console.log({
                    action: name || data.Name,
                    parameters,
                    value,
                  })
                }
              >
                LOG
              </span>
            )}
          </div>

          {data.Parameters &&
            data.Parameters.map((Param: any, i: number) => {
              if (Param.Hidden) return null;

              if (
                Param.RequiredResources &&
                Param.RequiredResources.map(
                  ({
                    WFResourceClass,
                    WFParameterKey,
                    WFParameterRelation = '==',
                    WFParameterValue,
                    WFParameterValues,
                    WFWorkflowType,
                  }: any) => {
                    switch (WFResourceClass) {
                      case 'WFParameterRelationResource':
                        let relation;
                        switch (WFParameterRelation) {
                          case '==':
                            relation = (parameterValue: any) =>
                              parameters[WFParameterKey] === parameterValue;
                            break;
                          case '!=':
                            relation = (parameterValue: any) =>
                              parameters[WFParameterKey] !== parameterValue;
                            break;
                          default:
                            console.error(
                              `[ERROR: Parameter] Unknown RequiredResources.WFParameterRelation "${WFParameterRelation}"`,
                            );
                            return null;
                        }
                        if (WFParameterValues) {
                          return WFParameterValues.map(relation)[
                            WFParameterRelation === '==' ? 'some' : 'every'
                          ](Boolean);
                        } else {
                          return relation(WFParameterValue);
                        }
                      case 'WFWorkflowTypeResource':
                        switch (WFWorkflowType) {
                          case 'WatchKit':
                            return false;
                          default:
                            console.error(
                              `[ERROR: Parameter] Unknown RequiredResources.WFWorkflowType "${WFWorkflowType}"`,
                            );
                            return null;
                        }
                      case 'WFDeviceAttributesResource':
                        return true;
                      default:
                        console.error(
                          `[ERROR: Parameter] Unknown RequiredResources.WFResourceClass "${WFResourceClass}"`,
                        );
                        return null;
                    }
                  },
                ).includes(false)
              )
                return null;

              // "Get File" action doesn't have "Initial Path" parameter anymore
              if (data.Name === 'Get File') {
                if (Param.Key === 'WFGetFileInitialDirectoryPath') return null;
              }

              switch (Param.Class) {
                case 'WFContentArrayParameter':
                case 'WFArrayParameter':
                  return parameters[Param.Key].map((WFItem: any, i: number) => {
                    const value =
                      typeof WFItem === 'string'
                        ? WFItem
                        : this.parseWFValue(WFItem.WFValue);
                    return (
                      <div className={styles.item} key={i}>
                        <Field data={{}} value={value} />
                      </div>
                    );
                  });
                case 'WFDictionaryParameter':
                  return (
                    parameters[Param.Key].Value &&
                    parameters[Param.Key].Value.WFDictionaryFieldValueItems.map(
                      (WFItem: any, i: number) => {
                        const key =
                          typeof WFItem.WFKey === 'string'
                            ? WFItem.WFKey
                            : this.parseWFValue(WFItem.WFKey);
                        const value =
                          typeof WFItem.WFValue === 'string'
                            ? WFItem.WFValue
                            : this.parseWFValue(WFItem.WFValue);
                        return (
                          <div
                            className={classList({
                              [styles.item]: true,
                              [styles.dictionary]: true,
                            })}
                            key={i}
                          >
                            <Field data={{}} value={key} />
                            <Field data={{}} value={value} />
                          </div>
                        );
                      },
                    )
                  );
                default:
                  return (
                    <div className={styles.item} key={i}>
                      {Param.Label &&
                        !Param.Multiline &&
                        Param.Class !== 'WFContentArrayParameter' && (
                          <label>{Param.Label}</label>
                        )}
                      {this.getParameterInput(Param, parameters[Param.Key])}
                    </div>
                  );
              }
            })}
        </div>
      </div>
    );
  }
}
