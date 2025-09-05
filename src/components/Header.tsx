import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./ThemeContext";
import { useRef, type MouseEvent } from "react";
import { faSunSimple } from '../icons/faSunSimple'

export default function Header() {
    return (
        <header className="select-none transition-colors text-bg dark:text-white flex justify-between items-center px-6 py-4 lg:px-12  ">
            <a
                href="#"
                className="select-none font-extrabold text-accent-dark dark:text-accent text-2xl">
                {"<O/>"}
            </a>

            <ThemeToggle />
        </header>
    );
}

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    let rotation = useRef<number>(0);
    const iconRef = useRef<SVGSVGElement>(null);
    const iconMap = {
        'dark': faMoon,
        'light': faSunSimple
    }

    const toggle = (e: MouseEvent<SVGSVGElement>) => {
        rotation.current += 360;
        e.currentTarget.style.rotate = `${rotation.current}deg`
        e.currentTarget.ontransitionstart = (ev: TransitionEvent) => {
            if (ev.propertyName === 'rotate') {
                toggleTheme();
            }
        }

    }
    return (
        <FontAwesomeIcon
            ref={iconRef}
            className="text-lg transition-all"
            icon={iconMap[theme]}
            onClick={toggle}
        />
    )

}
