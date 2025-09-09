import CopyEmailIcon from "./icons/CopyEmailIcon";
import GitHubIconLink from "./icons/GitHubIconLink";

export default function Welcome() {
    return (
        <div className="mt-12 flex flex-col w-full">
            <h1 className="text-xl " >Hi, I'm</h1>
            <h2 className="text-accent-dark dark:text-accent text-3xl font-bold">Ollie Moss</h2>
            <div className="w-full md:w-2/3">
                <p className="inline">Aspiring</p>
                <p className="inline text-accent-dark dark:text-accent"> <strong>software developer </strong></p>
                <p className="inline"> from NZ studying a Level 7 Bachelor of Information Technology at NMIT. I love problem solving and creating high-quality and effective results. Obsessed with improvement and learning new things. </p>
            </div>

            <div className="my-2 flex items-center gap-2">
                <CopyEmailIcon />
                <GitHubIconLink />
            </div>
        </div>
    )
}
