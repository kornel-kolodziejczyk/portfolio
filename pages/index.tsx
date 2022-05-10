import Head from "next/head";
import { NextPage } from "next";

import Home from "../components/Home/Home";
import { IProject } from "../interfaces/Project";
import { getRecentProjects } from "../lib/projects-utils";

interface Props {
  projects: IProject[];
}

const Page: NextPage<Props> = ({ projects }) => (
  <>
    <Head>
      <title>Kornel Kołodziejczyk - Portfolio</title>
      <meta name="description" content="Kornel Kołodziejczyk - Portfolio" />
    </Head>
    <Home projects={projects} />
  </>
);

export default Page;

export const getStaticProps = () => {
  const projects = getRecentProjects();

  return {
    props: {
      projects,
    },
  };
};
