import { NavLink } from "react-router-dom";

export const LoginRegister = () => {
    return (
        <div
            className="flex flex-col gap-4 h-screen items-center justify-center overflow-hidden relative text-center w-full"
            style={ {
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            } }>
            <img src="startbg3" className="fixed h-screen rotate-180 w-full" loading="lazy" />
            <div className="bg-transparent flex flex-col h-full items-center justify-center w-full z-50">
                <div className="flex items-center justify-center">
                    <img alt="Logo" width="100" height="100" className="bg-cover rounded-xl sm:mb-2"
                         src="https://www.ormoc.gov.ph/assets/img/official_seal.webp" loading="lazy" />
                </div>
                <div className="space-y-4">
                    <h1 className="font-bold px-3 text-3xl text-black tracking-tighter sm:px-0 sm:text-4xl md:text-5xl">Ormoc
                                                                                                                        City
                                                                                                                        Project
                                                                                                                        Information
                                                                                                                        System</h1>
                    <p className="px-4 text-base text-gray-700 w-full sm:text-normal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Access
                                                                                                                                                 project
                                                                                                                                                 information
                                                                                                                                                 in
                                                                                                                                                 Ormoc
                                                                                                                                                 City.
                                                                                                                                                 Sign
                                                                                                                                                 up
                                                                                                                                                 or
                                                                                                                                                 log
                                                                                                                                                 in
                                                                                                                                                 to
                                                                                                                                                 get
                                                                                                                                                 started.</p>
                </div>
                <div
                    className="border-Thesis-200 border-opacity-75 border-solid max-w-sm mt-4 pt-4 px-4 space-y-7 w-full sm:px-0">
                    <div className="space-y-4">
                        <input
                            className="backdrop-blur-xl bg-transparent border-Thesis-200 border-b-2 border-l-0 border-r-0 border-t-0 focus:border-Thesis-200 focus:outline-none focus:ring-0 focus:ring-offset-0 font-normal h-10 placeholder-Thesis-200 placeholder-opacity-40 px-3 py-2 text-base text-black w-full"
                            id="email" placeholder="Email Address" type="email" />
                        <input
                            className="backdrop-blur-xl bg-transparent border-Thesis-200 border-b-2 border-l-0 border-r-0 border-t-0 focus:border-Thesis-200 focus:outline-none focus:ring-0 focus:ring-offset-0 font-normal h-10 placeholder-Thesis-200 placeholder-opacity-40 px-3 py-2 text-base text-black w-full"
                            id="password" placeholder="Password" type="password" />
                    </div>
                    <button
                        className="bg-gradient-to-r font-bold font-sans from-[#24C6DC] h-11 hover:bg-gradient-to-l hover:duration-300 hover:ease-in-out hover:from-Thesis-300 hover:to-blue-300 hover:transition-all px-4 py-2 rounded-sm text-base text-indigo-100 to-[#514A9D] tracking-widest uppercase w-full"
                        type="submit">Sign in
                    </button>
                </div>
                <div className="group max-w-sm mt-4 px-4 space-y-4 w-full sm:px-0 md:px-0">
                    <NavLink
                        to="/dashboard"
                        className="bg-opacity-25border-opacity-100 border-2 border-Thesis-100 border-solid font-medium hover:border-Thesis-300 hover:duration-300 hover:ease-in-out hover:text-Thesis-300 hover:transition-all inline-block px-4 py-2 ring-0 ring-offset-0 rounded-sm text-base text-black w-full md:px-0"
                    >
                        Continue as a guest
                    </NavLink>
                </div>
                <div className="max-w-sm mt-6 space-y-4 w-full" data-id="15">
                    <p className="flex flex-col text-base text-gray-600 sm:block" data-id="16">
                        Don't have an account? <a
                        className="font-bold hover:text-Thesis-300 text-Thesis-200 underline underline-offset-2"
                        data-id="17" href="#">
                        Sign up for an account </a></p>
                </div>
            </div>
        </div>
    );
};