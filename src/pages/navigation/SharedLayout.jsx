import { Feedback, NotifContainer, Sidebar, TopBar } from "../../components/index.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const SharedLayout = () => {
    const location = useLocation();
    return (
        <main>
            <div className="bg-[#f1f4f9] fixed h-full left-0 top-0 w-full z-0"></div>
            <TopBar />
            <Sidebar />
            <NotifContainer />
            <Feedback />
            <AnimatePresence mode="wait">
                <motion.div
                    key={ location.pathname }
                    initial={ { opacity: 0, y: -30 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { type: "tween" } }
                    className="absolute bg-transparent flex-1 w-full md:w-[calc(100%-100px)] left-0 md:left-[100px] h-[calc(100%-68px)] ml-0 overflow-y-hidden top-[68px] z-0"
                >
                    <div className="h-full max-h-full overflow-y-scroll pt-4 px-0 md:px-6">
                        <Outlet />
                    </div>
                </motion.div>
            </AnimatePresence>
        </main>
    );
};
