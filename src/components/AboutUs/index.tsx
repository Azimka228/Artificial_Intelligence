import React, { FC } from 'react';

import { Button } from '../ui';
import { Wrapper } from '../Wrapper';

import styles from './AboutUs.module.scss';
import phoneLogo from './phone.svg';

export const AboutUs: FC = () => {
  return (
    <section id="about" className={styles.main}>
      <Wrapper className={styles.aboutUsWrapper}>
        <img src={phoneLogo} alt="rocketLogo" className={styles.photo} />
        <div className={styles.content}>
          <div className={styles.title}>
            Apply AI, Deep Learning and Data Sciece to solve
          </div>
          <div className={styles.description}>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and
            publishing industries for previewing layouts and visual mockups.
          </div>
          <div className={styles.btns}>
            <Button>Learn More</Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
