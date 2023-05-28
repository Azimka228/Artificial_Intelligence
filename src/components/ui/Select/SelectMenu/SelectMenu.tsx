import React, { FC, ReactNode, useRef } from 'react';

import cn from 'classnames';

import styles from './SelectMenu.module.scss';

interface ISelectMenuPropsType {
  isOpen: boolean;
  children: ReactNode;
  height: string;
  className?: string;
}

const SelectMenu: FC<ISelectMenuPropsType> = ({
  children,
  isOpen,
  className,
  height,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const inlineStyles = { maxHeight: height };

  if (!isOpen) return null;

  const mainClassName = cn(className, styles.main);

  return (
    <div style={inlineStyles} className={mainClassName} ref={ref}>
      {children}
    </div>
  );
};

export default SelectMenu;
