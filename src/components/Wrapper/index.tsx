import { FC, ReactNode } from 'react';

import styles from './Wrapper.module.scss';

interface IWrapperProps {
  children?: ReactNode;
  className?: string;
}

export const Wrapper: FC<IWrapperProps> = ({ children, className }) => {
  const currentClassName = `${styles.main} ${className}`;

  return <div className={currentClassName}>{children}</div>;
};
