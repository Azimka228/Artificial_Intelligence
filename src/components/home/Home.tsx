import React from "react";
import Wrapper from "../wrapper/Wrapper";
import rocketLogo from "./assets/rocket.svg"
import styles from "./Home.module.scss"
import firstCompany from "./assets/firstCompany.svg"
import secondCompany from "./assets/secondCompany.svg"
import thirdCompany from "./assets/thirdCompany.svg"
import fourCompany from "./assets/fourCompany.svg"
import playLogo from "./assets/play.svg"
import Button from "../UIkit/button/Button";

const Home = () => {

	return (
		<section id="home" className={styles.main}>
			<Wrapper className={styles.homeWrapper}>
				<img src={rocketLogo} alt="rocketLogo" className={styles.photo}/>
				<div className={styles.content}>
					<div className={styles.label}>Next genaretion platform</div>
					<div className={styles.title}>Artificial intelligence & Syber security</div>
					<div className={styles.description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and
						publishing industries for previewing layouts and visual mockups.
					</div>
					<div className={styles.btns}>
						<Button variant="big">Get Started</Button>
						<Button variant="big"><img src={playLogo} alt="playLogo"/> Watch Video</Button>
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