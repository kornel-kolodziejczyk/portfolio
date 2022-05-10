import Head from "next/head";
import { NextPage } from "next";

import Container from "../../components/UI/Container/Container";
import Projects from "../../components/Projects/Projects";
import Route from "../../components/UI/Route/Route";
import { IProject } from "../../interfaces/Project";
import { getAllProjects } from "../../lib/projects-utils";

interface Props {
  projects: IProject[];
}

const Page: NextPage<Props> = ({ projects }) => (
  <>
    <Head>
      <title>Kornel Kołodziejczyk - Projects</title>
      <meta name="description" content="Kornel Kołodziejczyk - Projects" />
    </Head>
    <Route />
    <Container>
      <Projects projects={projects} />
    </Container>
  </>
);

export default Page;

export function getStaticProps() {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
