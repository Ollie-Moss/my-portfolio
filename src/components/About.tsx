import CodeBlock from "./CodeBlock"

export default function About() {
    const aboutCode = `const aboutMe = {
    name: "Ollie Moss",
    email: "olliemoss321@gmail.com",
    occupation: "Student",
    insitution: "NMIT (Nelson Marlborough Institute of Technology)",
    editor: "neovim",
    qualification: {
        name: "Bachelor of Information Technology",
        level: 7,
        status: "3nd Year"
    },
    languages: ["Typescript", "Javascript", "HTML", "CSS", "Python", "C#", "C++", "SQL"],
    technologies: ["React", "Unity", "OpenGL", "Git"],
};`

    return (
        <section className="flex flex-col">
            <h1 className="text-lg font-bold">About</h1>
            <p className="mb-4">A little bit about myself.</p>
            <CodeBlock code={aboutCode} />
        </section>
    )
}

