import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'reset-css';

const theme = extendTheme({
	colors: {
		gray: {
			100: '#f5f5f5',
			200: '#eeeeee',
			300: 'e#0e0e0',
			400: '#bdbdbd',
			500: '#9e9e9e',
			600: '#757575',
			700: '#616161',
			800: '#424242',
			900: '#212121',
		}
	},
	components: {
		Button: {
			variants: {
				link: {
					':focus:': {
						outline: 'none',
						boxShadow: 'none',
					},
				},
			},
		},
	},
});

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default App;
