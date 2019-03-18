import React from 'react';

import * as actions from '../actions';

import { Attachment } from '../interfaces/Attachment';
import ActionBlock, { Token } from './ActionBlock';

import styles from './styles.module.scss';

let variableIndex = 0;
const indents: number[] = [];
const flowModes: number[] = [];

interface Props {
  data: any;
  debug?: boolean;
  expanded?: boolean;
}

export default class dataPreview extends React.Component<Props> {
  state = {
    magicVariables: {},
    safari:
      navigator.userAgent.includes('Safari') &&
      !navigator.userAgent.includes('Chrome'),
  };

  addVariable = ({
    uuid,
    name,
    icon,
  }: {
    uuid: string;
    name: string;
    icon: string;
  }) => {
    this.setState((prevState: any) => ({
      magicVariables: {
        ...prevState.magicVariables,
        [uuid]: { name, icon },
      },
    }));
  };

  getVariable = (attachment: Attachment) => {
    const aggrandizement =
      attachment.Aggrandizements &&
      attachment.Aggrandizements.map((aggr) => {
        switch (aggr.Type) {
          case 'WFDictionaryValueVariableAggrandizement':
            return aggr.DictionaryKey;
          case 'WFPropertyVariableAggrandizement':
            return aggr.PropertyName;
          default:
            return;
        }
      }).filter(Boolean)[0];

    switch (attachment.Type) {
      case 'ActionOutput':
        const variable = (this.state.magicVariables as any)[
          attachment.OutputUUID
        ];
        return variable ? (
          <Token
            key={`variable-${variableIndex++}`}
            data={{
              name: variable.name,
              icon: variable.icon,
              aggrandizement: aggrandizement,
            }}
          />
        ) : null;
      case 'Variable':
        return (
          <Token
            key={`variable-${variableIndex++}`}
            data={{
              name: attachment.VariableName,
              aggrandizement: aggrandizement,
            }}
          />
        );
      case 'Clipboard':
        return (
          <Token
            key={`variable-${variableIndex++}`}
            data={{
              global: true,
              name: 'Clipboard',
              icon: 'Clipboard',
              aggrandizement: aggrandizement,
            }}
          />
        );
      case 'CurrentDate':
        return (
          <Token
            key={`variable-${variableIndex++}`}
            data={{
              global: true,
              name: 'Current Date',
              icon: 'Date',
              aggrandizement: aggrandizement,
            }}
          />
        );
      case 'Ask':
        return (
          <Token
            key={`variable-${variableIndex++}`}
            data={{
              global: true,
              name: 'Ask When Run',
              aggrandizement: aggrandizement,
            }}
          />
        );
      case 'Input':
        return (
          <Token
            key={`variable-${variableIndex++}`}
            data={{
              global: true,
              name: 'Input',
              aggrandizement: aggrandizement,
            }}
          />
        );
      case 'ExtensionInput':
        return (
          <Token
            key={`variable-${variableIndex++}`}
            data={{
              global: true,
              name: 'Extension Input',
              icon: 'ShortcutExtension',
              aggrandizement: aggrandizement,
            }}
          />
        );
      default:
        console.error(
          `[ERROR: Variable] Unknown Type "${(attachment as any).Type}"`,
        );
        return null;
    }
  };

  render() {
    const { data, debug = false, expanded = false } = this.props;
    const { safari } = this.state;

    return (
      <div className={styles.container}>
        {data &&
          data[0].WFWorkflowActions.map((WFAction: any, i: number) => {
            const action = Object.values(actions).find(
              ({ identifier }) =>
                identifier === WFAction.WFWorkflowActionIdentifier,
            );

            const previousIndent = indents[i - 1] || 0;
            const previousFlowMode =
              flowModes[i - 1] !== undefined ? flowModes[i - 1] : -1;
            const flowMode =
              WFAction.WFWorkflowActionParameters.WFControlFlowMode;
            flowModes[i] = flowMode !== undefined ? flowMode : -1;

            let indent = 0;
            if (flowMode > 0) indent -= 1;
            if ([0, 1].includes(previousFlowMode)) indent += 1;

            indents[i] = previousIndent + indent;

            const blockProps = action
              ? {
                  data: action.WFAction,
                  icon: action.icon,
                  value: WFAction.WFWorkflowActionParameters,
                }
              : {
                  missing: WFAction.WFWorkflowActionIdentifier,
                };

            return (
              <ActionBlock
                key={i}
                indentation={indents[i]}
                getVariable={this.getVariable}
                onVariable={this.addVariable}
                metadata={{ debug, expanded, safari }}
                {...blockProps}
              />
            );
          })}
      </div>
    );
  }
}
