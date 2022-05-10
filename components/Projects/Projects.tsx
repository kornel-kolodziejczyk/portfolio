import { FC } from "react";

import Project from "./Project/Project";
import classes from "./Projects.module.scss";
import { IProject } from "../../interfaces/Project";

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects }) => (
  <ul className={classes.projects}>
    {projects.map((project) => (
      <Project key={project.slug} project={project} />
    ))}
  </ul>
);

export default Projects;
