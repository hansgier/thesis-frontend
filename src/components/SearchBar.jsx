import { IoSearch } from "react-icons/io5";


export const SearchBar = () => {

    return (
        <form className="bg-gray-200 bg-opacity-60 px-4 rounded-lg w-40 sm:w-2/4 md:w-2/3">
            <div className="flex h-full items-center md:space-x-4">
                <IoSearch className="h-5 hidden md:block opacity-50 w-5" />
                <input
                    className="bg-transparent border-none flex focus:border-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 font-normal h-full hover:cursor-text placeholder-gray-500 placeholder-opacity-100 px-3 py-2 text-sm tracking-wide w-full"
                    placeholder="Search..." type="search" />
            </div>
        </form>
    );
};