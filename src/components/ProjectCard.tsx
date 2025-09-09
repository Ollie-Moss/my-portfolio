import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Project } from "../lib/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <li className="bg-accent/5 dark:bg-bg-light p-8 text-base rounded-md ring-accent-dark dark:ring-accent ring-1 h-fit flex-col flex gap-1">
            <section>
                <h2 className="font-bold text-md mb-2">{project.name}</h2>
                {project.imgPath && <img
                    src={project.imgPath}
                    alt={project.imgAlt}
                    className="w-full h-auto rounded-md ring-1 ring-bg mb-1" />}
                <p className="italic">{project.description}</p>
            </section>

            <section className="grid gap-2 grid-cols-1">
                <div className="flex gap-2">
                    {project.github &&
                        <a
                            href={project.github}
                            target="_blank"
                            className="px-3 py-2 rounded-md bg-accent text-white flex items-center justify-center gap-1">
                            <FontAwesomeIcon icon={faGithub} />
                            <p>Repository</p>
                        </a>
                    }
                    {project.link &&
                        <a
                            href={project.link}
                            target="_blank"
                            className="px-3 py-2 rounded-md bg-accent text-white flex items-center justify-center gap-1">
                            <FontAwesomeIcon icon={faExternalLink} />
                            <p>View Project</p>
                        </a>
                    }
                </div>
                <ul className="flex gap-2 flex-wrap text-sm">
                    {
                        project.technologies.map(name => (
                            <li
                                key={name}
                                className="px-3 py-2 rounded-md bg-accent/10 dark:bg-bg">
                                {name}</li>
                        ))
                    }
                </ul>
            </section>
        </li>
    );
}
