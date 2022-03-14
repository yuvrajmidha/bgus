import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../../public/assets/js/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
         <Head>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script type="text/javascript" src="/assets/js/chatbot.js"></script>
          <link
            rel="shortcut icon"
            href="/assets/images/icons/favicon/bg.ico"
            type="image/x-icon"
          />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}