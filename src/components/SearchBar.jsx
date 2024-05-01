export const SearchBar = () => {

    return (
        <form
            className="bg-white border border-white hover:border hover:border-[#96d7cf] hover:duration-200 hover:transition-all px-2 rounded-lg w-40 sm:w-2/4 md:w-2/3">
            <div className="flex h-full items-center md:space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="h-5 hidden md:block opacity-50 w-5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                    className="bg-transparent border-none flex focus:border-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 font-normal h-full hover:cursor-text placeholder-opacity-100 placeholder-gray-400 px-1 md:px-3 py-2 text-sm tracking-wide w-full placeholder:text-xs md:placeholder:text-sm"
                    placeholder="Search" type="search" />
            </div>
        </form>
    );
};