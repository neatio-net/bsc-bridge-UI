import '../styles/globals.css'
// pages/_app.js
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react';
import theme from '../components/utils/theme'
import WalletCtx from '../contexts/walletCtx';

function MyApp({ Component, pageProps }) {
  return (
    <WalletCtx>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
    </WalletCtx>
  )
}

export default MyApp
