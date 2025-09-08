import type { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Welcome() {
    const iconSize: SizeProp = "lg";
    return (
        <div className="mt-12 flex flex-col w-full">
            <h1 className="text-xl " >Hi, I'm</h1>
            <h2 className="text-accent-dark dark:text-accent text-3xl font-bold">Ollie Moss</h2>
            <div className="w-full md:w-2/3">
                <p className="inline">Aspiring</p>
                <p className="inline text-accent-dark dark:text-accent"> <strong>software developer </strong></p>
                <p className="inline"> from NZ studying a Level 7 Bachelor of Information Technology at NMIT. I love problem solving and creating high-quality and effective results. Obsessed with improvement and learning new things. </p>
            </div>
            <div className="flex gap-2 items-center my-2"><p>Checkout out</p>
                <button className="px-4 py-2 text-sm bg-accent-dark dark:bg-accent text-white rounded">My Projects</button>

            </div>

            <div>
                <FontAwesomeIcon size={iconSize} icon={faEnvelope} />
                <FontAwesomeIcon size={iconSize} icon={faGithub} />
            </div>
        </div>
    )

}
