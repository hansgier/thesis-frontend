import { motion } from "framer-motion";

export const Modal = ({ content }) => {
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            onClick={ (e) => e.stopPropagation() }
            className="bg-black bg-opacity-20 fixed flex h-full items-center justify-center left-0 top-0 w-full z-50">
            { content }
        </motion.div>
    );
};