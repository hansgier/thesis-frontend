export const Conversations = ({ recipient, convoSnippet, lastMsgDate }) => {
    return (
        <>
            <div
                className="flex items-center gap-3 rounded-md bg-white p-3 hover:bg-sky-100 transition-all duration-200">
                <div className="flex-1 space-y-1" data-id="12">
                    <p className="font-medium select-none text-sm md:text-sm" data-id="13">
                        { recipient }
                    </p>
                    <p className="dark:text-gray-400 line-clamp-1 select-none text-gray-500 text-xs md:text-sm"
                       data-id="14">
                        { convoSnippet }
                    </p>
                </div>
                <span className="dark:text-gray-400 select-none text-gray-500 text-xs"
                      data-id="15">
                    { lastMsgDate }
                </span>
            </div>
        </>
    );
};