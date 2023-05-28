import React, { FC } from 'react';

import { IOption, Select } from '../../ui/Select';
import facebookLogo from '../Assets/facebook.svg';
import instagramLogo from '../Assets/instagram.svg';
import linkedinLogo from '../Assets/linkedin.svg';
import planetLogo from '../Assets/planet.svg';
import twitterLogo from '../Assets/twitter.svg';
import youtubeLogo from '../Assets/youtube.svg';

import styles from './FooterLastBlock.module.scss';

const LANGUAGE_DATA: IOption[] = [
  { label: 'Russian', value: 'ru' },
  { label: 'English', value: 'usd' },
  { label: 'English', value: 'usd' },
  { label: 'English', value: 'usd' },
  { label: 'English', value: 'usd' },
];

export const FooterLastBlock: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>ABOUT THE STORE</div>
      <div className={styles.description}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts
        and visual mockups.
      </div>
      <div className={styles.site}>www.company.com</div>
      <div className={styles.socialNetworks}>
        <a href="#">
          <img src={facebookLogo} alt="facebookLogo" />
        </a>
        <a href="#">
          <img src={instagramLogo} alt="instagramLogo" />
        </a>
        <a href="#">
          <img src={twitterLogo} alt="twitterLogo" />
        </a>
        <a href="#">
          <img src={linkedinLogo} alt="linkedinLogo" />
        </a>
        <a href="#">
          <img src={youtubeLogo} alt="youtubeLogo" />
        </a>
      </div>
      <div className={styles.select}>
        <img src={planetLogo} alt="planetLogo" />
        <Select options={LANGUAGE_DATA} menuItemsPosition="up" width="110px" />
      </div>
    </div>
  );
};
