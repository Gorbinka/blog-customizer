import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './components/app/App';
import { ArticleProvider } from './context/ArticleContext';

import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<ArticleProvider>
			<App />
		</ArticleProvider>
	</StrictMode>
);
