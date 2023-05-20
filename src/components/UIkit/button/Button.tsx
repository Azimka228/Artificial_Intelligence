import {ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode} from "react";
import styles from "./Button.module.scss"

export interface IButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?:ReactNode
	variant?: 'default' | 'big'
}

const Button:FC<IButtonProps> = ({variant = 'default',children,...restProps}) => {
	const textClassName = variant === 'default' ? styles.defaultText : styles.bigText
	const ButtonClassName = variant === 'default' ? styles.defaultButton : styles.bigButton

	return (
		<button className={`${styles.main} ${ButtonClassName}`} {...restProps}>
			<p className={textClassName}>			{children}</p>
		</button>
	);
};

export default Button;