import Image from "next/image";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";

import WebIcon from "../../../public/images/site/www.svg";
import classes from "./Project.module.scss";
import { IProject } from "../../../interfaces/Project";

interface Props {
  project: IProject;
}

const Project: FC<Props> = ({ project }) => {
  const { title, image, github, demo, tags, excerpt, slug } = project;

  const imagePath = `/images/projects/${slug}/${image}`;

  return (
    <li className={classes.project}>
      <div className={classes.image}>
        <a href={demo} target="_blank" rel="noreferrer noopener">
          <Image src={imagePath} alt={title} width={360} height={300} layout="responsive" />
        </a>
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <div className={classes.links}>
          <div className={classes.demo}>
            <a href={demo} target="_blank" rel="noreferrer noopener">
              <WebIcon size={50} />
            </a>
          </div>
          <div className={classes.github}>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.tags}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Project;
