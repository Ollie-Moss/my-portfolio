import CopyEmailIcon from "./icons/CopyEmailIcon";
import GitHubIconLink from "./icons/GitHubIconLink";
import LinkedInIconLink from "./icons/LinkedInIconLink";

export default function Footer() {

    return (
        <footer className="py-8 w-full flex gap-2 justify-center bg-gradient-to-t from-accent-dark/5 from-90% to-accent/0 to-100%">
            <CopyEmailIcon />
            <GitHubIconLink />
            <LinkedInIconLink />
        </footer >
    )

}

