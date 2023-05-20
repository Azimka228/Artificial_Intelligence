import React from "react";
import Wrapper from "../wrapper/Wrapper";
import rocketLogo from "./rocket.svg"
import styles from "./Home.module.scss"
import firstCompany from "./firstCompany.svg"
import secondCompany from "./secondCompany.svg"
import thirdCompany from "./thirdCompany.svg"
import fourCompany from "./fourCompany.svg"
import Button from "../UIkit/button/Button";

const Home = () => {

	return (
		<section id="home" className={styles.main}>
			<img src={rocketLogo} alt="rocketLogo" className={styles.rocketLogo}/>
			<Wrapper>
				<div className={styles.content}>
					<div className={styles.label}>Next genaretion platform</div>
					<div className={styles.title}>Artificial intelligence & Syber security</div>
					<div className={styles.description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
					<div className={styles.btns}>
						<Button variant="big">Get Started</Button>
						<Button variant="big">Watch Video</Button>
					</div>

				</div>
				<div className={styles.logoCompany}>
					<img src={firstCompany} alt="firstCompany"/>
					<img src={secondCompany} alt="secondCompany"/>
					<img src={thirdCompany} alt="thirdCompany"/>
					<img src={fourCompany} alt="fourCompany"/>
				</div>
			</Wrapper>
		</section>
	);
};

export default Home;