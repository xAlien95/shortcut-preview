import React from 'react';

import { classList } from '../utils';
import styles from './styles.module.scss';

interface Props {
  value: string;
  values: string[];
}

export default class Select extends React.Component<Props> {
  state = {
    segmented: true,
  };

  node = React.createRef<any>();

  componentDidMount() {
    setTimeout(() => {
      const node = this.node.current as HTMLElement;
      if (!node) return;

      const parent = node.parentElement!;
      const max = Math.max(
        ...[...node.children].map(({ clientWidth }) => clientWidth),
      );
      const width = this.props.values.length * (max + 1) + 1;
      const maxWidth =
        parent.clientWidth - parent.querySelector('label')!.clientWidth;

      if (width > maxWidth) {
        this.setState({ segmented: false });
      } else {
        node.style.width = `${width}px`;
      }

      node.style.visibility = '';
    }, 0);
  }

  render() {
    const { segmented } = this.state;
    const { value, values } = this.props;

    const selected = values.includes(value) ? value : 'Choose';

    return (
      <div
        ref={this.node}
        className={classList({
          [styles.select]: true,
          [styles.segmented]: segmented,
        })}
        style={{
          visibility: 'hidden',
        }}
      >
        {segmented ? (
          this.props.values.map((value) => (
            <div
              key={value}
              className={classList({
                [styles.value]: true,
                [styles.selected]: selected === value,
              })}
            >
              {value}
            </div>
          ))
        ) : (
          <div
            className={classList({
              [styles.value]: true,
              [styles.selected]: true,
            })}
          >
            {selected}
          </div>
        )}
      </div>
    );
  }
}
