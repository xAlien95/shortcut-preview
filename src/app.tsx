import React from 'react';

import ShortcutPreview from './component';
import shortcutData from './shortcut-data.json';

import './styles/base.scss';
import styles from './styles/app.module.scss';

export default class App extends React.Component {
  state = {
    text: JSON.stringify(shortcutData, null, 2),
    shortcut: shortcutData,
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
    const { text, shortcut } = this.state;

    return (
      <div className={styles.container}>
        <textarea
          value={text}
          spellCheck={false}
          onChange={this.handleChange}
          className={styles.code}
        />
        <div className={styles.preview}>
          <ShortcutPreview data={shortcut} />
        </div>
      </div>
    );
  }
}
