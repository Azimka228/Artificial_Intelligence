import React from 'react';

import { Wrapper } from '../Wrapper';

import styles from './Footer.module.scss';
import { FooterFirstBlock } from './FooterFirstBlock';
import { FooterLastBlock } from './FooterLastBlock';
import { FooterLinksData } from './FooterLinksData';
import { FooterLinksItem } from './FooterLinksItem';

export const Footer = (): JSX.Element => {
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
