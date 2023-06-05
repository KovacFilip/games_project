import { Outlet } from "react-router-dom";
import { NavBar } from "../navigation/NavBar";

export const Layout = () => {
    return (
        <div>
            <NavBar />
            <div className="h-full bg-primary">
                <Outlet />
            </div>
        </div>
    );
};
