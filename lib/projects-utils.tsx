import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { IProject } from "../interfaces/Project";

const projectsDirectory = path.join(process.cwd(), "projects");

export const getProjectsFiles = () => {
  return fs.readdirSync(projectsDirectory);
};

export const getProjectData = (projectIdentifier: string) => {
  const slug = projectIdentifier.replace(/\.md$/, "");
  const filePath = path.join(projectsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const projectData: IProject = {
    slug,
    ...(data as Omit<IProject, "slug" | "content">),
    content,
  };

  return projectData;
};

export const getAllProjects = () => {
  const projectFiles = getProjectsFiles();

  const allProjects = projectFiles.map((projectFile) => {
    return getProjectData(projectFile);
  });

  const sortedProjects = allProjects.sort((projectA, projectB) => (new Date(projectA.date) > new Date(projectB.date) ? -1 : 1));

  return sortedProjects;
};

export const getRecentProjects = () => {
  const allProjects = getAllProjects();

  const recentProjects = allProjects.filter((project) => project.isFeatured);

  return recentProjects;
};
