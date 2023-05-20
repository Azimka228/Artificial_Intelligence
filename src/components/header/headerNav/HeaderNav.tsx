import React from "react";
import styles from './HeaderNav.module.scss'

const HeaderNav = () => {
	return (
		<nav className={styles.main}>
			<a href="#home">Home</a>
			<a href="#about">About</a>
			<a href="#services">Services</a>
			<a href="#blog">Blog</a>
			<a href="#contact">Contact</a>
		</nav>
	);
};

export default HeaderNav;