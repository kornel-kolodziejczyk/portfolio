import Head from "next/head";
import { NextPage } from "next";

import Contact from "../../components/Contact/Contact";
import Container from "../../components/UI/Container/Container";
import Route from "../../components/UI/Route/Route";

const Page: NextPage = () => (
  <>
    <Head>
      <title>Kornel Kołodziejczyk - Contact me</title>
      <meta name="description" content="Kornel Kołodziejczyk - Contact me" />
    </Head>
    <Route />
    <Container>
      <Contact />
    </Container>
  </>
);

export default Page;
