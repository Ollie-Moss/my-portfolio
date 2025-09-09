import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Project } from "../lib/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <li className="bg-accent/5 dark:bg-bg-light p-8 text-base rounded-md ring-accent-dark dark:ring-accent ring-1 h-fit flex-col flex gap-1">
            <h2 className="font-bold text-md mb-2">{project.name}</h2>
            {project.imgPath && <img
                src={project.imgPath}
                alt={project.imgAlt}
                className="w-full h-auto rounded-md ring-1 ring-bg mb-1" />}
            <p className="italic">{project.description}</p>

            <div className="flex gap-2 ">
                {project.github &&
                    <a
                        href={project.github}
                        target="_blank"
                        className="px-3 py-2 rounded-sm bg-accent/10 dark:bg-accent">
                        <FontAwesomeIcon
                            className="pr-1"
                            icon={faGithub} />
                        Repository
                    </a>
                }
                {project.link &&
                    <a
                        href={project.link}
                        target="_blank"
                        className="px-3 py-2 rounded-sm bg-accent/10 dark:bg-accent">
                        <FontAwesomeIcon
                            className="pr-1"
                            icon={faExternalLink} />
                        View Project
                    </a>
                }
                {
                    project.technologies.map(name => (
                        <p
                            key={name}
                            className="px-3 py-2 rounded-sm bg-accent/10 dark:bg-bg">
                            {name}</p>
                    ))
                }
            </div>
        </li>
    );
}
