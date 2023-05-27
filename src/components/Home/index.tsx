import React, { FC } from 'react';

import Button from '../ui/button/Button';
import { Wrapper } from '../Wrapper';

import firstCompany from './Assets/firstCompany.svg';
import fourCompany from './Assets/fourCompany.svg';
import playLogo from './Assets/play.svg';
import rocketLogo from './Assets/rocket.svg';
import secondCompany from './Assets/secondCompany.svg';
import thirdCompany from './Assets/thirdCompany.svg';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <section id="home" className={styles.main}>
      <Wrapper className={styles.homeWrapper}>
        <img src={rocketLogo} alt="rocketLogo" className={styles.photo} />
        <div className={styles.content}>
          <div className={styles.label}>Next genaretion platform</div>
          <div className={styles.title}>Artificial intelligence & Syber security</div>
          <div className={styles.description}>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and
            publishing industries for previewing layouts and visual mockups.
          </div>
          <div className={styles.btns}>
            <Button variant="big">Get Started</Button>
            <Button variant="big">
              <img src={playLogo} alt="playLogo" /> Watch Video
            </Button>
          </div>
        </div>
        <div className={styles.logoCompany}>
          <img src={firstCompany} alt="firstCompany" />
          <img src={secondCompany} alt="secondCompany" />
          <img src={thirdCompany} alt="thirdCompany" />
          <img src={fourCompany} alt="fourCompany" />
        </div>
      </Wrapper>
    </section>
  );
};
