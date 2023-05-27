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
      <div className={styles.items}>
        <div>
          <img src={emailLogo} alt="emailLogo" />
          Company@gmail.com.com
        </div>
        <div>
          <img src={phoneLogo} alt="phoneLogo" />
          Phone: (064) 332-1233
        </div>
        <div>
          <img src={locationLogo} alt="locationLogo" />
          450 Wall Street, USA, New York
        </div>
      </div>
    </div>
  );
};
