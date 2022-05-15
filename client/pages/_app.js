import Router from 'next/router';

{/* Style */}
import '../styles/globals.css';

{/* Progress bar */}
import ProgressBar from '@badrap/bar-of-progress';

{/* Chakra UI */}
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const progress = new ProgressBar({
  size: 3,
  color: "#6530d9",
  className: "z-50",
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const theme = extendTheme({
  colors: {
    purple: "#6530d9",
  },
});

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
