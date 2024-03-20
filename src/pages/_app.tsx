import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {createTheme, CssBaseline, Palette, ThemeProvider} from "@mui/material";
import {red} from "@mui/material/colors";


export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
}

const theme = createTheme();