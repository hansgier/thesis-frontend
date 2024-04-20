import { Feedback, NotifContainer, Sidebar, TopBar } from "../../components/index.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const SharedLayout = () => {
    const location = useLocation();
    return (
        <main>
            <div className="fixed h-full left-0 top-0 w-full z-0"></div>
            <div
                className="-left-16 bg-Thesis-50 bg-opacity-10 blur-3xl fixed h-80 rounded-full top-20 w-52 md:bg-opacity-40"></div>
            <div
                className="-left-32 bg-opacity-10 bg-pink-300 blur-3xl fixed h-52 rounded-full top-96 w-52 md:bg-opacity-40 md:bg-pink-400"></div>
            <div
                className="-left-16 bg-opacity-10 bg-yellow-200 blur-3xl fixed h-52 rounded-full top-72 w-52 md:bg-opacity-40 md:bg-yellow-300"></div>
            <div
                className="-top-44 bg-opacity-50 bg-yellow-200 blur-3xl fixed h-52 right-60 rounded-full w-44"></div>
            <div
                className="-top-44 bg-opacity-100 bg-purple-200 blur-3xl fixed h-52 right-96 rounded-full w-44"></div>
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
                    className="absolute bg-transparent flex-1 h-[calc(100%-64px)] pt-0 md:pt-0 md:pb-0 pb-0 ml-0 top-16 z-0 md:ml-[272px] w-full md:w-[calc(100%-272px)]"
                >
                    <div className="h-full max-h-full overflow-y-scroll pt-6 px-0 md:px-6">
                        <Outlet />
                    </div>
                </motion.div>
            </AnimatePresence>
        </main>
    );
};
