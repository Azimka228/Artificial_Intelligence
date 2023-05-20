import React from "react";
import styles from "./SliderItem.module.scss"

const SliderItem = () => {
	return (
		<div className={styles.main}>
			<div><img src="" alt=""/></div>
			<div className={styles.title}>Business Prespective Global Agency Awards</div>
			<div className={styles.description}>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and
				visual mockups.
			</div>
		</div>
	);
};

export default SliderItem;