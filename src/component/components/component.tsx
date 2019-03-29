import React from 'react';

import * as actions from '../actions';

import { Attachment } from '../interfaces/Attachment';
import ActionBlock, { Token } from './ActionBlock';

import styles from './styles.module.scss';

const indents: number[] = [];
const flowModes: number[] = [];

interface Props {
  data: any;
  debug?: boolean;
  expanded?: boolean;
}

export default class dataPreview extends React.Component<Props> {
  state = {
    safari:
      navigator.userAgent.includes('Safari') &&
      !navigator.userAgent.includes('Chrome'),
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
                metadata={{ debug, expanded, safari }}
                {...blockProps}
              />
            );
          })}
      </div>
    );
  }
}
