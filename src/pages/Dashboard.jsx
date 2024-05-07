import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/project" || location.pathname !== "/singleproject") {
            sessionStorage.setItem("scrollPosition", "0");
        }
    }, []);

    return (
        <>
            <div className="h-full max-h-full overflow-y-scroll pt-4 px-0 md:px-6">
                <div
                    className="flex-col gap-3 grid grid-cols-2 mb-2 mx-4 md:grid-cols-2 md:mx-0 lg:flex lg:flex-row lg:w-full">
                    <div
                        className="bg-gradient-to-bl from-Thesis-200 gap-1 grid hover:duration-300 hover:shadow-xl hover:transition-shadow p-4 rounded-lg select-none shadow-md to-pink-400 lg:flex-1">
                        <p className="font-semibold mb-4 text-Winter-700 text-sm text-white">Total Projects</p>
                        <div className="flex">
                            <h2 className="font-extrabold mr-14 text-3xl text-Winter-700 text-white">12,345</h2>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br border-b-2 border-green-700 border-l-2 border-none border-r-2 border-t-8 from-green-900 gap-1 grid hover:duration-300 hover:shadow-xl hover:transition-shadow p-4 rounded-lg select-none shadow-md to-yellow-200 lg:flex-1">
                        <p className="font-semibold mb-4 text-Winter-700 text-sm text-white">Completed</p>
                        <div className="flex justify-between">
                            <h2 className="font-bold text-white text-xl md:text-2xl">12,345</h2>
                            <div className="flex">
                                <p className="flex items-center text-Winter-800 text-sm text-white tracking-wide md:text-base">+0.7%</p>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     width="24" className="text-green-700">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br border-b-2 border-l-2 border-none border-r-2 border-t-8 border-yellow-700 from-yellow-800 gap-1 grid hover:duration-300 hover:shadow-xl hover:transition-shadow p-4 rounded-lg select-none shadow-md to-red-300 lg:flex-1">
                        <p className="font-semibold mb-4 text-Winter-700 text-sm text-white">On hold</p>
                        <div className="flex justify-between">
                            <h2 className="font-bold text-white text-xl md:text-2xl">12,345</h2>
                            <div className="flex">
                                <p className="flex items-center text-Winter-800 text-sm text-white tracking-wide md:text-base">+0.7%</p>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     width="24" className="text-yellow-700">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br border-b-2 border-l-2 border-none border-r-2 border-red-700 border-t-8 from-red-600 gap-1 grid hover:duration-300 hover:shadow-xl hover:transition-shadow p-4 rounded-lg select-none shadow-md to-pink-400 lg:flex-1">
                        <p className="font-semibold mb-4 text-Winter-700 text-sm text-white">Cancelled</p>
                        <div className="flex justify-between">
                            <h2 className="font-bold text-white text-xl md:text-2xl">12,345</h2>
                            <div className="flex">
                                <p className="flex items-center text-Winter-800 text-sm text-white tracking-wide md:text-base">+0.7%</p>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     width="24" className="text-red-700">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap-6 grid grid-cols-1 min-h-[calc(100vh_-_theme(spacing.16))] md:gap-4">
                    <div className="md:mx-0 mx-4 rounded-xl">
                        <div className="flex-col gap-1 grid px-0 py-4 select-none space-y-1.5 md:pl-0">
                            <h3 className="font-bold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Featured
                                                                                                                        Projects</h3>
                            <p className="font-normal text-gray-600 text-xs whitespace-normal md:text-sm">Projects
                                                                                                          that
                                                                                                          need
                                                                                                          your
                                                                                                          attention.</p>
                        </div>
                        <div className="p-0">
                            <ul className="gap-2 grid grid-cols-1 sm:grid-cols-1 md:gap-5 md:grid-cols-3 lg:grid-cols-3">
                                <li>
                                    <div
                                        className="bg-white border-b border-green-400 border-t flex items-center p-2 rounded-lg md:flex md:flex-col md:gap-4 md:pb-2 md:pt-1.5 md:px-1.5 md:rounded-3xl">
                                        <div className="relative md:h-64 md:w-full">
                                            <img
                                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDV8fGNvbW11bml0eXxlbnwwfHx8fDE3MTIxMDczNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                                className="absolute bg-cover h-12 rounded-lg w-12 md:h-full md:rounded-3xl md:w-full"
                                                alt="Project" />
                                        </div>
                                        <div className="gap-1 grid h-full ml-2 md:ml-0">
                                            <p className="font-semibold mx-2 select-none text-sm md:text-base">Community
                                                                                                               Garden</p>
                                            <p className="mx-2 select-none text-gray-600 text-xs md:text-gray-600 md:text-sm">
                                                A project to create a beautiful community garden for everyone to
                                                enjoy. </p>
                                        </div>
                                        <a href=""
                                           className="border-2 font-bold hidden p-3 rounded-full text-center text-xs w-full md:block hover:border-[#10c9aa] hover:text-[#10c9aa] transition-all duration-200">View
                                                                                                                                                                                                              Project</a>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="bg-white border-b border-pink-400 border-t flex items-center p-2 rounded-lg md:flex md:flex-col md:gap-4 md:pb-2 md:pt-1.5 md:px-1.5 md:rounded-3xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDV8fGNvbW11bml0eXxlbnwwfHx8fDE3MTIxMDczNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                            className="h-12 rounded-lg w-12 md:h-64 md:rounded-3xl md:w-full"
                                            alt="Project" />
                                        <div className="gap-1 grid h-full ml-2 md:ml-0">
                                            <p className="font-semibold mx-2 select-none text-sm md:text-base">Community
                                                                                                               Garden</p>
                                            <p className="mx-2 select-none text-gray-600 text-xs md:text-gray-600 md:text-sm">
                                                A project to create a beautiful community garden for everyone to
                                                enjoy. </p>
                                        </div>
                                        <a href=""
                                           className="border-2 font-bold hidden p-3 rounded-full text-center text-xs w-full md:block hover:border-[#10c9aa] hover:text-[#10c9aa] transition-all duration-200">View
                                                                                                                                                                                                              Project</a>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="bg-white border-b border-purple-400 border-t flex items-center p-2 rounded-lg md:flex md:flex-col md:gap-4 md:pb-2 md:pt-1.5 md:px-1.5 md:rounded-3xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDV8fGNvbW11bml0eXxlbnwwfHx8fDE3MTIxMDczNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                            className="h-12 rounded-lg w-12 md:h-64 md:rounded-3xl md:w-full"
                                            alt="Project" />
                                        <div className="gap-1 grid h-full ml-2 md:ml-0">
                                            <p className="font-semibold mx-2 select-none text-sm md:text-base">Community
                                                                                                               Garden</p>
                                            <p className="mx-2 select-none text-gray-600 text-xs md:text-gray-600 md:text-sm">
                                                A project to create a beautiful community garden for everyone to
                                                enjoy. </p>
                                        </div>
                                        <a href=""
                                           className="border-2 font-bold hidden p-3 rounded-full text-center text-xs w-full md:block hover:border-[#10c9aa] hover:text-[#10c9aa] transition-all duration-200">View
                                                                                                                                                                                                              Project</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:gap-4 lg:gap-8 lg:grid-cols-2">
                        <div className="md:mx-0 mx-4 rounded-xl" data-v0-t="card">
                            <div className="flex-col gap-1 grid pr-6 py-6 space-y-1.5">
                                <h3 className="font-bold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Upcoming
                                                                                                                            Projects</h3>
                                <p className="font-normal text-gray-600 text-xs md:text-sm">Get ready for these
                                                                                            exciting
                                                                                            community events.</p>
                            </div>
                            <div className="bg-white border border-[#b4d8f2] p-0 rounded-3xl">
                                <ul className="divide-y">
                                    <li className="p-4">
                                        <div
                                            className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1468359601543-843bfaef291a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDZ8fG11c2ljJTIwcGFya3xlbnwwfHx8fDE3MTIxMDc0ODV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                                width="80" height="80"
                                                className="rounded-lg w-10 md:w-20 aspect-[80/80] object-cover"
                                                alt="Event" />
                                            <div className="grid gap-1">
                                                <p className="font-semibold text-sm whitespace-normal md:text-base">Music
                                                                                                                    in
                                                                                                                    the
                                                                                                                    Park</p>
                                                <p className="text-gray-600 text-xs truncate md:text-sm">Enjoy live
                                                                                                         music in
                                                                                                         our
                                                                                                         beautiful park.
                                                                                                         Date: July
                                                                                                         15thEnjoy live
                                                                                                         music in our
                                                                                                         beautiful
                                                                                                         park.
                                                                                                         Date: July
                                                                                                         15thEnjoy live
                                                                                                         music in our
                                                                                                         beautiful park.
                                                                                                         Date: July
                                                                                                         15thEnjoy live
                                                                                                         music in our
                                                                                                         beautiful park.
                                                                                                         Date: July
                                                                                                         15thEnjoy
                                                                                                         live
                                                                                                         music in our
                                                                                                         beautiful park.
                                                                                                         Date: July
                                                                                                         15thEnjoy live
                                                                                                         music in our
                                                                                                         beautiful park.
                                                                                                         Date: July
                                                                                                         15th</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-4">
                                        <div
                                            className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1590874023110-f82d4c63b599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGNsZWFuJTIwdXB8ZW58MHx8fHwxNzEyMTA3NTAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                                                width="80" height="80"
                                                className="rounded-lg w-10 md:w-20 aspect-[80/80] object-cover"
                                                alt="Event"
                                            />
                                            <div className="grid gap-1">
                                                <p className="font-semibold text-sm whitespace-normal md:text-base">Community
                                                                                                                    Cleanup</p>
                                                <p className="text-gray-600 text-xs truncate md:text-sm">
                                                    Let's work together to keep our beaches clean. Date: July 20th </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-4">
                                        <div
                                            className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDZ8fG1vdmllJTIwbmlnaHR8ZW58MHx8fHwxNzEyMTA3NTE1fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                                width="80" height="80"
                                                className="rounded-lg w-10 md:w-20 aspect-[80/80] object-cover"
                                                alt="Event"
                                            />
                                            <div className="grid gap-1">
                                                <p className="font-semibold text-sm whitespace-normal md:text-base">Movie
                                                                                                                    Night</p>
                                                <p className="text-gray-600 text-xs truncate md:text-sm">
                                                    Family-friendly movie under the stars. Date: July 25th </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:mx-0 mx-4 rounded-xl" data-v0-t="card">
                            <div className="flex-col gap-1 grid pr-6 py-6 select-none space-y-1.5">
                                <h3 className="font-bold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Recent
                                                                                                                            Activities</h3>
                                <p className="font-normal text-gray-600 text-xs md:text-sm">See what's happening in
                                                                                            your
                                                                                            community.</p>
                            </div>
                            <div className="p-0">
                                <ul className="bg-white border border-[#d2b4f2] divide-y rounded-3xl">
                                    <li className="p-4">
                                        <div
                                            className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1589938219129-3bff434f8c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fHJpdmVyJTIwcHJvamVjdHxlbnwwfHx8fDE3MTIxMDc3MDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                                width="40" height="40" alt="Avatar"
                                                className="rounded-md w-10 md:w-20 aspect-[40/40] object-cover" />
                                            <div className="grid gap-1">
                                                <p className="font-medium text-sm whitespace-normal md:text-base">Bgry.
                                                                                                                  Linao
                                                                                                                  posted
                                                                                                                  a new
                                                                                                                  project</p>
                                                <p className="text-gray-400 text-xs md:text-sm">2m ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-4">
                                        <div
                                            className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1569925457326-59b1c3611227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fGJyaWRnZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3MTIxMDc3MjR8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                                width="40" height="40" alt="Avatar"
                                                className="rounded-md w-10 md:w-20 aspect-[40/40] object-cover" />
                                            <div className="grid gap-1">
                                                <p className="font-medium text-sm whitespace-normal md:text-base">City
                                                                                                                  Government
                                                                                                                  updated
                                                                                                                  a
                                                                                                                  project</p>
                                                <p className="text-gray-400 text-xs md:text-sm">5m ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-4">
                                        <div
                                            className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fGNoYXJpdHl8ZW58MHx8fHwxNzEyMTA3Nzg2fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                                width="40" height="40" alt="Avatar"
                                                className="rounded-md w-10 md:w-20 aspect-[40/40] object-cover" />
                                            <div className="grid gap-1">
                                                <p className="font-medium text-sm whitespace-normal md:text-base">Brgy.
                                                                                                                  Tambullilid
                                                                                                                  posted
                                                                                                                  a new
                                                                                                                  announcement</p>
                                                <p className="text-gray-400 text-xs md:text-sm">10m ago</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:mx-0 mx-4 rounded-xl" data-v0-t="card">
                        <div className="flex-col gap-1 grid pr-6 py-6 select-none space-y-1.5">
                            <h3 className="font-bold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">
                                Important Announcements </h3>
                            <p className="font-normal text-gray-600 text-xs md:text-sm">Stay informed with these
                                                                                        important
                                                                                        updates.</p>
                        </div>
                        <div className="bg-white p-0 rounded-3xl border border-[#96d7cf]">
                            <ul className="divide-y ">
                                <li className="p-4">
                                    <div
                                        className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                        <div className="grid gap-1">
                                            <p className="font-semibold text-sm whitespace-normal md:text-base">New
                                                                                                                Playground</p>
                                            <p className="text-gray-600 text-xs truncate md:max-w-xl md:text-sm">We&apos;re
                                                                                                                 building
                                                                                                                 a new
                                                                                                                 playground
                                                                                                                 in the
                                                                                                                 park.
                                                                                                                 The
                                                                                                                 playground
                                                                                                                 will be
                                                                                                                 closed
                                                                                                                 for
                                                                                                                 construction
                                                                                                                 from
                                                                                                                 July
                                                                                                                 10th.We&apos;re
                                                                                                                 building
                                                                                                                 a new
                                                                                                                 playground
                                                                                                                 in the
                                                                                                                 park.
                                                                                                                 The
                                                                                                                 playground
                                                                                                                 will be
                                                                                                                 closed
                                                                                                                 for
                                                                                                                 construction
                                                                                                                 from
                                                                                                                 July
                                                                                                                 10th.We&apos;re
                                                                                                                 building
                                                                                                                 a new
                                                                                                                 playground
                                                                                                                 in the
                                                                                                                 park.
                                                                                                                 The
                                                                                                                 playground
                                                                                                                 will be
                                                                                                                 closed
                                                                                                                 for
                                                                                                                 construction
                                                                                                                 from
                                                                                                                 July
                                                                                                                 10th.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4">
                                    <div
                                        className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                        <div className="grid gap-1">
                                            <p className="font-semibold text-sm whitespace-normal md:text-base">Road
                                                                                                                Closure</p>
                                            <p className="text-gray-600 text-xs truncate md:max-w-xl md:text-sm">
                                                Part of Main Street will be closed for repairs from July 15th to July
                                                20th.
                                                Please use alternate
                                                routes. </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4">
                                    <div
                                        className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                                        <div className="grid gap-1">
                                            <p className="font-semibold text-sm whitespace-normal md:text-base">Community
                                                                                                                Picnic</p>
                                            <p className="text-gray-600 text-xs truncate md:max-w-xl md:text-sm">
                                                Join us for a fun community picnic on July 30th. There will be games,
                                                food,
                                                and music. </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-4 md:mx-0 mx-4 rounded-xl" data-v0-t="card">
                        <div className="flex-col gap-1 grid pr-6 py-6 select-none space-y-1.5">
                            <h3 className="font-bold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Feedback
                                                                                                                        Summary</h3>
                            <p className="font-normal text-gray-600 text-xs md:text-sm">See what the community thinks
                                                                                        about
                                                                                        recent projects.</p>
                        </div>
                        <div>
                            <div className="overflow-auto relative w-full">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="bg-white border-2 border-[#daf4aa] rounded-xl" data-v0-t="card">
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="bg-[#daf4aa] font-semibold px-3 py-1 rounded-xl select-none text-sm md:text-base">Project
                                                                                                                                                 A</h3>
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex items-center space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="h-4 text-green-500 w-4 md:h-5 md:w-5">
                                                            <path d="M7 10v12"></path>
                                                            <path
                                                                d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                                                        </svg>
                                                        <span
                                                            className="select-none text-gray-500 text-xs md:text-sm">25</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="h-4 text-red-500 w-4 md:h-5 md:w-5">
                                                            <path d="M17 14V2"></path>
                                                            <path
                                                                d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                                                        </svg>
                                                        <span
                                                            className="select-none text-gray-500 text-xs md:text-sm">5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="select-none text-gray-600 text-sm md:text-base">
                                                The feedback for Project A has been very positive, with users
                                                appreciating
                                                the new features and overall user
                                                experience. </p>
                                        </div>
                                    </div>
                                    <div className="bg-white border-2 border-[#96d7cf] rounded-xl" data-v0-t="card">
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="bg-[#96d7cf] font-semibold px-3 py-1 rounded-xl select-none text-sm md:text-base">Project
                                                                                                                                                 A</h3>
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex items-center space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="h-4 text-green-500 w-4 md:h-5 md:w-5">
                                                            <path d="M7 10v12"></path>
                                                            <path
                                                                d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                                                        </svg>
                                                        <span
                                                            className="select-none text-gray-500 text-xs md:text-sm">25</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="h-4 text-red-500 w-4 md:h-5 md:w-5">
                                                            <path d="M17 14V2"></path>
                                                            <path
                                                                d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                                                        </svg>
                                                        <span
                                                            className="select-none text-gray-500 text-xs md:text-sm">5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="select-none text-gray-600 text-sm md:text-base">
                                                The feedback for Project A has been very positive, with users
                                                appreciating
                                                the new features and overall user
                                                experience. </p>
                                        </div>
                                    </div>
                                    <div className="bg-white border-2 border-[#d2b4f2] rounded-xl" data-v0-t="card">
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="bg-[#d2b4f2] font-semibold px-3 py-1 rounded-xl select-none text-sm md:text-base">Project
                                                                                                                                                 A</h3>
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex items-center space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="h-4 text-green-500 w-4 md:h-5 md:w-5">
                                                            <path d="M7 10v12"></path>
                                                            <path
                                                                d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                                                        </svg>
                                                        <span
                                                            className="select-none text-gray-500 text-xs md:text-sm">25</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="h-4 text-red-500 w-4 md:h-5 md:w-5">
                                                            <path d="M17 14V2"></path>
                                                            <path
                                                                d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                                                        </svg>
                                                        <span
                                                            className="select-none text-gray-500 text-xs md:text-sm">5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="select-none text-gray-600 text-sm md:text-base">
                                                The feedback for Project A has been very positive, with users
                                                appreciating
                                                the new features and overall user
                                                experience. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};