import React from 'react';

import ShortcutPreview from './component';
import shortcutData from './shortcut-data.json';

export default class App extends React.Component {
  render() {
    return <ShortcutPreview data={shortcutData} />;
  }
}
