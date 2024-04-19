import { FaCircle } from "react-icons/fa";

export const Notification = () => {
    return (
        <div
            className="flex hover:bg-gray-100 hover:cursor-pointer hover:duration-300 hover:transition-all items-center mb-2 px-4 py-2 space-x-4">
            <div>
                <FaCircle size={ 8 } color={ "#00A7E1" } />
            </div>
            <div>
                <h6 className="break-all h-full select-none text-gray-700 text-sm md:text-base">Brgy.
                    Linao has responded to you</h6>
                <p className="text-gray-400 text-xs">March 21, 204 at 10:24 PM</p>
            </div>
        </div>
    );
};