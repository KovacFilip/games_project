import { Outlet } from "react-router-dom";
import { NavBar } from "../navigation/NavBar";

export const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <NavBar />
            <div className="h-full bg-primary">
                <Outlet />
            </div>
        </div>
    );
};
