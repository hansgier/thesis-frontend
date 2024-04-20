import React from "react";
import { Announcement, FeaturedProject, FeedbackRow, RecentActivity, UpcomingProject } from "./dashboard/index.jsx";

export const Dashboard = () => {
    return (
        <>
            <div
                className="flex-col gap-3 grid grid-cols-1 mb-8 mx-4 md:grid-cols-2 md:mx-0 lg:flex lg:flex-row lg:w-full">
                <div
                    className="bg-gradient-to-bl from-Thesis-200 gap-1 grid hover:duration-300 hover:shadow-xl hover:transition-shadow p-4 rounded-lg select-none shadow-md to-pink-400 lg:flex-1">
                    <p className="font-semibold mb-4 text-Winter-700 text-sm text-white">Total Projects</p>
                    <div className="flex">
                        <h2 className="font-bold mr-14 text-3xl text-Winter-700 text-white">12,345</h2>
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
                                 viewBox="0 0 24 24" width="24" className="text-green-700">
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
                                 viewBox="0 0 24 24" width="24" className="text-yellow-700">
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
                                 viewBox="0 0 24 24" width="24" className="text-red-700">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap-6 grid grid-cols-1 min-h-[calc(100vh_-_theme(spacing.16))] md:gap-8">
                <div className="bg-transparent border mx-4 rounded-xl md:mx-0">
                    <div className="flex-col gap-1 grid p-6 select-none space-y-1.5">
                        <h3 className="font-semibold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Featured
                            Projects</h3>
                        <p className="text-muted-foreground text-sm whitespace-normal md:text-sm">Projects that need
                            your attention.</p>
                    </div>
                    <div className="p-0">
                        <ul className="divide-y">
                            <FeaturedProject
                                image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDV8fGNvbW11bml0eXxlbnwwfHx8fDE3MTIxMDczNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Community Garden"
                                description="A project to create a beautiful community garden for everyone to enjoy."
                            />
                            <FeaturedProject
                                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDd8fGNvbW11bml0eXxlbnwwfHx8fDE3MTIxMDczNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Youth Center"
                                description="Help us build a youth center where our kids can learn and grow."
                            />
                            <FeaturedProject
                                image="https://images.unsplash.com/photo-1519046904884-53103b34b206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDd8fGJlYWNofGVufDB8fHx8MTcxMjEwNzM5OXww&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Clean Beach Initiative"
                                description="Let's work together to keep our beaches clean and beautiful."
                            />
                        </ul>
                    </div>
                </div>
                <div className="bg-transparent border mx-4 rounded-xl md:mx-0" data-v0-t="card">
                    <div className="flex-col gap-1 grid p-6 select-none space-y-1.5">
                        <h3 className="font-semibold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Recent
                            Activities</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">See what's happening in your
                            community.</p>
                    </div>
                    <div className="p-0">
                        <ul className="divide-y">
                            <RecentActivity
                                image="https://images.unsplash.com/photo-1589938219129-3bff434f8c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fHJpdmVyJTIwcHJvamVjdHxlbnwwfHx8fDE3MTIxMDc3MDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Bgry. Linao posted a new project"
                                timestamp="2m ago"
                            />
                            <RecentActivity
                                image="https://images.unsplash.com/photo-1569925457326-59b1c3611227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fGJyaWRnZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3MTIxMDc3MjR8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="City Government updated a project"
                                timestamp="5m ago"
                            />
                            <RecentActivity
                                image="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fGNoYXJpdHl8ZW58MHx8fHwxNzEyMTA3Nzg2fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Brgy. Tambullilid posted a new announcement"
                                timestamp="10m ago"
                            />
                        </ul>
                    </div>
                </div>
                <div className="bg-transparent border mx-4 rounded-xl md:mx-0" data-v0-t="card">
                    <div className="flex-col gap-1 grid p-6 space-y-1.5">
                        <h3 className="font-semibold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Upcoming
                            Projects</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">Get ready for these exciting
                            community events.</p>
                    </div>
                    <div className="p-0">
                        <ul className="divide-y">
                            <UpcomingProject
                                image="https://images.unsplash.com/photo-1468359601543-843bfaef291a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDZ8fG11c2ljJTIwcGFya3xlbnwwfHx8fDE3MTIxMDc0ODV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Music in the Park"
                                description="Enjoy live music in our beautiful park. Date: July 15th"
                            />
                            <UpcomingProject
                                image="https://images.unsplash.com/photo-1590874023110-f82d4c63b599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGNsZWFuJTIwdXB8ZW58MHx8fHwxNzEyMTA3NTAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Community Cleanup"
                                description="Let's work together to keep our beaches clean. Date: July 20th"
                            />
                            <UpcomingProject
                                image="https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDZ8fG1vdmllJTIwbmlnaHR8ZW58MHx8fHwxNzEyMTA3NTE1fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Movie Night"
                                description="Family-friendly movie under the stars. Date: July 25th"
                            />
                        </ul>
                    </div>
                </div>
                <div className="bg-transparent border mx-4 rounded-xl md:mx-0" data-v0-t="card">
                    <div className="flex-col gap-1 grid p-6 select-none space-y-1.5">
                        <h3 className="font-semibold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Important
                            Announcements</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">Stay informed with these important
                            updates.</p>
                    </div>
                    <div className="p-0">
                        <ul className="divide-y">
                            <Announcement
                                image="https://images.unsplash.com/photo-1706687711792-08681cd9e2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fG5ldyUyMHBsYXlncm91bmR8ZW58MHx8fHwxNzEyMTA3ODA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="New Playground"
                                description="We're building a new playground in the park. The playground will be closed for construction from July 10th."
                            />
                            <Announcement
                                image="https://images.unsplash.com/photo-1660620942289-9416dac07d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fHJvYWQlMjBjbG9zdXJlfGVufDB8fHx8MTcxMjEwNzgzMnww&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Road Closure"
                                description="Part of Main Street will be closed for repairs from July 15th to July 20th. Please use alternate routes."
                            />
                            <Announcement
                                image="https://images.unsplash.com/photo-1592753054398-9fa298d40e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDJ8fHBpY25pY3xlbnwwfHx8fDE3MTIxMDc4NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                title="Community Picnic"
                                description="Join us for a fun community picnic on July 30th. There will be games, food, and music."
                            />
                        </ul>
                    </div>
                </div>
                <div className="bg-transparent border mb-4 mx-4 rounded-xl md:mx-0" data-v0-t="card">
                    <div className="border-b-2 flex-col gap-1 grid p-6 select-none space-y-1.5">
                        <h3 className="font-semibold leading-none text-xl tracking-tight whitespace-normal md:text-2xl">Feedback
                            Summary</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">See what the community thinks about
                            recent projects.</p>
                    </div>
                    <div className="p-0">
                        <div className="overflow-auto pl-0 relative w-full sm:pl-2">
                            <table className="text-sm w-full">
                                <thead className="[&_tr]:border-b">
                                <tr className="border-b data-[state=selected]:bg-muted grid-cols-3 hover:bg-muted/50 transition-colors"></tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                <FeedbackRow
                                    project="Community Garden"
                                    rating="4.5"
                                    feedback="The garden is beautiful and well-maintained. I love spending time here.The garden is beautiful and well-maintained. I love spending time here.The garden is beautiful and well-maintained. I love spending time here.The garden is beautiful and well-maintained. I love spending time here."
                                />
                                <FeedbackRow
                                    project="Community Garden"
                                    rating="4.5"
                                    feedback="The garden is beautiful and well-maintained. I love spending time here."
                                />
                                <FeedbackRow
                                    project="Community Garden"
                                    rating="4.5"
                                    feedback="The garden is beautiful and well-maintained. I love spending time here."
                                />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};