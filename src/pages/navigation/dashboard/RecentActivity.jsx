export const RecentActivity = ({ image, title, timestamp }) => {
    return (
        <li className="p-4">
            <div
                className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
                <img src={ image } width="40" height="40" alt="Avatar"
                     style={ { aspectRatio: "40/40", objectFit: "cover" } } className="rounded-md" />
                <div className="grid gap-1">
                    <p className="font-medium text-sm whitespace-normal md:text-base">{ title }</p>
                    <p className="text-gray-600 text-xs md:text-sm">{ timestamp }</p>
                </div>
            </div>
        </li>
    );
};