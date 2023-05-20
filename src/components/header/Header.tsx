import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Button from "../UIkit/button/Button";
import HeaderNav from "./headerNav/HeaderNav";
import styles from "./Header.module.scss"
import siteLogo from "../../assets/logo.svg"

const Header = () => {
	return (
		<header id="header" className={styles.main}>
			<Wrapper className={styles.headerWrapper}>
				<div className={styles.links}>
					<div className={styles.logo}>
						<img src={siteLogo} alt="logo"/>
						<p>Artificial Intelligence</p>
					</div>
					<HeaderNav/>
				</div>
				<Button>Sign In</Button>
			</Wrapper>
		</header>
	);
};

export default Header;