import React from 'react';

import ShortcutPreview from './component';
import shortcutData from './shortcut-data.json';

import './styles/base.scss';
import styles from './styles/app.module.scss';
import { classList } from './component/components/utils';

const AppButton = (app: any) => ({
  children,
  prop,
}: {
  children: string;
  prop: string;
}) => (
  <div className={styles.button} onClick={app.toggle(prop)}>
    {children}
    <span
      className={classList({
        [styles.switch]: true,
        [styles.checked]: app.state[prop],
      })}
    >
      <small />
    </span>
  </div>
);

export default class App extends React.Component {
  state = {
    text: JSON.stringify(shortcutData, null, 2),
    shortcut: shortcutData,
    debug: false,
    expanded: true,
  };

  toggle = (prop: 'debug' | 'expanded') => (event: React.MouseEvent) => {
    this.setState({
      [prop]: !this.state[prop],
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value || '';
    try {
      const shortcut = JSON.parse(text);
      this.setState({ text, shortcut });
    } catch {
      this.setState({ text });
    }
  };

  render() {
    const { text, shortcut, debug, expanded } = this.state;
    const Button = AppButton(this);

    return (
      <div className={styles.container}>
        <textarea
          value={text}
          spellCheck={false}
          onChange={this.handleChange}
          className={styles.code}
        />
        <div className={styles.preview}>
          <div className={styles.props}>COMPONENT PROPERTIES</div>
          <div className={styles.buttons}>
            <Button prop="debug">DEBUG</Button>
            <Button prop="expanded">EXPANDED</Button>
          </div>

          <ShortcutPreview data={shortcut} debug={debug} expanded={expanded} />
        </div>
      </div>
    );
  }
}
