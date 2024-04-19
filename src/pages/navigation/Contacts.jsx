import { ContactInfo } from "../../components/index.jsx";
import { contacts } from "../../utils/data.jsx";
import { motion } from "framer-motion";

export const Contacts = () => {
    return (
        <motion.div
            initial={ { opacity: 0, y: -30, x: 0 } }
            animate={ { opacity: 1, y: 0, x: 0 } }
            transition={ { type: "tween" } }
            className="absolute bg-transparent flex-1 h-[calc(100%-64px)] pt-6 pb-6 ml-0 top-16 z-0 md:ml-[272px] w-full md:w-[calc(100%-272px)]">
            <div className="h-full max-h-full overflow-y-scroll pt-0 px-0 md:px-6">
                <div
                    className="bg-white border-2 flex-col gap-1 grid mt-20 mx-4 p-6 rounded-xl select-none space-y-1.5 md:mt-0 md:mx-0">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Contacts</h3>
                    <p className="text-sm text-muted-foreground">Important contact information about city government,
                        rescue, police station, LGU, and more.</p>
                </div>
                <div className="gap-0 md:gap-6 flex flex-col md:grid mt-4 space-y-4 md:space-y-0 w-full lg:grid-cols-2">
                    { contacts.map((contact, index) => {
                        const { logo, name, address, emails, phones } = contact;
                        return (
                            <ContactInfo key={ index } logo={ logo } name={ name } address={ address } emails={ emails }
                                         phones={ phones } />
                        );
                    }) }
                </div>
            </div>
        </motion.div>
    );
};