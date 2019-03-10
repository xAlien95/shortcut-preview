import React from 'react';

import Icon from '../ActionIcon';

import { classList } from '../utils';
import styles from './styles.module.scss';

export default ({ data }: any) => (
  <div
    className={classList({
      [styles.token]: true,
      [styles.icon]: data.icon,
      [styles.aggrandizement]: data.aggrandizement,
      [styles.global]: data.global,
    })}
  >
    {data.icon && <Icon name={data.icon} className={styles.icon} />}
    {data.name}
    {data.aggrandizement && (
      <div className={styles.aggrandizement}>{data.aggrandizement}</div>
    )}
  </div>
);
