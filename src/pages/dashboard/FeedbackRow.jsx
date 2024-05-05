export const FeedbackRow = ({ project, rating, feedback }) => {
    return (
        <tr className="border-b data-[state=selected]:bg-muted grid grid-cols-2 group hover:bg-muted/50 transition-colors w-full sm:grid-cols-3">
            <td className="align-middle cursor-pointer font-medium group-hover:duration-300 p-4 text-Thesis-300 [&:has([role=checkbox])]:pr-0">{ project }</td>
            <td className="font-semibold py-4 select-none text-pink-600">{ rating }</td>
            <td className="align-middle col-span-2 group-hover:duration-300 group-hover:ease-in-out group-hover:text-gray-700 group-hover:transition-all pb-2 pt-0 px-4 select-none text-gray-500 text-xs whitespace-normal sm:col-span-1 sm:pl-0 sm:pr-2 sm:py-2 md:text-sm [&:has([role=checkbox])]:pr-0">{ feedback }</td>
        </tr>
    );
};