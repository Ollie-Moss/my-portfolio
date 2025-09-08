import type { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    const iconSize: SizeProp = "lg";
    return (
        <footer className="py-8 w-full flex justify-center bg-gradient-to-t from-accent-dark/5 from-90% to-accent/0 to-100%">
            {/* */}
            <FontAwesomeIcon size={iconSize} icon={faEnvelope} />
            <FontAwesomeIcon size={iconSize} icon={faGithub} />
            <FontAwesomeIcon size={iconSize} icon={faLinkedin} />
        </footer>
    )

}
