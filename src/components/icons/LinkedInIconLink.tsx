import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconSize } from "../../lib/globals";

export default function LinkedInIconLink() {
    return (

        <a target="_blank" href="https://www.linkedin.com/in/ollie-moss-530443278/">
            <FontAwesomeIcon
                size={iconSize}
                icon={faLinkedin}
                className="hover:text-accent"
            />

        </a>
    )

}
