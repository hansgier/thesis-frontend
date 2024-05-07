import { UserComment } from "./UserComment.jsx";
import { PostComment } from "./PostComment.jsx";

export const CommentSection = () => {


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
                    <span
                        className="bg-[#daf4aa] flex font-bold items-center justify-center px-2 py-0 rounded-full select-none text-black text-xs md:text-sm">
                        2
                    </span>
                </div>
                {/*------------------COMMENT SECTION------------------*/ }
                <div data-id="59" className="pb-4 pl-2 pr-4 space-y-6 md:pb-0 md:px-0">
                    {/*TODO: map the comments here*/ }
                    <UserComment userName="John Davis" userComment="Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality.Great
                                                                               project! I
                                                                               love the
                                                                               design and
                                                                               the
                                                                               functionality." />
                    <UserComment userName="TravisPorter" userComment="good asdfasdfasdf" />
                    <UserComment userName="juandelacruz119" userComment="Nice good project!" />
                </div>
            </div>
        </>
    );
};