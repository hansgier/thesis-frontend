import { motion } from "framer-motion";

export const Popup = ({ content }) => {
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            id="navProf-container"
            className={ `absolute bg-white border flex flex-col ${ mode === "desktop" ? "-right-[216px] bottom-0" +
                " w-[200px]" : "right-0 bottom-16 w-full" } p-2 +
            ' rounded-lg shadow-md space-y-2 ` }>
            { content }
        </motion.div>
    );
};