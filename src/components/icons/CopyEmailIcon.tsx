import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { email, iconSize } from "../../lib/globals";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CopyEmailIcon() {
    const [copiedTextVisible, setCopiedTextVisible] = useState<boolean>(false);
    const currentTimeout = useRef<number>(null);
    const copyEmail = () => {
        setCopiedTextVisible(true);
        if (currentTimeout.current != null) clearTimeout(currentTimeout.current);
        currentTimeout.current = setTimeout(() => {
            setCopiedTextVisible(false);
        }, 1000);

        navigator.clipboard.writeText(email);
    }
    return (
        <div>
            <button
                title={email}
                onClick={copyEmail}>
                <FontAwesomeIcon
                    size={iconSize}
                    icon={faEnvelope}
                    className="hover:text-accent"
                />
            </button>
            <div
                style={{ gridTemplateColumns: copiedTextVisible ? "1fr" : "0fr" }}
                className="overflow-hidden transition-[grid-template-columns] inline-grid ">
                <div className="min-w-0 overflow-hidden">
                    <p
                        className="pl-1">
                        Copied!
                    </p>
                </div>
            </div>
        </div>
    )

}
