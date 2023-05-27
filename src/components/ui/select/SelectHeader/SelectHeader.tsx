import React, { CSSProperties, FC } from 'react';

import ArrowDownLogo from '../../../../assets/arrow-slide-down.svg';
import ArrowUpLogo from '../../../../assets/arrow-slide-up.svg';
import { IOption, PositionType } from '../Select';

interface ISelectHeaderPropsType {
  isOpenMenu: boolean;
  currentSelectedValue: IOption;
  onClick: () => void;
  className: string;
  menuItemsPosition?: PositionType;
  style?: CSSProperties;
}

const SelectHeader: FC<ISelectHeaderPropsType> = ({
  currentSelectedValue,
  onClick,
  className,
  isOpenMenu,
  menuItemsPosition = 'down',
  style,
}) => {
  let currentArrowLogo;

  if (menuItemsPosition === 'up') {
    currentArrowLogo = isOpenMenu ? ArrowDownLogo : ArrowUpLogo;
  }
  if (menuItemsPosition === 'down') {
    currentArrowLogo = isOpenMenu ? ArrowUpLogo : ArrowDownLogo;
  }

  return (
    <div onClick={onClick} role="presentation" className={className} style={style}>
      {currentSelectedValue.label}
      <img src={currentArrowLogo} alt="currentArrowLogo" />
    </div>
  );
};

export default SelectHeader;
