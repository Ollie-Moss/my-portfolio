import type { Project } from "../lib/types";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <li className="bg-accent/5 dark:bg-bg-light p-8 text-base rounded-md ring-accent-dark dark:ring-accent ring-1 h-fit flex-col flex gap-1">
            <h2 className="font-bold text-md mb-2">{project.name}</h2>
            {project.imgPath && <img
                src={project.imgPath}
                className="w-full rounded-md ring-1 ring-bg mb-1" />}
            <p className="italic">{project.description}</p>
            <div className="flex gap-2 ">
                {
                    project.technologies.map(name => (
                        <p
                            key={name}
                            className="px-3 py-2 rounded-sm bg-accent/10 dark:bg-bg-dark">
                            {name}</p>
                    ))
                }
            </div>
            {project.github &&
                <button className="px-4 py-2 text-sm bg-accent-dark dark:bg-accent text-white rounded">GitHub</button>
            }
            {project.link &&
                <button className="px-4 py-2 text-sm bg-accent-dark dark:bg-accent text-white rounded">Live</button>
            }

        </li>
    );
}
