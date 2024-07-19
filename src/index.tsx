import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import articleParamsStyles from './components/article-params-form/ArticleParamsForm.module.scss';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from './constants/articleProps';
import { ArrowButton } from './components/arrow-button';
import { Button } from 'components/button';
import { Text } from './components/text';
import { Select } from './components/select';
import { RadioGroup } from './components/radio-group';
import { Separator } from './components/separator';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [font, setFont] = useState(defaultArticleState.fontFamilyOption);
	const [fontSize, setFontSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [bgColor, setBgColor] = useState(defaultArticleState.backgroundColor);
	const [width, setWidth] = useState(defaultArticleState.contentWidth);

	const [fontPres, setFontPres] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizePres, setFontSizePres] = useState(
		defaultArticleState.fontSizeOption
	);
	const [fontColorPres, setFontColorPres] = useState(
		defaultArticleState.fontColor
	);
	const [bgColorPres, setBgColorPres] = useState(
		defaultArticleState.backgroundColor
	);
	const [widthPres, setWidthPres] = useState(defaultArticleState.contentWidth);

	function translateState(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		event.preventDefault();
		setFontPres(font);
		setFontSizePres(fontSize);
		setFontColorPres(fontColor);
		setBgColorPres(bgColor);
		setWidthPres(width);
		// console.log(
		//   "Текущие значения:",
		//   font,
		//   fontSize,
		//   fontColor,
		//   bgColor,
		//   width
		// );
	}

	function restoreState() {
		setFont(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBgColor(defaultArticleState.backgroundColor);
		setWidth(defaultArticleState.contentWidth);

		// Обновление вью состояния при сбросе
		setFontPres(defaultArticleState.fontFamilyOption);
		setFontSizePres(defaultArticleState.fontSizeOption);
		setFontColorPres(defaultArticleState.fontColor);
		setBgColorPres(defaultArticleState.backgroundColor);
		setWidthPres(defaultArticleState.contentWidth);
		//console.log("Сброс настроек к значениям:", defaultArticleState);
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': fontPres.value,
					'--font-size': fontSizePres.value,
					'--font-color': fontColorPres.value,
					'--container-width': widthPres.value,
					'--bg-color': bgColorPres.value,
				} as CSSProperties
			}
			onClick={() => {
				setIsOpen(false);
			}}>
			<ArticleParamsForm
				arrowButton={
					<ArrowButton
						onClick={(event) => {
							event.stopPropagation();
							setIsOpen(!isOpen);
						}}
						isOpen={isOpen}
					/>
				}
				isOpen={isOpen}>
				<Text as='h2' weight={800} size={31} uppercase>
					Задайте параметры
				</Text>

				<Select
					selected={font}
					onChange={setFont}
					options={fontFamilyOptions}
					title='Шрифт'></Select>

				<RadioGroup
					selected={fontSize}
					name='fontSize'
					onChange={setFontSize}
					options={fontSizeOptions}
					title='размер шрифта'></RadioGroup>

				<Select
					selected={fontColor}
					onChange={setFontColor}
					options={fontColors}
					title='цвет шрифта'></Select>

				<Separator />

				<Select
					selected={bgColor}
					onChange={setBgColor}
					options={backgroundColors}
					title='цвет фона'></Select>

				<Select
					selected={width}
					onChange={setWidth}
					options={contentWidthArr}
					title='ширина контента'></Select>

				<div className={articleParamsStyles.bottomContainer}>
					<Button title='Сбросить' type='reset' onClick={restoreState} />
					<Button
						title='Применить'
						type='submit'
						onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
							translateState(event)
						}
					/>
				</div>
			</ArticleParamsForm>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
