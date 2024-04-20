import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";


export const ContactInfo = ({ logo, name, address, emails, phones }) => {
    return (
        <div
            className="bg-transparent border-2 hover:duration-300 hover:shadow-lg hover:transition-shadow mx-4 p-5 rounded-xl space-y-2 md:mx-0"
        >
            <div className="flex items-center mb-3 space-x-2">
                <img src={ logo } loading="lazy"
                     className="select-none w-9" alt="logo" />
                <h2 className="font-semibold select-none text-lg">{ name }</h2>
            </div>
            { address === "" || (
                <div className="flex group pl-3 space-x-4 md:pl-2">
                    <div className="mt-0 md:mt-1">
                        <GrLocation className="h-5 md:w-5 md:h-4" color={ "#075985" } />
                    </div>
                    <p className="break-all group-hover:duration-150 group-hover:text-Thesis-300 group-hover:transition-all text-gray-700 text-sm w-full sm:text-base">{ address }</p>
                </div>
            ) }
            { emails.map((email, index) => (
                <div key={ index } className="flex items-center group pl-3 space-x-4 md:pl-2">
                    <div>
                        <HiOutlineMail className="h-5 md:w-5 md:h-4" color={ "#075985" } />
                    </div>
                    <p className="break-all group-hover:duration-150 group-hover:text-Thesis-300 group-hover:transition-all text-gray-700 text-sm underline w-full sm:text-base">{ email }</p>
                </div>
            )) }
            { phones.map((phone, index) => (
                <div key={ index } className="flex items-center group pl-3 space-x-4 md:pl-2">
                    <div>
                        <LuPhone className="h-5 md:w-5 md:h-4" color={ "#075985" } />
                    </div>
                    <p className="break-all group-hover:duration-150 group-hover:text-Thesis-300 group-hover:transition-all text-gray-700 text-sm w-full sm:text-base">{ phone }</p>
                </div>
            )) }
        </div>
    );
};