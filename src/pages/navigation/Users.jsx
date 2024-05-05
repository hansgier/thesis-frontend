import { Button, Popover, Select } from "antd";
import { IoFilter } from "react-icons/io5";
import { AddNewUser } from "../../components/index.jsx";

export const Users = () => {

    return (
        <div className="h-full max-h-full overflow-y-scroll pt-4 px-4 md:px-6">
            <div className="flex w-full">
                <div className="flex flex-1 items-center space-x-2">
                    <h1 className="font-bold select-none text-base md:text-xl">All Users</h1>
                    <h4 className="select-none text-gray-500 text-xs md:text-sm">|&nbsp; 127</h4>
                </div>
                <div className="flex space-x-2 items-center">
                    <div
                        className="flex focus:outline-none font-medium h-full hover:bg-gray-100 items-center justify-center p-2 relative rounded-md text-center text-gray-600 text-sm">
                        {/*Filter Options*/ }
                        <Popover trigger="click" placement="bottom" content={
                            <div
                                className="bg-white flex flex-col p-0 w-[200px]">
                                <span className="font-bold text-left text-xs w-full mb-2">ROLE</span>
                                <Select allowClear placeholder="Filter by role" options={ [
                                    { value: "admin", label: "Admin" },
                                    { value: "assistant_admin", label: "Assistant Admin" },
                                    { value: "barangay", label: "Barangay" },
                                    { value: "resident", label: "Resident" }
                                ] } />
                                <span className="font-bold mt-4 text-left text-xs w-full mb-2">BARANGAY</span>
                                <Select allowClear placeholder="Filter by barangay" />
                            </div>
                        }>
                            <Button icon={ <IoFilter /> }>
                                <span className="hidden md:hidden">Filters</span>
                            </Button>
                        </Popover>

                    </div>
                    {/*Add New User*/ }
                    <AddNewUser />
                </div>
            </div>
            <div className="mt-4">
                <div className="h-full mb-6 overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="rtl:text-right text-gray-600 text-left text-sm w-full">
                        <thead className="bg-gray-100 dark:text-gray-400 text-gray-700 text-xs uppercase">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox"
                                           className="bg-gray-100 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 h-4 rounded text-blue-600 w-4" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="h-full pl-0 pr-6 py-3 select-none text-gray-800">
                                <div className="flex hover:cursor-pointer items-center">
                                    <p>Name</p>
                                    <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                         className="ml-1 w-3">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                           strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M8 20.695l7.997-11.39L24 20.695z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 select-none text-center text-gray-800">Role</th>
                            <th scope="col" className="px-6 py-3 select-none text-gray-800">barangay</th>
                            <th scope="col" className="px-6 py-3 select-none text-gray-800">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white border-b text-xs md:text-sm">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                           className="bg-gray-100 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 h-4 rounded text-blue-600 w-4" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="dark:text-white flex items-center pl-0 pr-6 py-4 text-gray-900 whitespace-nowrap">
                                <div>
                                    <div className="font-semibold select-none text-base text-gray-900">Neil Sims</div>
                                    <div
                                        className="font-normal select-none text-gray-500 truncate w-72">gierhansclement@gmailc.om
                                    </div>
                                </div>
                            </th>
                            <td className="px-0 py-4 text-center"><span
                                className="bg-blue-100 font-medium px-4 py-1 rounded-xl select-none">Resident</span>
                            </td>
                            <td className="px-6 py-4 select-none">Linao</td>
                            <td className="px-6 py-4 space-x-3">
                                <div className="flex">
                                    <button type="button" className="mr-3">
                                        <svg viewBox="0 0 1024 1024" className="icon w-5" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z"
                                                    fill="#3688FF"></path>
                                                <path
                                                    d="M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z"
                                                    fill="#5F6379"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button type="button">
                                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                             className="w-5">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fill="#d60000"
                                                      d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b text-xs md:text-sm">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                           className="bg-gray-100 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 h-4 rounded text-blue-600 w-4" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="dark:text-white flex items-center pl-0 pr-6 py-4 text-gray-900 whitespace-nowrap">
                                <div>
                                    <div className="font-semibold select-none text-base text-gray-900">Neil Sims</div>
                                    <div
                                        className="font-normal select-none text-gray-500 truncate w-72">gierhansclement@gmailc.om
                                    </div>
                                </div>
                            </th>
                            <td className="px-0 py-4 text-center"><span
                                className="bg-pink-200 font-medium px-4 py-1 rounded-xl select-none">Admin</span></td>
                            <td className="px-6 py-4 select-none">Linao</td>
                            <td className="px-6 py-4 space-x-3">
                                <div className="flex">
                                    <button type="button" className="mr-3">
                                        <svg viewBox="0 0 1024 1024" className="icon w-5" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z"
                                                    fill="#3688FF"></path>
                                                <path
                                                    d="M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z"
                                                    fill="#5F6379"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button type="button">
                                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                             className="w-5">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fill="#d60000"
                                                      d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b text-xs md:text-sm">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                           className="bg-gray-100 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 h-4 rounded text-blue-600 w-4" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="dark:text-white flex items-center pl-0 pr-6 py-4 text-gray-900 whitespace-nowrap">
                                <div>
                                    <div className="font-semibold select-none text-base text-gray-900">Neil Sims</div>
                                    <div
                                        className="font-normal select-none text-gray-500 truncate w-72">gierhansclement@gmailc.om
                                    </div>
                                </div>
                            </th>
                            <td className="px-0 py-4 text-center"><span
                                className="bg-yellow-100 font-medium px-4 py-1 rounded-xl select-none">Barangay</span>
                            </td>
                            <td className="px-6 py-4 select-none">Linao</td>
                            <td className="px-6 py-4 space-x-3">
                                <div className="flex">
                                    <button type="button" className="mr-3">
                                        <svg viewBox="0 0 1024 1024" className="icon w-5" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z"
                                                    fill="#3688FF"></path>
                                                <path
                                                    d="M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z"
                                                    fill="#5F6379"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button type="button">
                                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                             className="w-5">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fill="#d60000"
                                                      d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b text-xs md:text-sm">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                           className="bg-gray-100 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 h-4 rounded text-blue-600 w-4" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="dark:text-white flex items-center pl-0 pr-6 py-4 text-gray-900 whitespace-nowrap">
                                <div>
                                    <div className="font-semibold select-none text-base text-gray-900">Neil Sims</div>
                                    <div
                                        className="font-normal select-none text-gray-500 truncate w-72">gierhansclement@gmailc.om
                                    </div>
                                </div>
                            </th>
                            <td className="px-0 py-4 text-center"><span
                                className="bg-green-100 font-medium px-4 py-1 rounded-xl select-none">Assistant Admin</span>
                            </td>
                            <td className="px-6 py-4 select-none">Linao</td>
                            <td className="px-6 py-4 space-x-3">
                                <div className="flex">
                                    <button type="button" className="mr-3">
                                        <svg viewBox="0 0 1024 1024" className="icon w-5" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z"
                                                    fill="#3688FF"></path>
                                                <path
                                                    d="M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z"
                                                    fill="#5F6379"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button type="button">
                                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                             className="w-5">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fill="#d60000"
                                                      d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex">
                    <div className="flex-1 items-center space-x-3">
                        <button className="h-7 rounded select-none text-xs w-7 md:h-10 md:text-sm md:w-10">Prev</button>
                        <button
                            className="border-2 border-Thesis-200 font-bold h-7 rounded select-none text-xs w-7 md:h-10 md:text-sm md:w-10">1
                        </button>
                        <button className="h-7 rounded select-none text-xs w-7 md:h-10 md:text-sm md:w-10">Next</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="select-none text-gray-500 text-xs md:text-sm">Showing 10 of 127</p>
                    </div>
                </div>
            </div>
        </div>
    );
};