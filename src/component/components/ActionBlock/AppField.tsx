import React from 'react';

import Icon from '../ActionIcon';

import styles from './styles.module.scss';
import { classList } from '../utils';

export default ({ value }: { value: string }) => {
  const apps = new Map([['iCloud Drive', 'iCloud'], ['Dropbox', 'Dropbox']]);

  const name = value || 'iCloud Drive';
  const icon = apps.get(name);

  return (
    <div
      className={classList({
        [styles.field]: true,
        [styles.right]: true,
      })}
    >
      <Icon name={icon} />
      {name}
    </div>
  );
};
