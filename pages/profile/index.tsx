import Head from "next/head";
import { NextPage } from "next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Container from "../../components/UI/Container/Container";
import Profile from "../../components/Profile/Profile";
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
        <title>Kornel Kołodziejczyk - Profile</title>
        <meta name="description" content="Kornel Kołodziejczyk - Profile" />
      </Head>
      <Route />
      <Container>
        <Profile />;
      </Container>
    </>
  );
};

export default Page;
