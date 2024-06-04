import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../app/features/projects/projectsSlice.js";
import { Empty, Skeleton } from "antd";
import { Announcement, FeaturedProject, UpcomingProject } from "./dashboard/index.jsx";
import { getAllAnnouncements } from "../app/features/announcements/announcementsSlice.js";
import { getAllBarangays } from "../app/features/users/barangaysSlice.js";
import { getAllUsers } from "../app/features/users/usersSlice.js";

export const Dashboard = () => {
    const location = useLocation();
    const {
        projects,
        isProjectFetchLoading,
        totalProjects,
        completed,
        cancelled,
        ongoing,
        isProjectFetchSuccess,
        featuredProjects,
        upcomingProjects,
        importantAnnouncements,
        feedbackSummaries
    } = useSelector((store) => store.projects);
    const {
        isAnnouncementFetchLoading,
        isAnnouncementFetchSuccess,
        announcements,
        totalAnnouncements
    } = useSelector((store) => store.announcements);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProjects());
        dispatch(getAllAnnouncements());
        dispatch(getAllBarangays());
        dispatch(getAllUsers());
    }, []);

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
                            { isProjectFetchLoading ? <Skeleton.Button active /> :
                                <h2 className="font-extrabold mr-14 text-3xl text-Winter-700 text-white">
                                    { totalProjects }
                                </h2>
                            }

                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br border-b-2 border-green-700 border-l-2 border-none border-r-2 border-t-8 from-green-900 gap-1 grid hover:duration-300 hover:shadow-xl hover:transition-shadow p-4 rounded-lg select-none shadow-md to-yellow-200 lg:flex-1">
                        <p className="font-semibold mb-4 text-Winter-700 text-sm text-white">Completed</p>
                        <div className="flex justify-between">
                            { isProjectFetchLoading ? <Skeleton.Button active /> :
                                <h2 className="font-bold text-white text-xl md:text-2xl">
                                    { completed }
                                </h2>
                            }
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br border-b-2 border-l-2 border-none border-r-2 border-t-8 border-yellow-700 from-yellow-800 gap-1 grid hover:duration-300 hover:shadow-xl hover:transition-shadow p-4 rounded-lg select-none shadow-md to-red-300 lg:flex-1">
                        <p className="font-semibold mb-4 text-Winter-700 text-sm text-white">Ongoing</p>
                        <div className="flex justify-between">
                            { isProjectFetchLoading ? <Skeleton.Button active /> :
                                <h2 className="font-bold text-white text-xl md:text-2xl">
                                    { ongoing }
                                </h2>
                            }
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br border-b-2 border-l-2 border-none border-r-2 border-red-700 border-t-8 from-red-600 gap-1 grid hover:duration-300 hover:shadow-xl hover:transition-shadow p-4 rounded-lg select-none shadow-md to-pink-400 lg:flex-1">
                        <p className="font-semibold mb-4 text-Winter-700 text-sm text-white">Cancelled</p>
                        <div className="flex justify-between">
                            { isProjectFetchLoading ? <Skeleton.Button active /> :
                                <h2 className="font-bold text-white text-xl md:text-2xl">
                                    { cancelled }
                                </h2>
                            }
                        </div>
                    </div>
                </div>
                <div className="gap-6 grid grid-cols-1 min-h-[calc(100vh_-_theme(spacing.16))] md:gap-4">
                    {/*----------------------------FEATURED PROJECTS----------------------------*/ }
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
                            { isProjectFetchLoading ? <Skeleton active block /> : (
                                <>
                                    <ul className={ `gap-2 grid ${ featuredProjects.length < 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-1 md:gap-5 md:grid-cols-3 lg:grid-cols-3" }` }>
                                        { featuredProjects.length < 1 ?
                                            <div
                                                className="bg-white border-b border-green-400 border-t justify-center flex items-center p-2 rounded-lg md:flex md:flex-col md:gap-4 md:rounded-3xl w-full py-10">
                                                <Empty description="No featured projects" />
                                            </div> :
                                            featuredProjects.map((project, i) => (
                                                <li key={ i }>
                                                    <FeaturedProject id={ project.id } project={ project } />
                                                </li>
                                            )) }

                                    </ul>
                                </>
                            ) }
                        </div>
                    </div>
                    {/*----------------------------UPCOMING PROJECTS----------------------------*/ }
                    <div className="grid grid-cols-1 md:gap-4 lg:gap-8 lg:grid-cols-1">
                        <div className="md:mx-0 mx-4 rounded-xl" data-v0-t="card">
                            <div className="flex-col gap-1 grid pr-6 py-6 space-y-1.5">
                                <h3 className="font-bold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Upcoming
                                                                                                                            Projects</h3>
                                <p className="font-normal text-gray-600 text-xs md:text-sm">Get ready for these
                                                                                            exciting
                                                                                            community events.</p>
                            </div>
                            { isProjectFetchLoading ? <Skeleton active block /> : (
                                <>
                                    <div className="bg-white border border-[#b4d8f2] p-0 rounded-3xl">
                                        <ul className="divide-y">
                                            { upcomingProjects.length < 1 ?
                                                <div
                                                    className="p-10 flex items-center justify-center text-xs md:text-base">
                                                    <Empty description="No upcoming projects" />
                                                </div>
                                                :
                                                upcomingProjects.map((project, i) => (
                                                    <li className="p-4" key={ i }>
                                                        <UpcomingProject title={ project.title }
                                                                         description={ project.description } />
                                                    </li>
                                                )) }
                                        </ul>
                                    </div>
                                </>
                            ) }
                        </div>
                    </div>
                    {/*----------------------------IMPORTANT ANNOUNCEMENTS----------------------------*/ }
                    <div className="md:mx-0 mx-4 rounded-xl mb-6" data-v0-t="card">
                        <div className="flex-col gap-1 grid pr-6 py-6 select-none space-y-1.5">
                            <h3 className="font-bold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">
                                Important Announcements </h3>
                            <p className="font-normal text-gray-600 text-xs md:text-sm">Stay informed with these
                                                                                        important
                                                                                        updates.</p>
                        </div>
                        { isAnnouncementFetchLoading ? <Skeleton active block /> : (
                            <>
                                <div className="bg-white p-0 rounded-3xl border border-[#96d7cf]">
                                    <ul className="divide-y ">
                                        { announcements.length < 1 ?
                                            <div
                                                className="p-10 flex items-center justify-center text-xs md:text-base">
                                                <Empty description="No important annoucements" />
                                            </div>
                                            :
                                            announcements.map((announcement, i) => (
                                                <li className="p-4" key={ i }>
                                                    <Announcement announcement={ announcement } />
                                                </li>
                                            )) }
                                    </ul>
                                </div>
                            </>
                        ) }
                    </div>
                </div>
            </div>
        </>
    );
};