import { AddEditContactComponent, ContactInfo } from "../components/index.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllContacts,
    toggleAddContactMode,
    toggleContactFetchSuccess
} from "../app/features/contacts/contactsSlice.js";
import { FloatButton, Modal } from "antd";
import { GoPlus } from "react-icons/go";

export const Contacts = () => {
    const location = useLocation();
    const [closedModal, setClosedModal] = useState(true);
    const {
        contacts,
        isContactFetchLoading,
        isContactFetchSuccess,
        totalContacts,
        isAddContactMode,
        isContactSaved
    } = useSelector((store) => store.contacts);
    const { isMediumFetchLoading, isMediumFetchSuccess, uploadedMedia } = useSelector((store) => store.media);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllContacts());
        if (location.pathname !== "/project" || location.pathname !== "/singleproject") {
            sessionStorage.setItem("scrollPosition", "0");
        }
    }, []);


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
                    {/*-----------------------CONTACT INFOS-----------------------*/ }
                    { contacts.map((contact, index) => {
                        return (
                            <ContactInfo key={ index } contact={ contact } />
                        );
                    }) }
                </div>
            </div>
            {/*-----------------------ADD CONTACT-----------------------*/ }
            <FloatButton icon={ <GoPlus /> } type="primary"
                         className="float-add-btn"
                         style={ {
                             right: 24,
                             width: "50px",
                             height: "50px"
                         } }
                         onClick={ () => {
                             dispatch(toggleAddContactMode());
                             dispatch(toggleContactFetchSuccess(false));
                         } } />
            <Modal centered title="Add Contact Info" open={ isAddContactMode }
                   closeIcon={ null }
                   onCancel={ () => {
                       return;
                   } }
                   footer={ null } wrapClassName="add-project-modal" width={ 800 }>
                <div className="pb-1 border-b-2 mb-3 select-none">Fill in the details of the new contact information.
                </div>
                <AddEditContactComponent mode="add" />
            </Modal>
        </>
    );
};