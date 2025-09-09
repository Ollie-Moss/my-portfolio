import type { Project } from "../lib/types"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    const projects: Project[] = [
        {
            name: "Note Taking App",
            description: "Fullstack application, for taking notes.",
            technologies: ["React", "Express", "MongoDB", "Typescript"],
            imgPath: "notes-app.png",
            imgAlt: "Screenshot of note taking app."
        },
        {
            name: "Simplex - Active Development",
            description: "C++ framework for creating 2D games",
            technologies: ["OpenGL", "GLFW", "C++"],
            imgPath: ""
        }
    ]
    return (
        <section className="flex flex-col">
            <h1 className="text-lg font-bold">Projects</h1>
            <p className="mb-4">Some projects I have worked on.</p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    projects.map(project => (
                        <ProjectCard
                            key={project.name}
                            project={project} />
                    ))
                }</ul>
        </section>
    )

}

