import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavBarItemProps {
    title: string;
    to: string;
}

export const NavBarItem: FC<NavBarItemProps> = ({ title, to }) => {
    let navLinkStyles = ({ isActive }: { isActive: boolean }): string => {
        const s = "w-36 h-36 pr-4 pl-4 pt-4 pb-4 m-4 text-xl rounded-md  ";
        return `${
            isActive ? s + "bg-quaternary-100 hover:bg-quaternary-300" : s
        }`;
    };

    return (
        <div>
            <NavLink to={to} className={navLinkStyles}>
                {title}
            </NavLink>
        </div>
    );
};
