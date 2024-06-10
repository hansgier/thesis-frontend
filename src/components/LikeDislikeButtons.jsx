import React, { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { useDispatch } from "react-redux";

export const LikeDislikeButtons = React.memo(({ project }) => {
    const [reaction, setReaction] = useState(null);
    const dispatch = useDispatch();


    // Function to handle like click
    const handleLike = () => {
        setReaction(reaction === "like" ? null : "like");
    };

    // Function to handle dislike click
    const handleDislike = () => {
        setReaction(reaction === "dislike" ? null : "dislike");
    };

    let likeCount = 0;
    let dislikeCount = 0;

    project?.reactions.forEach(reaction => {
        if (reaction.reaction_type === "like") {
            likeCount++;
        } else if (reaction.reaction_type === "dislike") {
            dislikeCount++;
        }
    });

    return (
        <>
            {/*----------Like Button----------*/ }
            <div className="flex gap-1 h-full items-center justify-center">
                <BiLike size={ 17 } onClick={ handleLike }
                        color={ reaction === "like" ? "#0284c7" : null }
                        className="hover:cursor-pointer hover:scale-125 hover:duration-200 hover:transition-all" />
                <span
                    className={ `flex h-auto items-center select-none ${ reaction === "like" ? "text-[#0284c7]" : "text-[#454545]" } text-xs md:text-sm` }>{ likeCount }</span>
            </div>
            {/*----------Dislike Button----------*/ }
            <div className="flex gap-1 h-full items-center justify-center">
                <BiDislike size={ 17 } onClick={ handleDislike }
                           color={ reaction === "dislike" ? "#db2777" : null }
                           className="hover:cursor-pointer hover:scale-125 hover:duration-200 hover:transition-all" />
                <span
                    className={ `flex h-full items-center justify-center select-none ${ reaction === "dislike" ? "text-[#db2777]" : "text-[#454545]" } text-xs md:text-sm` }>{ dislikeCount }</span>
            </div>
        </>
    );
});