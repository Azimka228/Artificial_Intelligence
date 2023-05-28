import React, { CSSProperties, FC, useState } from 'react';

import cn from 'classnames';

import { IOption } from '../index';

import styles from './SelectItem.module.scss';

interface ISelectItemPropsType {
  currentSelectedItem: IOption;
  value: IOption;
  onClick: (value: IOption) => void;
  style?: CSSProperties;
}

const SelectItem: FC<ISelectItemPropsType> = ({
  currentSelectedItem,
  value,
  onClick,
  style,
}) => {
  const handleClickOnItem = (): void => {
    onClick(value);
  };

  const [currentClassName, setCurrentClassName] = useState(styles.main);

  const handleHoverOnItem = (): void => {
    if (currentSelectedItem.label !== value.label) {
      setCurrentClassName(styles.main_hover);
    }
  };
  const handleLeaveHoverOnItem = (): void => {
    if (currentSelectedItem.label !== value.label) {
      setCurrentClassName(styles.main);
    }
  };

  const isSelectedItem = cn(
    currentSelectedItem.label === value.label && styles.item_selected,
    currentClassName,
  );

  return (
    <div
      role="presentation"
      onClick={handleClickOnItem}
      className={isSelectedItem}
      onMouseEnter={handleHoverOnItem}
      onMouseLeave={handleLeaveHoverOnItem}
      style={style}
    >
      {value.label}
    </div>
  );
};

export default SelectItem;
