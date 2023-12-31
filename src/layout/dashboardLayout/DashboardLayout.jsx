import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DashboardLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="bg-[var(--body)] transition-colors ease-in-out w-full min-h-screen">
            <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <DndProvider backend={HTML5Backend}>
                <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all text-[var(--primary-text)]">
                    <Outlet />
                </div>
            </DndProvider>
        </div>
    );
};

export default DashboardLayout;