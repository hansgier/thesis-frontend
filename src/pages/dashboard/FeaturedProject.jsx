import { Empty } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/index.jsx";

export const FeaturedProject = React.memo(({ project }) => {
    const navigate = useNavigate();
    const { width } = useWindowSize();

    return (
        <div
            onClick={ () => width <= 768 && navigate(`/projects/${ project.id }`) }
            className={ `bg-white border-green-400 border-[1px] md:border-b md:border-green-400 md:border-t flex items-center rounded-3xl md:flex md:flex-col md:gap-4 md:pb-2 md:pt-1.5 md:px-1.5 py-2  ${ width <= 768 && "hover:cursor-pointer" }` }>
            { (width > 768) &&
                <div className="relative md:h-64 md:w-full h-10 w-12 ml-3 md:ml-0">
                    { project.media.length < 1 ?
                        <div
                            className="absolute bg-cover md:flex hidden items-center justify-center rounded-lg md:h-full md:rounded-3xl md:w-full">
                            <Empty description="No image" />
                        </div>
                        :
                        <img
                            src={ project.media[0].url }
                            className="absolute bg-cover h-10 rounded-lg w-12 md:h-full md:rounded-3xl md:w-full"
                            alt="Project" />
                    }
                </div>
            }
            <div
                className={ `md:gap-1 md:grid h-20 ml-0 md:ml-0 w-full flex flex-col justify-center md:justify-start ${ width <= 768 && "px-3" }` }>
                <p className="font-semibold mx-2 select-none text-sm md:text-base line-clamp-2">{ project.title }</p>
                <p className="mx-2 select-none text-gray-600 text-xs md:text-gray-600 md:text-sm ">
                    { width > 768 ?
                        project.description.length < 109 ? project.description : project.description.substring(0, 109) + "..."
                        :
                        project.description.length < 130 ? project.description : project.description.substring(0, 130) + "..."
                    }
                </p>
            </div>
            <button onClick={ () => navigate(`/projects/${ project.id }`) }
                    className="border-2 font-bold hidden p-3 rounded-full text-center text-xs w-full md:block hover:border-[#10c9aa] hover:text-[#10c9aa] transition-all duration-200">
                View Project
            </button>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.project.id === nextProps.project.id;
});