import { useDispatch, useSelector } from "react-redux";
import { toggleFeedback } from "../app/features/user/userSlice.js";
import { useEffect } from "react";
import { Modal } from "./Modal.jsx";
import { AnimatePresence, motion } from "framer-motion";

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
        <>
            <AnimatePresence mode="wait">
                { isFeedbackOpen && (
                    <Modal content={
                        <motion.form
                            id="feedback-container"
                            initial={ { scale: 0 } }
                            animate={ { scale: 1, x: 0, y: 0 } }
                            exit={ { scale: 0 } }
                            role="dialog"
                            data-state="open"
                            className="mx-auto fixed z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-md rounded-lg bg-white p-6 shadow-lg pointer-events-auto"
                            data-id="5" tabIndex="-1">
                            <div className="flex flex-col space-y-1.5 text-center sm:text-left" data-id="6">
                                <h2 id="radix-:rj:"
                                    className="whitespace-nowrap text-lg font-semibold leading-none tracking-tight select-none"
                                    data-id="7">Send Feedback</h2>
                            </div>
                            <div className="space-y-4" data-id="8">
                                <input placeholder="Enter title"
                                       className="focus:border-Thesis-200 focus:outline-none focus:ring-0 focus:ring-offset-0 px-3 py-2 rounded-md text-sm w-full border" />
                                <textarea
                                    className="border disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-Thesis-200 focus:outline-none focus:ring-0 focus:ring-offset-0 px-3 py-2 rounded-md text-sm w-full"
                                    placeholder="Enter your feedback message..." rows="4" data-id="9"></textarea>
                                <div data-id="10">
                                    <label
                                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-700 select-none"
                                        htmlFor="file-upload" data-id="11">
                                        Attach a file (optional)
                                    </label>
                                    <div
                                        className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                                        data-id="12">
                                        <div className="space-y-1 text-center" data-id="13">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="mx-auto h-12 w-12 text-gray-400" data-id="14">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="17 8 12 3 7 8"></polyline>
                                                <line x1="12" x2="12" y1="3" y2="15"></line>
                                            </svg>
                                            <div className="flex text-sm text-gray-600" data-id="15">
                                                <label htmlFor="file-upload"
                                                       className="bg-white cursor-pointer focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0 focus:ring-0 focus:ring-offset-0 font-medium hover:text-indigo-500 relative rounded-md text-center text-indigo-600 w-full"
                                                       data-id="16"><span
                                                    data-id="17 select-none">Upload an image</span>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                                                        id="file-upload" data-id="18" type="file" name="file-upload" />
                                                </label>
                                            </div>
                                            <p className="text-xs text-gray-500 select-none" data-id="20">PNG, JPG up to
                                                10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*-----------------------Buttons-----------------------*/ }
                            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" data-id="21">
                                <button
                                    onClick={ () => dispatch(toggleFeedback()) }
                                    className="bg-background border border-input disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-10 hover:bg-pink-50 hover:border-pink-200 inline-flex items-center justify-center px-4 py-2 rounded-3xl text-sm transition-colors whitespace-nowrap"
                                    data-id="22" type="button">
                                    Cancel
                                </button>
                                <button
                                    className="bg-Thesis-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-10 inline-flex items-center justify-center mb-2 px-4 py-2 rounded-3xl text-sm text-white whitespace-nowrap md:mb-0 hover:bg-opacity-90 transition-all duration-200"
                                    data-id="23" type="submit">Submit
                                </button>
                            </div>
                            {/*-----------------------Close button-----------------------*/ }
                            <button type="button"
                                    onClick={ () => dispatch(toggleFeedback()) }
                                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-4 w-4">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </motion.form>
                    } />
                ) }
            </AnimatePresence>
        </>
    );
};