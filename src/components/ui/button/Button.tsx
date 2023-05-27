import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

import cn from 'classnames';

import styles from './Button.module.scss';

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  variant?: 'default' | 'big';
}

const Button: FC<IButtonProps> = ({ variant = 'default', children, ...restProps }) => {
  const textClassName = cn({
    [styles.defaultText]: variant === 'default',
    [styles.bigText]: variant === 'big',
  });

  const buttonClassName = cn(styles.main, {
    [styles.defaultButton]: variant === 'default',
    [styles.bigButton]: variant === 'big',
  });

  return (
    <button className={buttonClassName} {...restProps} type="button">
      <p className={textClassName}> {children}</p>
    </button>
  );
};

export default Button;
