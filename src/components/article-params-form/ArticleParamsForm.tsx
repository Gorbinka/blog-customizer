import { useState, useRef } from 'react';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Text } from '../text';
import { Separator } from '../separator';
import { ArrowButton } from '../arrow-button';
import { Button } from '../button';
import articleParamsStyles from 'src/components/article-params-form/ArticleParamsForm.module.scss';
import { useArticle } from 'src/context/ArticleContext';
import { useOutsideClickClose } from 'src/components/select/hooks/useOutsideClickClose';

export const ArticleParamsForm = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { stylesSelected, setStylesSelected, applyStyles, resetStyles } =
		useArticle();
	const ref = useRef<HTMLDivElement | null>(null);

	// Используем хук для закрытия при клике вне элемента
	useOutsideClickClose({
		isOpen,
		rootRef: ref,
		onClose: () => setIsOpen(false),
		onChange: setIsOpen,
	});

	const OnChange =
		(field: keyof typeof stylesSelected) => (value: OptionType) => {
			setStylesSelected({ ...stylesSelected, [field]: value });
		};

	const FormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		applyStyles();
	};

	return (
		<>
			<ArrowButton
				onClick={(event) => {
					event.stopPropagation();
					setIsOpen(!isOpen);
				}}
				isOpen={isOpen}
			/>
			<aside
				ref={ref} // Добавляем ref для отслеживания элемента
				className={clsx(styles.container, isOpen && styles.container_open)}
				onClick={(event) => {
					event.stopPropagation();
				}}>
				<form className={styles.form} onSubmit={FormSubmit}>
					<Text as='h2' weight={800} size={31} uppercase>
						Задайте параметры
					</Text>

					<Select
						selected={stylesSelected.fontFamilyOption}
						onChange={OnChange('fontFamilyOption')}
						options={fontFamilyOptions}
						title='Шрифт'></Select>

					<RadioGroup
						selected={stylesSelected.fontSizeOption}
						name='fontSize'
						onChange={OnChange('fontSizeOption')}
						options={fontSizeOptions}
						title='размер шрифта'></RadioGroup>

					<Select
						selected={stylesSelected.fontColor}
						onChange={OnChange('fontColor')}
						options={fontColors}
						title='цвет шрифта'></Select>

					<Separator />

					<Select
						selected={stylesSelected.backgroundColor}
						onChange={OnChange('backgroundColor')}
						options={backgroundColors}
						title='цвет фона'></Select>

					<Select
						selected={stylesSelected.contentWidth}
						onChange={OnChange('contentWidth')}
						options={contentWidthArr}
						title='ширина контента'></Select>

					<div className={articleParamsStyles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetStyles} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
