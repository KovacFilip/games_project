import { FC } from "react";
import { NavBarItem } from "./NavBarItem";

export const NavBar: FC = () => {
    return (
        <div className="flex w-100 bg-secondary h-24 pl-12 items-center">
            <NavBarItem title="Home" to="/" />
            <NavBarItem title="About" to="/about" />
        </div>
    );
};
