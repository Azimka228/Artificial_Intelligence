import React from "react";
import Wrapper from "../wrapper/Wrapper";
import styles from "./AboutUs.module.scss"
import rocketLogo from "../home/rocket.svg";
import Button from "../UIkit/button/Button";

const AboutUs = () => {
	return (
		<section id='about' className={styles.main}>
			<img src={rocketLogo} alt="rocketLogo" className={styles.rocketLogo}/>
			<Wrapper>
				<div className={styles.content}>
					<div className={styles.title}>Apply AI, Deep Learning and Data Sciece to solve</div>
					<div className={styles.description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
					<div className={styles.btns}>
						<Button>Learn More</Button>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export default AboutUs;