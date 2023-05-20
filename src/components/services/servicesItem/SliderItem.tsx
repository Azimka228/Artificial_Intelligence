import React, {FC} from "react";
import styles from "./SliderItem.module.scss"
import {ServicesData} from "../ServicesData";

const SliderItem:FC<ServicesData> = ({url,description,title}) => {
	return (
		<div className={styles.main}>
			<div className={styles.photo}><img src={url} alt="img"/></div>
			<div className={styles.title}>{title}</div>
			<div className={styles.description}>{description}
			</div>
		</div>
	);
};

export default SliderItem;