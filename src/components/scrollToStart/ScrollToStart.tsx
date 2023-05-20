import React from "react";
import styles from './ScrollToStart.module.scss'
import arrowUpLogo from './arrowUp.png'

const ScrollToStart = () => {
	return (
		<div className={styles.main}>
			<a href="#header"><img src={arrowUpLogo} alt="arrowUpLogo"/></a>
		</div>
	);
};

export default ScrollToStart;