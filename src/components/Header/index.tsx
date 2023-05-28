import React, { FC } from 'react';

import siteLogo from '../../assets/logo.svg';
import { Button } from '../ui';
import { Wrapper } from '../Wrapper';

import styles from './Header.module.scss';
import { HeaderNav } from './HeaderNav';

export const Header: FC = () => {
  return (
    <header id="header" className={styles.main}>
      <Wrapper className={styles.headerWrapper}>
        <div className={styles.links}>
          <div className={styles.logo}>
            <img src={siteLogo} alt="logo" />
            <p className={styles.title}>Artificial Intelligence</p>
          </div>
          <HeaderNav />
        </div>
        <Button>Sign In</Button>
      </Wrapper>
    </header>
  );
};
