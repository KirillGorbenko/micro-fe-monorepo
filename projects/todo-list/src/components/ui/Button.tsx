import React, { FC } from 'react';
import styles from './index.module.scss';

type Variant = 'blue' | 'white';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
}

const Button: FC<ButtonProps> = ({ variant = 'blue', children, ...rest }) => (
  <button
    {...rest}
    className={
      `${styles.commonButtonStyles}  
      ${variant === 'blue' ? styles.blueTheme : styles.whiteTheme}`
    }>
    {children}
  </button>
);

export default Button;