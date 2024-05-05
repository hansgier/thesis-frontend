export const FeaturedProject = ({ image, title, description }) => {
    return (
        <li className="p-4">
            <div
                className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                <img src={ image } width="80" height="80" className="rounded-lg w-10 md:w-20" alt="ProjectContainer"
                     style={ { aspectRatio: "80/80", objectFit: "cover" } } />
                <div className="grid gap-1">
                    <p className="font-semibold text-sm md:text-base">{ title }</p>
                    <p className="md:text-gray-600 md:text-sm text-gray-700 text-xs">{ description }</p>
                </div>
            </div>
        </li>
    );
};