import { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";

export const LikeDislikeButtons = ({ likes, dislikes }) => {
    const [reaction, setReaction] = useState(null);

    // Function to handle like click
    const handleLike = () => {
        setReaction(reaction === "like" ? null : "like");
    };

    // Function to handle dislike click
    const handleDislike = () => {
        setReaction(reaction === "dislike" ? null : "dislike");
    };

    return (
        <>
            {/*----------Like Button----------*/ }
            <div className="flex gap-1 h-full items-center justify-center">
                <BiLike size={ 17 } onClick={ handleLike }
                        color={ reaction === "like" ? "#0284c7" : null }
                        className="hover:cursor-pointer hover:scale-125 hover:duration-200 hover:transition-all" />
                <span
                    className={ `flex h-auto items-center select-none ${ reaction === "like" ? "text-[#0284c7]" : "text-[#454545]" } text-xs md:text-sm` }>{ likes }</span>
            </div>
            {/*----------Dislike Button----------*/ }
            <div className="flex gap-1 h-full items-center justify-center">
                <BiDislike size={ 17 } onClick={ handleDislike }
                           color={ reaction === "dislike" ? "#db2777" : null }
                           className="hover:cursor-pointer hover:scale-125 hover:duration-200 hover:transition-all" />
                <span
                    className={ `flex h-full items-center justify-center select-none ${ reaction === "dislike" ? "text-[#db2777]" : "text-[#454545]" } text-xs md:text-sm` }>{ dislikes }</span>
            </div>
        </>
    );
};