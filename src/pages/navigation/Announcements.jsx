import { FilterSort } from "../../components/FilterSort.jsx";
import { announcements } from "../../utils/data-components.jsx";
import { LuBuilding } from "react-icons/lu";

export const Announcements = () => {
    return (
        <>
            <FilterSort />
            <div>
                <div
                    className="bg-transparent border-2 hover:cursor-pointer hover:duration-500 hover:ease-out hover:shadow-gray-300 hover:shadow-xl hover:transition-shadow mb-6 md:ml-0 md:mx-0 mx-4 rounded-xl"
                    data-v0-t="card">
                    <div className="flex flex-col items-center pb-4 pt-6 px-4 md:px-6">
                        <div className="flex w-full">
                            <div className="flex items-center justify-center">
                                { announcements.system.icon }
                            </div>
                            <div className="flex items-center pl-3">
                                <h3 className="font-semibold leading-none md:text-2xl select-none text-xl tracking-tight whitespace-normal">System
                                    Update</h3>
                            </div>
                            <div
                                className="flex flex-col items-center justify-center ml-auto space-x-2 text-gray-500 text-xs md:flex-row md:items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="h-4 w-4">
                                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                    <path d="M9 22v-4h6v4"></path>
                                    <path d="M8 6h.01"></path>
                                    <path d="M16 6h.01"></path>
                                    <path d="M12 6h.01"></path>
                                    <path d="M12 10h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 10h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 10h.01"></path>
                                    <path d="M8 14h.01"></path>
                                </svg>
                                <span className="hidden select-none md:block">City Government</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="pl-0 pt-1 select-none text-gray-400 text-xs md:pl-11 md:text-sm">Posted on May
                                21, 2023 12:00 PM</p>
                        </div>
                    </div>
                    <div className="mb-4 pb-6 px-4 md:px-6">
                        <p className="leading-relaxed md:text-base select-none text-gray-700 text-justify text-sm">The
                            Valley Road Expansion project will widen the existing two-lane road to four lanes over a
                            5-mile stretch between Main Street and Interstate 95. Intersection improvements with turn
                            lanes, roundabouts, and traffic signals will be added. Drainage, curbs, sidewalks, and paved
                            shoulders will also be constructed. The $22 million project is funded by state and federal
                            grants, with construction from 2025 to 2027. Once complete, Valley Road will have increased
                            capacity and safety enhancements for all transportation modes.</p>
                    </div>
                </div>
                <div
                    className="bg-transparent border-2 hover:cursor-pointer hover:duration-500 hover:ease-out hover:shadow-gray-300 hover:shadow-xl hover:transition-shadow mb-6 md:ml-0 md:mx-0 mx-4 rounded-xl"
                    data-v0-t="card">
                    <div className="flex flex-col items-center pb-4 pt-6 px-4 md:px-6">
                        <div className="flex w-full">
                            <div className="flex items-center justify-center">
                                { announcements.basic.icon }
                            </div>
                            <div className="flex items-center pl-3">
                                <h3 className="font-semibold leading-none md:text-2xl select-none text-xl tracking-tight whitespace-normal">System
                                    Update</h3>
                            </div>
                            <div
                                className="flex flex-col items-center justify-center ml-auto space-x-2 text-gray-500 text-xs md:flex-row md:items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="h-4 w-4">
                                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                    <path d="M9 22v-4h6v4"></path>
                                    <path d="M8 6h.01"></path>
                                    <path d="M16 6h.01"></path>
                                    <path d="M12 6h.01"></path>
                                    <path d="M12 10h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 10h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 10h.01"></path>
                                    <path d="M8 14h.01"></path>
                                </svg>
                                <span className="hidden select-none md:block">City Government</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="pl-0 pt-1 select-none text-gray-400 text-xs md:pl-11 md:text-sm">Posted on May
                                21, 2023 12:00 PM</p>
                        </div>
                    </div>
                    <div className="mb-4 pb-6 px-4 md:px-6">
                        <p className="leading-relaxed md:text-base select-none text-gray-700 text-justify text-sm">The
                            Valley Road Expansion project will widen the existing two-lane road to four lanes over a
                            5-mile stretch between Main Street and Interstate 95. Intersection improvements with turn
                            lanes, roundabouts, and traffic signals will be added. Drainage, curbs, sidewalks, and paved
                            shoulders will also be constructed. The $22 million project is funded by state and federal
                            grants, with construction from 2025 to 2027. Once complete, Valley Road will have increased
                            capacity and safety enhancements for all transportation modes.</p>
                    </div>
                </div>
                <div
                    className="bg-transparent border-2 hover:cursor-pointer hover:duration-500 hover:ease-out hover:shadow-gray-300 hover:shadow-xl hover:transition-shadow mb-6 md:ml-0 md:mx-0 mx-4 rounded-xl"
                    data-v0-t="card">
                    <div className="flex flex-col items-center pb-4 pt-6 px-4 md:px-6">
                        <div className="flex w-full">
                            <div className="flex items-center justify-center">
                                { announcements.basic.icon }
                            </div>
                            <div className="flex items-center pl-3">
                                <h3 className="font-semibold leading-none md:text-2xl select-none text-xl tracking-tight whitespace-normal">System
                                    Update</h3>
                            </div>
                            {/*----------------Posted by----------------*/ }
                            <div
                                className="flex flex-col items-center justify-center ml-auto space-x-2 text-gray-500 text-xs md:flex-row md:items-center">
                                <LuBuilding className="h-4 w-4" color={ "5c5c5c" } />
                                <span className="hidden select-none md:block">City Government</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="pl-0 pt-1 select-none text-gray-400 text-xs md:pl-11 md:text-sm">Posted on May
                                21, 2023 12:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};