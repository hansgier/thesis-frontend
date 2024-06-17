import { Button, Form, Input, Select, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteMedium, setUploadedMedia } from "../app/features/media/mediaSlice.js";
import {
    contactSaved,
    getAllContacts,
    postContact,
    toggleAddContactMode,
    toggleEditContactMode,
    updateContact
} from "../app/features/contacts/contactsSlice.js";
import React from "react";

export const AddEditContactComponent = ({ mode, contact }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const {
        isContactFetchLoading,
        isContactFetchSuccess,
        totalContacts,
        isAddContactMode,
        isContactFormReset,
        isContactUpdateLoading,
        isEditContactMode
    } = useSelector((store) => store.contacts);
    const { isMediumFetchLoading, isMediumFetchSuccess, uploadedMedia } = useSelector((store) => store.media);

    // useEffect(() => {
    //     if (isContactFormReset) {
    //         form.resetFields();
    //         dispatch(contactFormReset(false));
    //     }
    // }, [isContactFormReset]);

    const onFinish = (values) => {
        if (mode === "add") {
            dispatch(postContact({
                name: values.name,
                logo: uploadedMedia,
                address: values.address,
                emails: !values.emails ? "" : values.emails.join(", "),
                phones: !values.phones ? "" : values.phones.join(", ")
            })).then(() => {
                form.resetFields();
            });
        } else if (mode === "edit") {
            dispatch(updateContact({
                id: contact.id,
                contacts: {
                    name: values.name,
                    logo: uploadedMedia || values.upload,
                    address: values.address,
                    emails: values.emails.join(", "),
                    phones: values.phones.join(", ")
                }
            })).then(() => {
                dispatch(getAllContacts());
                form.resetFields();
            });
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Add Contact Failed", errorInfo);
    };

    return (
        <Form scrollToFirstError form={ form } onFinish={ onFinish } onFinishFailed={ onFinishFailed }
              autoComplete="off"
              initialValues={ {
                  remember: true,
                  name: mode === "edit" ? contact.name : mode === "add" && null,
                  upload: mode === "edit" ? contact.logo : mode === "add" && null,
                  address: mode === "edit" ? contact.address : mode === "add" && null,
                  emails: mode === "edit" ? contact.emails === "" ? null : contact.emails.split(", ") : undefined,
                  phones: mode === "edit" ? contact.phones === "" ? null : contact.phones.split(", ") : undefined
              } }
        >
            <div className="overflow-y-auto pr-3">
                <div className="flex">
                    {/*----------LOGO----------*/ }
                    {/*{ (mode === "edit" && form.getFieldValue("upload") === contact.logo) && (*/ }
                    {/*    <Image width={ 80 } className="mr-4" src={ contact.logo } />*/ }
                    {/*) }*/ }
                    <Form.Item name="upload">
                        <Upload
                            listType="picture-circle"
                            maxCount={ 1 }
                            accept="image/*"
                            defaultFileList={ mode === "edit" ? [{
                                uid: "-1",
                                name: "edit mode",
                                status: "done",
                                url: contact.logo
                            }] : null }
                            showUploadList={ { showRemoveIcon: false, showPreviewIcon: false } }
                            action="https://api.cloudinary.com/v1_1/ddh4rh4ci/image/upload?upload_preset=ixqbobsf"
                            onChange={ async (info) => {
                                if (mode === "edit") {
                                    dispatch(deleteMedium({ url: contact.logo }));
                                }
                                dispatch(contactSaved(false));
                                const file = info.file;
                                if (file.status === "done") {
                                    // Delete the previous image from Cloudinary if one exists
                                    if (uploadedMedia) {
                                        dispatch(deleteMedium({ url: uploadedMedia }));
                                        (!isMediumFetchLoading && isMediumFetchSuccess) && dispatch(setUploadedMedia(file.response.secure_url));
                                    } else {
                                        dispatch(setUploadedMedia(file.response.secure_url));
                                    }
                                }
                            } }
                        >
                            Upload
                        </Upload>

                    </Form.Item>

                    {/*----------NAME----------*/ }
                    <div className="flex-1 ml-4 mt-5">
                        <div className="text-xs mb-1 uppercase font-bold select-none">NAME</div>
                        <Form.Item
                            name="name"
                            rules={ mode === "add" ? [{
                                required: true,
                                message: "Name is required"
                            }] : false }
                        >
                            <Input placeholder={ mode === "add" ? "Enter name" : contact.name } />
                        </Form.Item>
                    </div>

                </div>


                {/*----------ADDRESS----------*/ }
                <div className="text-xs mb-1 uppercase font-bold select-none">ADDRESS</div>
                <Form.Item
                    name="address"
                >
                    <Input placeholder={ mode === "add" ? "Enter address" : contact.address } />
                </Form.Item>

                {/*----------EMAILS----------*/ }
                <div className="text-xs mb-1 uppercase font-bold select-none">EMAILS</div>
                <Form.Item
                    name="emails"
                >
                    <Select mode="tags" tokenSeparators={ [","] }
                            placeholder={ mode === "add" ? "Enter address" : contact.emails } />
                </Form.Item>

                {/*----------PHONES----------*/ }
                <div className="text-xs mb-1 uppercase font-bold select-none">PHONES</div>
                <Form.Item
                    name="phones"
                >
                    <Select mode="tags" tokenSeparators={ [","] }
                            placeholder={ mode === "add" ? "Enter address" : contact.phones } />
                </Form.Item>


            </div>
            <div className="flex justify-end pr-3">
                { isEditContactMode || (
                    <Form.Item>
                        <Button key="reset" type="text" onClick={ () => {
                            form.resetFields();
                            uploadedMedia && dispatch(deleteMedium({ url: uploadedMedia }));
                            (!isMediumFetchLoading && isMediumFetchSuccess) && dispatch(setUploadedMedia(""));
                        } }
                                className="hover:border-red-700 hover:!text-red-700 hover:bg-none mr-2"
                                disabled={ isContactFetchLoading }
                        >
                            Reset
                        </Button>
                    </Form.Item>
                ) }
                <Form.Item>
                    <Button type="link" htmlType="button" danger
                            className="border-red-400  mr-3" disabled={ isContactFetchLoading }
                            onClick={ () => {
                                mode === "add" ? dispatch(toggleAddContactMode()) : mode === "edit" && dispatch(toggleEditContactMode());
                                uploadedMedia && dispatch(deleteMedium({ url: mode === "edit" ? contact.logo : mode === "add" && uploadedMedia }));
                                form.resetFields();
                            } }>
                        Cancel
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="default" htmlType="submit"
                            className="bg-cyan-600 text-white"
                            loading={ mode === "add" ? isContactFetchLoading : mode === "edit" && isContactUpdateLoading }>
                        { mode === "add" ? "Submit" : "Save" }
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};