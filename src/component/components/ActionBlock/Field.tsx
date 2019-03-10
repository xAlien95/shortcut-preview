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
}: Props) => {
  const hasPlaceholder = value === undefined || value === '';

  return (
    <div
      className={classList({
        [styles.field]: true,
        [styles.right]: TextAlignment === 'Right',
        [styles.multiline]: Multiline,
        [styles.placeholder]: hasPlaceholder,
        ...(className && { [className]: true }),
      })}
    >
      {hasPlaceholder ? Placeholder : value}
    </div>
  );
};
