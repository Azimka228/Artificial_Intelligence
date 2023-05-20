import {FC} from "react";
import {FooterLinksDataItem} from "../FooterLinksData";
import styles from './FooterLinksItem.module.scss'

const FooterLinksItem: FC<FooterLinksDataItem> = ({title, links}) => {
	const mappedLinks = links.map((el,index) => <a key={index} href={el.url}>{el.name}</a>)

	return (
		<div className={styles.main}>
			<div className={styles.title}>{title}</div>
			<div className={styles.links}>
				{mappedLinks}
			</div>

		</div>
	);
};

export default FooterLinksItem;