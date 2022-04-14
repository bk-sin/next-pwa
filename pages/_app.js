import { createTheme, NextUIProvider } from "@nextui-org/react"
import useDarkMode from "use-dark-mode"

import "../styles/globals.css"

const lightTheme = createTheme({
  type: "light",
})

const darkTheme = createTheme({
  type: "dark",
})

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false)

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
