import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import UseOnClickOutside from '../../../hooks/useOnClickOutside';
import useOnHoverOutside from '../../../hooks/useOnHoverOutside';

import styles from './Select.module.scss';
import SelectHeader from './SelectHeader/SelectHeader';
import SelectItem from './SelectItem/SelectItem';
import SelectMenu from './SelectMenu/SelectMenu';

const SPACE_KEYBOARD = 'Space';
const ENTER_KEYBOARD = 'Enter';
const ARROW_UP_KEYBOARD = 'ArrowUp';
const ARROW_DOWN_KEYBOARD = 'ArrowDown';

const PREV = 1;
const NEXT = 1;

export interface ISelectProps {
  options: IOption[];
  onChange?: (value: IOption) => void;
  error?: string;
  children?: ReactNode;
  placeholder?: string;
  menuHeight?: string;
  defaultValue?: string;
  width?: string;
  className?: string;
  menuItemsPosition?: PositionType;
  header?: boolean;
  padding?: string;
}

export type PositionType = 'up' | 'down';

export interface IOption {
  label: string;
  value: string | number;
}

/**
 *
 * Props:
 * - To add Header use --> Header={true}
 *
 *
 */
export const Select: FC<ISelectProps> = ({
  options,
  placeholder,
  onChange,
  error,
  children,
  menuHeight = '200px',
  width,
  className,
  menuItemsPosition = 'down',
  header = false,
  padding = '15px',
  defaultValue,
}) => {
  const placeholderObj = placeholder ? { label: placeholder, value: placeholder } : null;

  const defaultSelectedValue = placeholderObj || options[0];
  const [selectedValue, setSelectedVale] = useState<IOption>(defaultSelectedValue);

  useEffect(() => {
    if (defaultValue) {
      const currentValue = options.find(el => el.label === defaultValue);

      if (currentValue) setSelectedVale(currentValue);
    }
  }, [defaultValue, options]);

  const handleSetSelectedValue = (incomingData: IOption): void => {
    if (incomingData !== selectedValue) {
      setSelectedVale(incomingData);
      if (onChange) {
        onChange(incomingData);
      }
    }
    handleCloseSelectMenu();
  };

  const [isOpenItemsMenu, setIsOpenItemsMenu] = useState(false);

  const headerClassname = cn(styles.header, {
    [styles.opened_menu_up_pos_header]:
      header && menuItemsPosition === 'up' && isOpenItemsMenu,
    [styles.header_active]: header && menuItemsPosition === 'up' && isOpenItemsMenu,
    [styles.header_active_up]: header && menuItemsPosition === 'up' && isOpenItemsMenu,
    [styles.header_active]: header && menuItemsPosition === 'down' && isOpenItemsMenu,
  });
  const menuClassname = cn({
    [styles.closed_menu]: !header,
    [styles.opened_menu_up_pos]: header && menuItemsPosition === 'up' && isOpenItemsMenu,
    [styles.menu_up_pos]: menuItemsPosition === 'up' && isOpenItemsMenu,
  });

  const handleChangeSelectState = (): void => {
    setIsOpenItemsMenu(!isOpenItemsMenu);
  };
  const handleCloseSelectMenu = (): void => {
    setIsOpenItemsMenu(false);
  };

  const mainDivRef = useRef<HTMLDivElement>(null);

  useOnHoverOutside(mainDivRef, () => {
    window.onscroll = () => {
      setIsOpenItemsMenu(false);

      return true;
    };
  });

  UseOnClickOutside(mainDivRef, handleCloseSelectMenu);

  // if the menu is open and the user tries to scroll behind the menu, then we add the ability to scroll and hide the menu
  const mappedSelectItems = options.map(el => (
    <SelectItem
      key={el.value}
      value={el}
      onClick={handleSetSelectedValue}
      currentSelectedItem={selectedValue}
      style={{ padding }}
    />
  ));

  // disable scrolling by click on space or arrows on keyboard
  useEffect(() => {
    let currentItemId = 0;

    if (isOpenItemsMenu) {
      const test = window.scrollY;

      window.onscroll = () => {
        window.scroll(0, test);
      };
      document.onkeydown = e => {
        const keyCode = e.code;

        if (keyCode === ENTER_KEYBOARD) {
          handleCloseSelectMenu();
        }

        if (keyCode === ARROW_UP_KEYBOARD && options[currentItemId - PREV]) {
          e.preventDefault();
          currentItemId -= PREV;
        }
        if (keyCode === ARROW_DOWN_KEYBOARD && options[currentItemId + NEXT]) {
          e.preventDefault();
          currentItemId += NEXT;
        }

        if (keyCode === SPACE_KEYBOARD) e.preventDefault();

        setSelectedVale(options[currentItemId]);
      };
    } else {
      document.onkeydown = e => {
        const keyCode = e.code;

        if (keyCode === SPACE_KEYBOARD) return true;
        if (keyCode === ARROW_UP_KEYBOARD) return true;
        if (keyCode === ARROW_DOWN_KEYBOARD) return true;
      };
      window.onscroll = () => {
        return true;
      };
    }
  }, [isOpenItemsMenu, options]);

  const selectWidth = width ? { width } : {};

  const HeaderStyles: { padding: string | undefined } = {
    padding,
  };

  return (
    <div style={selectWidth} className={cn(styles.main, className)} ref={mainDivRef}>
      <SelectHeader
        menuItemsPosition={menuItemsPosition}
        className={headerClassname}
        currentSelectedValue={selectedValue}
        isOpenMenu={isOpenItemsMenu}
        onClick={handleChangeSelectState}
        style={HeaderStyles}
      />
      <span className={styles.error}>{error}</span>
      <SelectMenu height={menuHeight} isOpen={isOpenItemsMenu} className={menuClassname}>
        {mappedSelectItems}
        {children}
      </SelectMenu>
    </div>
  );
};

export default Select;
