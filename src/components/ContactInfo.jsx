import { GrLocation } from "react-icons/gr";
import { Button, Modal, Popconfirm, Skeleton } from "antd";
import React, { useState } from "react";
import isEqual from "lodash/isEqual";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { AddEditContactComponent } from "./AddEditContactComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteContact,
    toggleContactFetchSuccess,
    toggleEditContactMode
} from "../app/features/contacts/contactsSlice.js";


export const ContactInfo = React.memo(({ contact }) => {
        const { user } = useSelector((store) => store.auth);
        const {
            isContactFetchLoading,
            isContactFetchSuccess,
            isContactDeleteLoading,
            isEditContactMode
        } = useSelector((store) => store.contacts);
        const { uploadedMedia, isMediumFetchLoading, isMediumFetchSuccess } = useSelector((store) => store.media);
        const [isHovered, setIsHovered] = useState(false);
        const [deleteContactConfirm, setDeleteContactConfirm] = useState(false);
        const dispatch = useDispatch();

        const isAdmin = user.role === "admin" || user.role === "assistant_admin";
        const isBarangay = user.role === "barangay";
        const isContactCreatedByUser = contact.created_by === user.id;
        const canEditOrDelete = isAdmin || (isBarangay && isContactCreatedByUser);

        const onDeleteContactConfirm = () => {
            return new Promise((resolve, reject) => {
                dispatch(deleteContact(contact.id))
                    .unwrap()
                    .then(resolve)
                    .catch(reject);
            });
        };

        const emailsArray = !contact.emails ? [] : contact.emails.split(", ");
        const phonesArray = !contact.phones ? [] : contact.phones.split(", ");

        return (
            <div
                className="bg-white border hover:duration-300 hover:shadow-md hover:transition-shadow mx-4 p-5 rounded-xl space-y-2 md:mx-0"
                onMouseOver={ () => setIsHovered(true) }
                onMouseLeave={ () => setIsHovered(false) }
            >
                <div className="flex items-center mb-3">
                    { isContactFetchLoading ? (
                        <>
                            <Skeleton.Avatar active loading={ isContactFetchLoading } shape="circle" />
                            <Skeleton.Input active loading={ isContactFetchLoading } block />
                        </>
                    ) : (
                        <>
                            <div className="flex items-center space-x-2 w-full">
                                <img src={ contact.logo } loading="lazy" className="select-none w-9" alt="logo" />
                                <h2 className="font-semibold select-none text-lg">{ contact.name }</h2>
                            </div>
                            { canEditOrDelete && isHovered ? (
                                <div
                                    className="flex-1 flex flex-row items-center justify-center ml-auto space-x-2 text-gray-500 text-xs md:flex-row md:items-center">
                                    <Button icon={ <CiEdit /> } type="dashed" onClick={ () => {
                                        dispatch(toggleEditContactMode());
                                        dispatch(toggleContactFetchSuccess(false));
                                    } } />
                                    <Modal
                                        centered
                                        title="Edit Contact"
                                        open={ isEditContactMode }
                                        closeIcon={ null }
                                        onCancel={ () => {
                                            return;
                                        } }
                                        footer={ null }
                                        wrapClassName="add-project-modal"
                                        width={ 800 }
                                    >
                                        <div className="pb-1 border-b-2 mb-3 select-none">Edit the details of the contact.
                                        </div>
                                        <AddEditContactComponent mode="edit" contact={ contact } />
                                    </Modal>
                                    <Popconfirm
                                        title="Delete Contact"
                                        description="Are you sure you want to delete this contact?"
                                        onConfirm={ onDeleteContactConfirm }
                                        okButtonProps={ { loading: isContactDeleteLoading } }
                                    >
                                        <Button icon={ <MdDeleteOutline /> } danger type="primary" />
                                    </Popconfirm>
                                </div>
                            ) : null }
                        </>
                    ) }
                </div>
                { isContactFetchLoading ?
                    <div className="flex group pl-3 space-x-4 md:pl-2">
                        <Skeleton active loading={ isContactFetchLoading } block />
                    </div>
                    :
                    <>
                        { (contact.address === "") || (
                            <div className="flex group pl-3 space-x-4 md:pl-2">
                                <div className="mt-0 md:mt-1">
                                    <GrLocation className="h-5 md:w-5 md:h-4" color={ "#075985" } />
                                </div>
                                <p className="break-all group-hover:duration-150 group-hover:text-Thesis-300 group-hover:transition-all text-gray-700 text-sm w-full sm:text-base">
                                    { contact.address }
                                </p>
                            </div>
                        ) }
                        { emailsArray.length > 0 && emailsArray.map((email, index) => (
                            <div key={ index } className="flex items-center group pl-3 space-x-4 md:pl-2">
                                <div>
                                    <HiOutlineMail className="h-5 md:w-5 md:h-4" color={ "#075985" } />
                                </div>
                                <p className="break-all group-hover:duration-150 group-hover:text-Thesis-300 group-hover:transition-all text-gray-700 text-sm underline w-full sm:text-base">{ email }</p>
                            </div>
                        )) }
                        { phonesArray.length > 0 && phonesArray.map((phone, index) => (
                            <div key={ index } className="flex items-center group pl-3 space-x-4 md:pl-2">
                                <div>
                                    <LuPhone className="h-5 md:w-5 md:h-4" color={ "#075985" } />
                                </div>
                                <p className="break-all group-hover:duration-150 group-hover:text-Thesis-300 group-hover:transition-all text-gray-700 text-sm w-full sm:text-base">{ phone }</p>
                            </div>
                        )) }
                    </>
                }
            </div>
        );
    },
    (prevProps, nextProps) => {
        return isEqual(prevProps.contact, nextProps.contact);
    }
);