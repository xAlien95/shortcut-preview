import React from 'react';

import styles from './styles.module.scss';
import { classList } from '../utils';

interface Props {
  value: string;
  data: {
    Placeholder?: string;
    Multiline?: boolean;
    TextAlignment?: 'Left' | 'Right';
  };
  className?: string;
}

export default ({
  value,
  data: { Placeholder, Multiline = false, TextAlignment = 'Left' },
  className,
}: Props) => (
  <div
    className={classList({
      [styles.field]: true,
      [styles.right]: TextAlignment === 'Right',
      [styles.multiline]: Multiline,
      [styles.placeholder]: value === undefined,
      ...(className && { [className]: true }),
    })}
  >
    {value !== undefined ? value : Placeholder}
  </div>
);
