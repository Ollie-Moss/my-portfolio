import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./ThemeContext";

export default function Header() {
    const { toggleTheme } = useTheme();
    return (
        <header className="select-none transition-colors text-bg dark:text-white flex justify-between items-center px-6 py-4 lg:px-12  ">
            <a
                href="#"
                className="select-none font-bold text-accent text-3xl">
                {"<O/>"}
            </a>
            <FontAwesomeIcon
                className="text-lg"
                icon={faMoon}
                onClick={() => toggleTheme()}
            />
        </header>
    );
}
