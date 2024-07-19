// import { ArrowButton } from 'components/arrow-button';
// import { Button } from 'components/button';
import { ReactNode } from 'react';
import { classNames } from 'src/utils/utils';
import styles from './ArticleParamsForm.module.scss';

interface PropsArticleParamsForm {
	children?: ReactNode;
	arrowButton?: ReactNode;
	isOpen?: boolean;
}

export const ArticleParamsForm = ({
	children,
	arrowButton,
	isOpen,
}: PropsArticleParamsForm) => {
	return (
		<>
			{arrowButton}
			<aside
				className={classNames(
					styles.container,
					isOpen && styles.container_open
				)}
				onClick={(event) => event.stopPropagation()}>
				<form className={styles.form}>{children}</form>
			</aside>
		</>
	);
};
