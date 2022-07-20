// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
const colors = {
  primary:"#00b318",
  secondary:"#00ff23",
  100:"#0939ff",
  200:"#009bb3",
  300:"#00bfff"
}

// 3. extend the theme
const theme =   ({ config,colors,breakpoints })

export default theme