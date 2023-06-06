import { Outlet } from "react-router-dom";
import { NavBar } from "../navigation/NavBar";

export const Layout = () => {
    return (
        <div className="flex flex-col h-screen ">
            <NavBar />
            <div className="h-full bg-primary overflow-scroll overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    );
};
