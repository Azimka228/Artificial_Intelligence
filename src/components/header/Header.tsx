import React from 'react';

import siteLogo from '../../assets/logo.svg';
import Button from '../UIkit/button/Button';
import Wrapper from '../wrapper/Wrapper';

import styles from './Header.module.scss';
import HeaderNav from './headerNav/HeaderNav';

const Header = (): JSX.Element => {
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

export default Header;
