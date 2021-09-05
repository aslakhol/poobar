import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-supabase";
import { supabase } from "../utils/superbaseClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider value={supabase}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
export default MyApp;
