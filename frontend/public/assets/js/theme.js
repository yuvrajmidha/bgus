import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  
const theme = extendTheme({
    config,
    colors: {
        transparent: "transparent",
        primary: {
            500: "#F32222"
        },
        secondary: {
            500: "#EFB617"
        },
        dark:{
            500: "#051133",
            400: "#2B3244"
        },
        light:{
            500: "#FAFAFC",
            400: "#F3F3F8"
        }
        
    },
    styles: {
        global: (props) => ({
          body: {
            fontFamily: 'body',
            color: mode('dark.500', 'dark.500')(props),
            bg: mode('#fff', '#fff')(props),
            lineHeight: 'base',
          },
        }),
      },
    
  }) ;

  export default theme;