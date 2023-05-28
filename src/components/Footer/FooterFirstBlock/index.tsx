import React, { FC } from 'react';

import siteLogo from '../../../assets/logo.svg';
import emailLogo from '../Assets/email.svg';
import locationLogo from '../Assets/location.svg';
import phoneLogo from '../Assets/phone.svg';

import styles from './FooterFirstBlock.module.scss';

export const FooterFirstBlock: FC = () => {
  return (
    <div className={styles.main}>
      <img src={siteLogo} alt="siteLogo" className={styles.logo} />
      <div className={styles.label}>Artificial Intelligence</div>
      <div className={styles.description}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts
        and visual mockups.
      </div>
      <div className={styles.cards}>
        <div className={styles.item}>
          <img src={emailLogo} alt="emailLogo" className={styles.img} />
          <a href="mailto:Company@gmail.com.com" className={styles.link}>
            {' '}
            Company@gmail.com.com
          </a>
        </div>
        <div className={styles.item}>
          <img src={phoneLogo} alt="phoneLogo" className={styles.img} />
          <a href="tel:+0643321233" className={styles.link}>
            Phone: (064) 332-1233
          </a>
        </div>
        <div className={styles.item}>
          <img src={locationLogo} alt="locationLogo" className={styles.img} />
          450 Wall Street, USA, New York
        </div>
      </div>
    </div>
  );
};
