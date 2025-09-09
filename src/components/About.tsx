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
        status: "2nd Year"
    },
    languages: ["Typescript", "Javascript", "HTML", "CSS", "Python", "C#", "C++", "SQL"],
    technologies: ["React", "OpenGL", "Git"],
};`

    return (
        <section className="mt-8 flex flex-col gap-1">
            <h1 className="text-lg font-bold">About</h1>
            <p>A little bit about myself.</p>
            <CodeBlock code={aboutCode} />
        </section>
    )
}

