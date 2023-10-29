import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

const MyDocument = () => (
	<Html lang='en'>
		<Head>
			<meta
				name='viewport'
				content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
			/>
			<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			<link rel='manifest' href='/site.webmanifest' />
			<meta name='application-name' content='Atoms' />
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='default' />
			<meta name='apple-mobile-web-app-title' content='Atoms' />
			<meta name='description' content='Portfolio Tracker with Superpowers' />
			<meta name='format-detection' content='telephone=no' />
			<meta name='mobile-web-app-capable' content='yes' />
			<meta name='msapplication-config' content='/icons/browserconfig.xml' />
			<meta name='msapplication-TileColor' content='#2B5797' />
			<meta name='msapplication-tap-highlight' content='no' />
			<meta name='theme-color' content='#9d72ff' />
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const cache = createCache();
	const originalRenderPage = ctx.renderPage;
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => (
				<StyleProvider cache={cache}>
					<App {...props} />
				</StyleProvider>
			),
		});

	const initialProps = await Document.getInitialProps(ctx);
	const style = extractStyle(cache, true);
	return {
		...initialProps,
		styles: (
			<>
				{initialProps.styles}
				<style dangerouslySetInnerHTML={{ __html: style }} />
			</>
		),
	};
};

export default MyDocument;
