import type { AppProps } from "next/app";
import { ContextProvider } from "../context/context";
import { GlobalStyle } from "../styles/global.style";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ContextProvider>
         <GlobalStyle />
         <Component {...pageProps} />
      </ContextProvider>
   );
}

export default MyApp;
