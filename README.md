# Shortcut Preview

 [![npm version](https://img.shields.io/npm/v/shortcut-preview.svg?colorB=blue)](https://www.npmjs.com/package/shortcut-preview)
![npm](https://img.shields.io/npm/l/shortcut-preview.svg)

A React component to preview iOS Shortcuts.

![Screenshot](https://i.imgur.com/FRCsrSG.png)

See the component in action on
[xalien95.github.io/shortcut-preview](https://xalien95.github.io/shortcut-preview/).

## Installation

You can install this component using [npm](https://www.npmjs.com/package/shortcut-preview):

```
npm i shortcut-preview
```

## Usage

```tsx
import React from 'react';
import ShortcutPreview from 'shortcut-preview';

// JSON file containing a Shortcut converted using 'pblist-parser'
import shortcutData from './shortcut-data.json';

export default class App extends React.Component {
  render() {
    return <ShortcutPreview data={shortcutData} />;
  }
}
```

You can optionally add a `debug` property: each action block will then show a **LOG** button to `console.log` the contents stored in its state.

```tsx
export default class App extends React.Component {
  render() {
    return <ShortcutPreview debug data={shortcutData} />;
  }
}
```

## Similar Projects

- [shcuts.app](https://github.com/pNre/shcuts.app)
- [Apple Shortcuts Viewer](https://github.com/BobRazowsky/shortcuts)
