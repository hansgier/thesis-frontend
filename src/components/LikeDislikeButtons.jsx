import React, { useCallback, useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { createProjectReaction, getAllProjectReactions } from "../app/features/reactions/reactionsSlice.js";

export const LikeDislikeButtons = React.memo(({ project }) => {
    const [reaction, setReaction] = useState(null);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [reactStatus, setReactStatus] = useState("idle");
    const { user } = useSelector((store) => store.auth);
    const {
        isReactionFetchLoading,
        isReactionFetchSuccess,
        isReactionFetchError
    } = useSelector((store) => store.reactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProjectReactions(project?.id)).then((val, val2) => {
            const { payload } = val;
            setReaction(payload?.myReaction);
            const likes = payload.reactions.find((obj) => obj.reaction_type === "like")?.count;
            const dislikes = payload.reactions.find((obj) => obj.reaction_type === "dislike")?.count;
            setLikeCount(likes);
            setDislikeCount(dislikes);
            setReactStatus("fulfilled");
        }).catch(() => {
            setReactStatus("rejected");
        });
    }, [likeCount, dislikeCount, reaction, reactStatus]);

    const isGuest = user.role === "guest";

    // Function to handle like click
    const handleLike = useCallback(() => {
        if (isGuest) return;
        setReactStatus("pending-like");
        dispatch(createProjectReaction({ reaction_type: "like", reactionTarget: "project", projectId: project?.id }));
    }, [dispatch, project?.id]);

    // Function to handle dislike click
    const handleDislike = useCallback(() => {
        if (isGuest) return;
        setReactStatus("pending-dislike");
        dispatch(createProjectReaction({
            reaction_type: "dislike",
            reactionTarget: "project",
            projectId: project?.id
        }));
    }, [dispatch, project?.id]);

    return (
        <>
            {/*----------Like Button----------*/ }
            <div className="flex gap-1 h-full items-center justify-center">
                <BiLike size={ 17 } onClick={ handleLike }
                        disabled={ isReactionFetchLoading }
                        color={ reactStatus === "pending-like" ? "#0284c7" : reactStatus === "fulfilled" && reaction === "like" ? "#0284c7" : null }
                        className={ `${ !isGuest && "hover:cursor-pointer hover:scale-125 hover:duration-200 hover:transition-all" }` } />
                <span
                    className={ `flex h-auto items-center select-none ${ reactStatus === "pending-like" ? "text-[#0284c7]" : reactStatus === "fulfilled" && reaction ? "text-[#0284c7]" : "text-[#454545]" } text-xs md:text-sm` }>
                    { !likeCount ? "0" : likeCount }
                </span>
            </div>
            {/*----------Dislike Button----------*/ }
            <div className="flex gap-1 h-full items-center justify-center">
                <BiDislike size={ 17 } onClick={ handleDislike }
                           color={ reactStatus === "pending-dislike" ? "#db2777" : reactStatus === "fulfilled" && reaction === "dislike" ? "#db2777" : null }
                           className={ `${ !isGuest && "hover:cursor-pointer hover:scale-125 hover:duration-200 hover:transition-all" }` } />
                <span
                    className={ `flex h-full items-center justify-center select-none ${ reactStatus === "pending-dislike" ? "text-[#db2777]" : reactStatus === "fulfilled" && reaction === "dislike" ? "text-[#db2777]" : "text-[#454545]" } text-xs md:text-sm` }>
                    { !dislikeCount ? "0" : dislikeCount }
                </span>
            </div>
        </>
    );
}, (prevProps, nextProps) => {
    return prevProps.project?.id === nextProps.project?.id && deepCompareArrayOfObjects(prevProps.project?.reactions, nextProps.project?.reactions);
});

// Custom deep comparison function for an array of objects
function deepCompareArrayOfObjects(prevArr, nextArr) {
    if (prevArr.length !== nextArr.length) {
        return false;
    }

    for (let i = 0; i < prevArr.length; i++) {
        const prevObj = prevArr[i];
        const nextObj = nextArr[i];

        if (!deepCompareObjects(prevObj, nextObj)) {
            return false;
        }
    }

    return true;
}

// Custom deep comparison function for objects
function deepCompareObjects(prevObj, nextObj) {
    const prevKeys = Object.keys(prevObj);
    const nextKeys = Object.keys(nextObj);

    if (prevKeys.length !== nextKeys.length) {
        return false;
    }

    for (const key of prevKeys) {
        const prevValue = prevObj[key];
        const nextValue = nextObj[key];

        if (typeof prevValue === "object" && typeof nextValue === "object") {
            if (!deepCompareObjects(prevValue, nextValue)) {
                return false;
            }
        } else if (prevValue !== nextValue) {
            return false;
        }
    }

    return true;
}