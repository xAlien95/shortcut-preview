import React from 'react';

import icons from './icons';

import { classList } from '../utils';
import styles from './styles.module.scss';

export default ({
  name = 'Placeholder',
  className,
}: {
  name?: string;
  className?: string;
}) => {
  if (name === 'Calendar') {
    const [day, weekday] = new Date()
      .toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
      })
      .split(' ');

    return (
      <div
        className={classList({
          [styles.icon]: true,
          [styles['i-calendar']]: true,
          className: !!className,
        })}
      >
        <span>{weekday}</span>
        <span>{day}</span>
      </div>
    );
  }

  let index = icons.indexOf(name);
  if (index === -1) index = icons.indexOf('Placeholder');

  return (
    <div
      className={classList({
        [styles.icon]: true,
        [styles[`i-${index}`]]: true,
        ...(className && { [className]: !!className }),
      })}
    />
  );
};
