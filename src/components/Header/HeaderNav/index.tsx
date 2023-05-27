import React, { FC } from 'react';

import styles from './HeaderNav.module.scss';

export const HeaderNav: FC = () => {
  return (
    <nav className={styles.main}>
      <a href="#home" className={styles.link}>
        Home
      </a>
      <a href="#about" className={styles.link}>
        About
      </a>
      <a href="#services" className={styles.link}>
        Services
      </a>
      <a href="#blog" className={styles.link}>
        Blog
      </a>
      <a href="#contact" className={styles.link}>
        Contact
      </a>
    </nav>
  );
};
