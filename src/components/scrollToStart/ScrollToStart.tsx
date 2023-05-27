import React, { FC } from 'react';

import arrowUpLogo from './arrowUp.png';
import styles from './ScrollToStart.module.scss';

const ScrollToStart: FC = () => {
  return (
    <div className={styles.main}>
      <a href="#header">
        <img src={arrowUpLogo} alt="arrowUpLogo" />
      </a>
    </div>
  );
};

export default ScrollToStart;
