import React from "react";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Footer.module.scss"
import {FooterLinksData} from "./FooterLinksData";
import FooterLinksItem from "./footerLinksItem/FooterLinksItem";
import FooterFirstBlock from "./footerFirstBlock/FooterFirstBlock";
import FooterLastBlock from "./footerLastBlock/FooterLastBlock";

const Footer = () => {

	const mappedFooterLinksItems = FooterLinksData.map((el, index) => <FooterLinksItem key={index} {...el}/>)
	return (
		<footer id="contact" className={styles.main}>
			<Wrapper className={styles.footerWrapper}>
				<FooterFirstBlock/>
				{mappedFooterLinksItems}
				<FooterLastBlock/>
			</Wrapper>
		</footer>
	);
};

export default Footer;