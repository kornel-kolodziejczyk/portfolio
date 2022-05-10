import Head from "next/head";
import { NextPage } from "next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Container from "../../components/UI/Container/Container";
import Inbox from "../../components/Inbox/Inbox";
import Route from "../../components/UI/Route/Route";

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.replace("/auth");
      }
    });
  }, [router]);

  return (
    <>
      <Head>
        <title>Kornel Kołodziejczyk - Inbox</title>
        <meta name="description" content="Kornel Kołodziejczyk - Inbox" />
      </Head>
      <Route />
      <Container>
        <Inbox />
      </Container>
    </>
  );
};

export default Page;
