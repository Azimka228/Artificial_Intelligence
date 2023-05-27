import React, { FC } from 'react';

import Wrapper from '../wrapper/Wrapper';

import styles from './Blog.module.scss';
import phoneLogo from './phone.svg';

const Blog: FC = () => {
  return (
    <section id="blog" className={styles.main}>
      <Wrapper className={styles.blogWrapper}>
        <img src={phoneLogo} alt="rocketLogo" className={styles.photo} />
        <div className={styles.content}>
          <div className={styles.title}>
            What our clients say about our awesome solutions
          </div>
          <div className={styles.textContent}>
            <div className={styles.textContent__item}>
              To take a trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it who do not know.
            </div>
            <div className={styles.textContent__item}>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and
              publishing .
            </div>
            <div className={styles.textContent__item}>
              Lorem ipsum is placeholder previewing layouts and visual mockups.
            </div>
            <div className={styles.textContent__item}>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and
              publishing industries for previewing layouts and visual mockups.
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Blog;
