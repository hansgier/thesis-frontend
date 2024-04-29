import { ContactInfo } from "../../components/index.jsx";
import { contacts } from "../../utils/data.js";

export const Contacts = () => {
    return (
        <>
            <div className="h-full max-h-full overflow-y-scroll pt-4 px-0 md:px-6">
                <div
                    className="bg-transparent border-2 flex-col mt-0 gap-1 grid mx-4 p-6 rounded-xl select-none space-y-1.5 md:mt-0 md:mx-0 bg-gradient-to-r from-cyan-800 to-sky-600">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-white">Contacts</h3>
                    <p className="text-sm text-muted-foreground text-white">Important contact information about city
                        government,
                        rescue, police station, LGU, and more.</p>
                </div>
                <div
                    className="gap-0 md:gap-6 flex flex-col md:grid mt-4 mb-4 space-y-4 md:space-y-0 w-full lg:grid-cols-2 md:mb-6">
                    { contacts.map((contact, index) => {
                        const { logo, name, address, emails, phones } = contact;
                        return (
                            <ContactInfo key={ index } logo={ logo } name={ name } address={ address } emails={ emails }
                                         phones={ phones } />
                        );
                    }) }
                </div>
            </div>
        </>
    );
};