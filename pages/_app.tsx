import "../styles/globals.scss";

import Head from "next/head";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

import Layout from "../components/Layout/Layout";
import Loader from "../components/UI/Loader/Loader";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/portfolio.ico" />
        </Head>
        {loading ? <Loader /> : <Component {...pageProps} />}
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
