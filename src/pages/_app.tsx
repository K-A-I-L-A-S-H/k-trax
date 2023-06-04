import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>k-Trax</title>
				<link rel="shortcut icon" href={`../../public/favicon.ico`} />
				<meta name="description" content="Am I Secure" key="desc" />
			</Head>
			<main className={`font-sans h-full`}>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default App;
