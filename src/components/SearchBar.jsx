import { Input } from "antd";
import { useDebounce, useWindowSize } from "../hooks/index.jsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilteredProjects } from "../app/features/projects/projectsSlice.js";
import { useLocation } from "react-router-dom";
import { setFilteredAnnouncements } from "../app/features/announcements/announcementsSlice.js";
import { setFilteredContacts } from "../app/features/contacts/contactsSlice.js";

export const SearchBar = () => {
    // const location = useLocation();
    // const [form] = Form.useForm();
    // const { announcements } = useSelector((store) => store.announcements);
    // const { users4admin } = useSelector((store) => store.users);
    // const { projects } = useSelector((store) => store.projects);
    // const { contacts } = useSelector((store) => store.contacts);
    const {width} = useWindowSize()
    const location = useLocation()
    const inputRef = useRef(null)
    const [searchClicked, setSearchClicked] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    useEffect(() => {
        if (searchClicked)
            inputRef.current.focus();
    }, [searchClicked]);

    useEffect(() => {
        switch (location.pathname){
            case "/projects":
                dispatch(setFilteredProjects(debouncedSearchTerm));
            case "/announcements":
                dispatch(setFilteredAnnouncements(debouncedSearchTerm));
            case "/contacts":
                dispatch(setFilteredContacts(debouncedSearchTerm));
        }
    }, [debouncedSearchTerm, dispatch, location.pathname]);

    const handleSearch = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);


    return (
        <div className="py-1 px-1 md:border-b-2 border-sky-200 md:w-4/12 md:bg-gray-50 md:rounded-t-md ">
            <Input placeholder={ width > 768 ? "Search something..." : "" } variant="borderless"
                   className="!text-sm hidden md:block"
                   value={searchTerm}
                   onChange={handleSearch}
            />
            { !searchClicked &&
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-search mr-4 cursor-pointer md:hidden"
                     onClick={ () => setSearchClicked(!searchClicked) }>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            }
            { searchClicked &&
                <div className="md:hidden border-b-2 border-sky-200 rounded-t-md w-full mr-40">
                    <Input placeholder={ width > 768 ? "Search something..." : "" }
                           className={ searchClicked ? "!text-sm !border-0 w-full" : "hidden" }
                           ref={ inputRef }
                           variant="borderless"
                           onBlur={ () => setSearchClicked(false) }
                           value={searchTerm}
                           onChange={handleSearch}
                    />
                </div>
            }
        </div>
    );
};