export const PostComment = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    return (
        <form className="flex gap-2 items-center mb-4 px-2 md:gap-4 md:mb-0 md:px-0"
              onSubmit={ handleSubmit }
        >
            <input
                className="border disabled:cursor-not-allowed disabled:opacity-50 file:bg-transparent file:border-0 file:font-medium file:text-sm flex flex-1 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-Thesis-200 h-10 px-3 py-2 rounded-md text-sm w-full md:text-sm"
                placeholder="Add a comment..." data-id="83" />
            <button
                className="bg-Thesis-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-10 inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-xs transition-colors whitespace-nowrap md:text-sm"
                type="submit" data-id="84">Post
            </button>
        </form>
    );
};