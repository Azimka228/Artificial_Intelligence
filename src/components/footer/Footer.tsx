import React from 'react';

import Wrapper from '../wrapper/Wrapper';

import styles from './Footer.module.scss';
import FooterFirstBlock from './footerFirstBlock/FooterFirstBlock';
import FooterLastBlock from './footerLastBlock/FooterLastBlock';
import { FooterLinksData } from './FooterLinksData';
import FooterLinksItem from './footerLinksItem/FooterLinksItem';

const Footer = (): JSX.Element => {
  const mappedFooterLinksItems = FooterLinksData.map((el, index) => (
    <FooterLinksItem key={index} {...el} />
  ));

  return (
    <footer id="contact" className={styles.main}>
      <Wrapper className={styles.footerWrapper}>
        <FooterFirstBlock />
        {mappedFooterLinksItems}
        <FooterLastBlock />
      </Wrapper>
    </footer>
  );
};

export default Footer;
