import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavBarItemProps {
    title: string;
    to: string;
}

export const NavBarItem: FC<NavBarItemProps> = ({ title, to }) => {
    let navLinkStyles = ({ isActive }: { isActive: boolean }): string => {
        const s =
            "w-36 h-36 pr-4 pl-4 pt-2 pb-2 m-4 text-xl rounded-md hover:bg-tertiary transition-colors ";
        return `${isActive ? s + "bg-quaternary-100" : s}`;
    };

    return (
        <div>
            <NavLink to={to} className={navLinkStyles}>
                {title}
            </NavLink>
        </div>
    );
};
