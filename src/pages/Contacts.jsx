import { FloatButton, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
    getAllContacts,
    setFilteredContacts,
    sortContacts,
    toggleAddContactMode,
    toggleContactFetchSuccess
} from "../app/features/contacts/contactsSlice.js";
import { getAllUsers } from "../app/features/users/usersSlice.js";
import { AddEditContactComponent, ContactInfo } from "../components/index.jsx";
import { useWindowSize } from "../hooks/index.jsx";

const filterContacts = (contacts, filters) => {
    let filteredContacts = [...contacts];
    // Filter by posted_by
    if (filters) {
        filteredContacts = filteredContacts.filter(
            contact => contact.created_by === filters
        );
    }

    return filteredContacts;
};

export const Contacts = () => {
    const location = useLocation();
    const [closedModal, setClosedModal] = useState(true);
    const {
        contacts,
        isContactFetchLoading,
        isContactFetchSuccess,
        totalContacts,
        isAddContactMode,
        isContactSaved,
        sort: contactSort,
        filtered_contacts
    } = useSelector((store) => store.contacts);
    const { isMediumFetchLoading, isMediumFetchSuccess, uploadedMedia } = useSelector((store) => store.media);
    const { user } = useSelector((store) => store.auth);
    const { users4admin } = useSelector((store) => store.users);
    const dispatch = useDispatch();

    const { width } = useWindowSize();

    useEffect(() => {
        dispatch(getAllContacts());
        dispatch(getAllUsers());
        if (location.pathname !== "/project" || location.pathname !== "/singleproject") {
            sessionStorage.setItem("scrollPosition", "0");
        }
    }, [dispatch, location.pathname]);

    const isAdmin = user.role === "admin" || user.role === "barangay";

    return (
        <>
            <div className="h-full max-h-full overflow-y-scroll pt-4 px-0 md:px-6">
                <div
                    className="bg-transparent border border-gray-400 flex-col mt-0 gap-1 grid mx-4 p-6 rounded-xl select-none space-y-1.5 md:mt-0 md:mx-0 bg-white">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-black">Contacts</h3>
                    <p className="text-sm text-muted-foreground text-gray-800">Important contact information about city
                        government,
                        rescue, police station, LGU, and
                        more.</p>
                </div>
                <div className="flex mt-2 px-4 pt-1 rounded-lg bg-white border mx-4 md:mx-0 justify-between">
                    <div className="flex items-center">
                        <span
                            className="mr-2 text-sm font-medium text-gray-600 select-none hidden md:block">Posted by</span>
                        <Select
                            className="w-44 hover:border-b-2 hover:border-sky-200 hover:ease-in-out hover:duration-200 focus:border-sky-200"
                            placeholder="All"
                            variant="borderless"
                            disabled={ isContactFetchLoading }
                            onChange={ (val) => {
                                const admin = users4admin.find((u) => u.role === "admin");
                                if (!val || val === admin.id) {
                                    dispatch(setFilteredContacts(contacts));
                                } else {
                                    const filteredContacts = filterContacts(contacts, val);
                                    dispatch(setFilteredContacts(filteredContacts));
                                }
                            } }
                            filterOption={ (input, option) => ( option.children.toLowerCase() ).includes(input.toLowerCase()) }
                            allowClear
                            showSearch
                        >
                            { users4admin.map((creator) => {
                                return ( creator.role === "barangay" || creator.role === "admin" ) &&
                                    <Select.Option key={ creator.id }
                                                   value={ creator.id }>{ creator.username }</Select.Option>;
                            }) }
                        </Select>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2 text-sm font-medium text-gray-600 select-none hidden md:block">Sort</span>
                        <Select
                            className="w-40 hover:border-b-2 hover:border-sky-200 hover:ease-in-out hover:duration-200 focus:border-sky-200"
                            variant="borderless"
                            disabled={ isContactFetchLoading }
                            onChange={ (val) => {
                                dispatch(sortContacts(val));
                            } }
                            defaultValue="az"
                        >
                            <Select.Option value="az">Alphabetical (A-Z)</Select.Option>
                            <Select.Option value="za">Alphabetical (Z-A)</Select.Option>
                        </Select>
                    </div>
                </div>
                <div
                    className="gap-0 md:gap-6 flex flex-col md:grid mt-4 mb-4 space-y-4 md:space-y-0 w-full lg:grid-cols-2 md:mb-6">
                    {/*-----------------------CONTACT INFOS-----------------------*/ }
                    { filtered_contacts.length > 0 && filtered_contacts.map((contact, index) => {
                        return (
                            <ContactInfo key={ index } contact={ contact } />
                        );
                    }) }
                </div>
            </div>
            {/*-----------------------ADD CONTACT-----------------------*/ }
            { isAdmin && (
                <>
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
                        <div className="pb-1 border-b-2 mb-3 select-none">Fill in the details of the new contact
                            information.
                        </div>
                        <AddEditContactComponent mode="add" />
                    </Modal>
                </>
            ) }
        </>
    );
};