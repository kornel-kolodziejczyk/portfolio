import Head from "next/head";
import { NextPage } from "next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Auth from "../../components/Auth/Auth";
import Container from "../../components/UI/Container/Container";
import Route from "../../components/UI/Route/Route";

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      }
    });
  }, [router]);

  return (
    <>
      <Head>
        <title>Kornel Kołodziejczyk - Login Page</title>
        <meta name="description" content="Kornel Kołodziejczyk - Login Page" />
      </Head>
      <Route />
      <Container>
        <Auth />
      </Container>
    </>
  );
};

export default Page;
