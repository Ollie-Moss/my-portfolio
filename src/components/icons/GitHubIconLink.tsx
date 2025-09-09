import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconSize } from "../../lib/globals";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitHubIconLink() {
    return (
        <a target="_blank" href="https://github.com/Ollie-Moss">
            <FontAwesomeIcon
                size={iconSize}
                icon={faGithub}
                className="hover:text-accent"
            />
        </a>
    )
}
