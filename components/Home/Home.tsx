import { FC } from "react";
import { useRouter } from "next/router";

import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import Hero from "./Hero/Hero";
import Projects from "../Projects/Projects";
import classes from "./Home.module.scss";
import { IProject } from "../../interfaces/Project";

interface Props {
  projects: IProject[];
}

const Home: FC<Props> = ({ projects }) => {
  const router = useRouter();

  return (
    <div className={classes.home}>
      <Hero />
      <Container>
        <div className={classes.projects}>
          <h2>RECENT PROJECTS</h2>
          <Projects projects={projects} />
          <Button onClick={() => router.push("/projects")}>View more</Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
