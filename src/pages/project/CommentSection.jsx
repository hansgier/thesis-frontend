import { UserComment } from "./UserComment.jsx";
import { PostComment } from "./PostComment.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Empty, Spin } from "antd";
import { getAllComments } from "../../app/features/comments/commentsSlice.js";

export const CommentSection = React.memo(({ projectId }) => {
    const { projects, singleProject } = useSelector((store) => store.projects);
    const { users4admin } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const {
        comments,
        totalComments,
        isCommentFetchLoading,
        isCommentFetchSuccess
    } = useSelector((store) => store.comments);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllComments(projectId));
    }, []);


    return (
        <>
            {/*----------POST COMMENT----------*/ }
            <div className="bg-white bottom-0 mt-6 px-0 md:px-6">
                <PostComment />
            </div>

            {/*----------COMMENTS----------*/ }
            <div data-id="57" className="md:mt-4 md:pb-2 md:px-6">
                {/*------------------Number of comments------------------*/ }
                <div className="flex items-center mb-4 pl-2 space-x-4 md:pl-0">
                    <span
                        className="font-semibold select-none text-sm md:text-lg"
                        data-id="58">
                        Comments
                    </span>
                    { isCommentFetchLoading ? <Spin spinning={ isCommentFetchLoading } /> : (
                        <>
                    <span
                        className="bg-[#daf4aa] flex font-bold items-center justify-center px-2 py-0 rounded-full select-none text-black text-xs md:text-sm">
                                { totalComments }
                    </span>
                        </>
                    ) }
                </div>
                {/*------------------COMMENT SECTION------------------*/ }
                <div data-id="59" className="pb-4 pl-2 pr-4 space-y-6 md:pb-0 md:px-0">
                    { isCommentFetchLoading || (
                        <>
                            { totalComments < 1 ?
                                <Empty description="No comments" />
                                :
                                comments.map((comment) => (
                                    <UserComment key={ comment?.id } comment={ comment } />
                                )) }
                        </>
                    ) }
                </div>
            </div>
        </>
    );
});