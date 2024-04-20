import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeedback } from "../app/features/user/userSlice.js";
import { useEffect } from "react";

export const Feedback = () => {
    const { isFeedbackOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            const feedbackElement = document.getElementById("feedback-container");
            const feedbackButton = document.getElementById("feedback-button");
            if (feedbackElement && !feedbackElement.contains(event.target) && !feedbackButton.contains(event.target)) {
                dispatch(toggleFeedback());
            }
        };

        if (isFeedbackOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isFeedbackOpen, dispatch]);

    return (
        <AnimatePresence>
            { isFeedbackOpen && (
                <motion.div
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    exit={ { opacity: 0 } }
                    transition={ { duration: 0.05 } }
                    className="bg-black bg-opacity-10 fixed flex h-full items-center justify-center left-0 top-0 w-full z-50">
                    <motion.div
                        id="feedback-container"
                        initial={ { opacity: 0, scale: 0 } }
                        animate={ { opacity: 1, scale: 1 } }
                        exit={ { opacity: 0, scale: 0 } }
                        transition={ { type: "tween" } }
                        onClick={ (e) => e.stopPropagation() }
                        className="backdrop-blur-3xl backdrop-brightness-150 bg-transparent mx-4 p-4 rounded-xl shadow-xl space-y-4 w-full md:mx-0 md:p-8 md:space-y-7 md:w-3/4 lg:w-2/4">
                        <div>
                            <h2 className="font-bold text-xl md:text-3xl">Feedback</h2>
                            <h6 className="text-gray-600 text-sm md:text-base">We'd love to hear your thoughts</h6>
                        </div>
                        <div className="h-[428px] overflow-y-hidden">
                            <form className="min-h-full space-y-4">
                                <div className="flex flex-col">
                                    <label
                                        className="font-semibold text-gray-800 text-sm uppercase md:text-base">Title</label>
                                    <input
                                        className="bg-transparent border-b-2 border-l-0 border-r-0 border-t-0 focus:border-Thesis-300 focus:outline-none focus:ring-0 focus:ring-offset-0 pb-1 pt-0 px-2 text-sm md:text-base"
                                        name="feedback-title" type="text" required={ true }
                                        placeholder="Enter title" />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        className="font-semibold text-gray-800 text-sm uppercase md:text-base">Message</label>
                                    <textarea
                                        className="bg-transparent border-2 focus:border-Thesis-300 focus:outline-none focus:ring-0 focus:ring-offset-0 h-52 mt-2 p-2 rounded text-sm md:text-base"
                                        placeholder="Write a message..."></textarea>
                                </div>
                                <div
                                    className="bg-transparent border-2 border-black border-dashed border-opacity-25 flex h-24 hover:cursor-pointer items-center justify-center rounded w-full">
                                    <label
                                        className="hover:cursor-pointer mx-3 text-Thesis-200 text-center text-opacity-60 text-sm md:mx-0 md:text-base">Click
                                        to upload image(s)</label>
                                </div>
                            </form>
                        </div>
                        <div className="flex place-content-end space-x-4">
                            <button
                                onClick={ () => dispatch(toggleFeedback()) }
                                className="bg-white border-2 border-Thesis-200 hover:bg-blue-50 hover:duration-300 hover:transition-all px-4 py-2 rounded-full text-sm md:text-base">Cancel
                            </button>
                            <button
                                className="bg-Thesis-200 hover:bg-Thesis-200 hover:bg-opacity-95 px-4 py-2 rounded-full text-sm text-white md:text-base"
                                type="submit">Submit
                            </button>
                        </div>
                    </motion.div>

                </motion.div>
            ) }
        </AnimatePresence>
    );
};