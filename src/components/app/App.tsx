import React from 'react';
import clsx from 'clsx';
import 'src/styles/index.scss';
import styles from 'src/styles/index.module.scss';

import { Article } from 'src/components/article/Article';
import { ArticleParamsForm } from 'src/components/article-params-form/ArticleParamsForm';

import { useArticle } from 'src/context/ArticleContext';

export const App = (): JSX.Element => {
	const { appliedStyles } = useArticle();

	const Styles = {
		'--font-family': appliedStyles.fontFamilyOption.value,
		'--font-size': appliedStyles.fontSizeOption.value,
		'--font-color': appliedStyles.fontColor.value,
		'--container-width': appliedStyles.contentWidth.value,
		'--bg-color': appliedStyles.backgroundColor.value,
	} as React.CSSProperties;

	return (
		<div className={clsx(styles.main)} style={Styles}>
			<ArticleParamsForm></ArticleParamsForm>
			<Article />
		</div>
	);
};
