import { Text } from 'components/text';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProp {
	title: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

// export const Button = ({
// 	title,
// 	onClick,
// 	type,
// }: {
// 	title: string;
// 	onClick?: () => void;
// 	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
// }) => {
export const Button: React.FC<ButtonProp> = ({ title, onClick, type }) => {
	return (
		<button className={styles.button} type={type} onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
