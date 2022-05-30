import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { RecoilRoot } from "recoil";
import createEmotionCache from "src/createEmotionCache";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import Head from "next/head";
import SEO from "../../next-seo.config";
import { CssBaseline, createTheme } from "@mui/material";
import theme from "src/theme";

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <DefaultSeo {...SEO} />
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </CacheProvider>
  );
}

export default MyApp;
