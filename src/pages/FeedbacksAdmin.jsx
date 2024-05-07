import { useWindowSize } from "../hooks/index.jsx";
import { useEffect, useState } from "react";
import { IoReturnDownBack, IoSearch } from "react-icons/io5";
import { Button, Modal, Select, Tooltip } from "antd";
import { project_tags } from "../utils/data-components.jsx";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export const FeedbacksAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [feedbackMode, setFeedbackMode] = useState(false);
    const [value, setValue] = useState();
    const { width } = useWindowSize();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/project" || location.pathname !== "/singleproject") {
            sessionStorage.setItem("scrollPosition", "0");
        }
    }, []);
    const handleSearch = (newValue) => {
        setData(newValue ? [
            {
                value: "1",
                text: "Brgy. Linao"
            },
            {
                value: "2",
                text: "Brgy. Linao"
            },
            {
                value: "3",
                text: "Brgy. Linao"
            },
            {
                value: "4",
                text: "Brgy. Linao"
            },
            {
                value: "5",
                text: "Brgy. Linao"
            },
            {
                value: "6",
                text: "Brgy. Linao"
            },
            {
                value: "7",
                text: "Brgy. Linao"
            },
            {
                value: "8",
                text: "Brgy. Linao"
            },
            {
                value: "9",
                text: "Brgy. Linao"
            },
            {
                value: "10",
                text: "Brgy. Linao"
            },
            {
                value: "11",
                text: "Brgy. Linao"
            },
            {
                value: "12",
                text: "Brgy. Linao"
            }
        ] : []);
    };
    const handleChange = (newValue) => {
        setValue(newValue);
        setIsModalOpen(false);
    };

    return (
        <div className="h-full max-h-full overflow-y-scroll pt-4 px-0 md:px-6">
            <div className="flex h-full w-full bg-white" data-id="1">
                { width > 768 ? (
                    <>
                        <div
                            className="bg-gray-100 border-gray-200 border-r flex-col mb-0 pb-4 pl-4 pr-2 pt-0 w-full md:flex md:pl-0 md:py-4 md:w-[300px]"
                            data-id="2">
                            <div className="flex items-center justify-between mb-4" data-id="3">
                                <h2 className="font-semibold select-none text-base md:text-lg"
                                    data-id="4">Feedbacks</h2>
                                <button
                                    onClick={ () => setIsModalOpen(!isModalOpen) }
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                    data-id="5">
                                    <IoSearch />
                                </button>

                                <Modal
                                    title="Search User"
                                    centered
                                    open={ isModalOpen }
                                    onOk={ () => {
                                        setIsModalOpen(false);
                                    } }
                                    onCancel={ () => setIsModalOpen(false) }
                                    footer={ null }
                                    styles={ { header: { userSelect: "none" } } }
                                >
                                    <Select
                                        showSearch
                                        value={ value }
                                        style={ { width: "100%" } }
                                        dropdownStyle={ { maxHeight: 400 } }
                                        placeholder="Search for user"
                                        suffixIcon={ null }
                                        filterOption={ filterOption }
                                        onSearch={ handleSearch }
                                        onChange={ handleChange }
                                        notFoundContent={ null }
                                        options={ project_tags }
                                    />
                                </Modal>
                            </div>
                            <div>

                            </div>
                            <div className="overflow-y-scroll pr-4">
                                {/*-----------------------FEEDBACKS-----------------------*/ }
                                <div className="h-full space-y-2" data-id="7">
                                    {/*//TODO: map the FEEDBACKS here*/ }
                                    <div onClick={ () => setFeedbackMode(true) }
                                         className="flex items-center gap-3 rounded-md bg-white p-3 hover:bg-sky-100 transition-all duration-200">
                                            <span
                                                className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                                                data-id="9">
                                                <span
                                                    className="bg-muted flex h-full items-center justify-center rounded-full select-none w-full"
                                                    data-id="11">
                                                    OD
                                                </span>
                                            </span>
                                        <div className="flex-1 space-y-1" data-id="12">
                                            <p className="font-medium select-none text-sm md:text-sm" data-id="13">
                                                Olivia Davis
                                            </p>
                                            <p className="dark:text-gray-400 line-clamp-1 select-none text-gray-500 text-xs md:text-sm"
                                               data-id="14">
                                                Hey, let's discuss the project details.
                                            </p>
                                        </div>
                                        <span className="dark:text-gray-400 select-none text-gray-500 text-xs"
                                              data-id="15">
                                        9:15 AM
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 md:flex flex-col" data-id="24">
                            <div
                                className="bg-gradient-to-r from-cyan-900 to-sky-800 border-b border-gray-200 flex p-4"
                                data-id="25">
                                <h2 className="flex-1 font-semibold select-none text-lg text-white"
                                    data-id="26">Olivia Davis</h2>
                                { width < 768 && (
                                    <Tooltip title="Back">
                                        <Button type="text" onClick={ () => setFeedbackMode(false) }
                                                icon={ <IoReturnDownBack /> } />
                                    </Tooltip>
                                ) }
                            </div>
                            <div className="flex-1 mb-[70px] overflow-y-auto pt-4 px-4 space-y-4" data-id="27">
                                {/*----------------FeedBack----------------*/ }
                                <div className="flex items-start gap-3" data-id="28">
                                    <div className="space-y-2" data-id="32">
                                        <div className="bg-gray-100 p-3 rounded-lg text-sm w-4/5" data-id="33">
                                            <p data-id="34" className="mb-2">Lorem ipsum dolor sit amet, consectetur
                                                                             adipisicing elit. Ab deserunt harum quasi
                                                                             saepe ullam. Accusamus accusantium at
                                                                             consequatur cumque ea error esse eveniet
                                                                             excepturi fuga, nobis nostrum officiis
                                                                             omnis praesentium quam quibusdam quidem
                                                                             quisquam quod quos recusandae rem
                                                                             reprehenderit sed sit suscipit temporibus
                                                                             ut veritatis vitae voluptatum! Adipisci
                                                                             iste repellat ullam? Accusamus ad, aperiam
                                                                             culpa deleniti dignissimos dolorum ducimus
                                                                             eaque earum, est id iste laborum maiores
                                                                             maxime nihil omnis quae ratione rerum
                                                                             similique tempora tempore velit vero
                                                                             voluptas. Ad blanditiis consectetur,
                                                                             consequatur distinctio doloremque dolores,
                                                                             eius enim, esse est explicabo illum ipsam
                                                                             laboriosam omnis quod repellat sapiente
                                                                             sunt vel voluptas?</p>
                                            <img
                                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFhUXGBcXGBgYGRgYFRgVGBgWFhoeGhgYHSghGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABGEAACAQIEAwUEBwcCAwgDAAABAhEAAwQSITEFQVEGImFxgRMykbFCUqHB0eHwBxQjYnKCkkPxM6KyFYOTo8LS4uNEY3P/xAAaAQACAwEBAAAAAAAAAAAAAAADBAABAgUG/8QAKBEAAgICAgEEAQQDAAAAAAAAAAECEQMhEjEEEyJBUUJSYXGBI6Hx/9oADAMBAAIRAxEAPwDQWrS3LbW291gVPkRFfP8AjLZR2Q6lWZSdgcpKz4HSvf8AAGGjrXi3afCn291smQPdvMqnwuGYP+J9aK1aAxdAIim06K4aGEEtKuc66ahDlOFcpCoQI8B4kcPfS7yGjjqh3+4+YFew2iGUMpBBAII2IOxrw6vQ/wBn3Fc9o2Se9b93xQ7fAyPKKtEM125wuTGOeThXHqMp/wCZWoBW3/aPh2y2LjRMuhjxysPk1YiaogqaK6aQqEHW2ggwDBBg6gwZgjmKPYfiuHa5cdsOq53dlXMci5mLBdAO6JjQDQCgFaDjnA/YWMDcG+IsNcfX6XtGI8v4b2h6VEyNWVceLpPfygH3Qsez/tjT76qBYg+ImrdvDvl7oGXxO56kVxMMTMA+I6Hl5jlUZSKNxKZJqzeXqIqAioy0NBqQXGiAdKZFPUVRZb4dhGdgoMA7x0qqB+NW7OKyiBzqOxaJ15AVERkDWq9R/YtgiLeJukSjlEGmpyC4WjqO+o8wa87wOG9rcFvYtovQtuAfA7eZFe09m+H3LHD7sEM/e9mqr9EW0iBtObMI8ql7JWjz7F4p2W82DtH2TO7CVGYKdRmA0SdSAYJHjNL9nWF/esfZa8qhbbszqw9427b3AArDkQsjpWj7N4XLg0WNSuZvF37zT6n4Cm9l8G9nHG7IhLV11B53XyWVI8YuH0WhXHnVBuMlC7ML2xS5Ju3ZD3LtxoJlobXWO6NoABOg8KzuFWWGscz5Detd254l7a42HhQbT7jXOQuU/OBG0UBucGvIBmUguuYdMnNiRyozALodjMWrKS6DMQoSNMtteoG5NDgkmBH21zEPLHnGnoK7hveB6a/CqIX8TgHU3AwgqFzRBAJ5dfhNDhaMjnPSpbt5su57xLH7qWBILjMYHMxrUIX2wdwAyjAC0JmRuYHveu1UMNhWZgJA8SQAB1JO1XeIcQVg2VrhLtPeI9xdFBjc7nptVPD3CBppJAPWOk7xUIXsaiqGlizMREAquRdjmaJk7abVSW6o5L8CftJFQ4gnMcxJM7kya5btk1CH0ZgMPmWRuK89/avwci6twAWxlkliQtxzvlJ7ueAZUGe7PPX0Lg2MCuQdm+dUP2l2bV/A3A4Oa2Q9sjk46+BEj4UVfQJ/Z4DrXKeyUyhhRpp5FNNdU1CCpGlSqEO1f4HxI4e+l3kDDDqh0P4+YFDxXahDc/tDxga2ig/TVh5ZHE/bWFq7iL5e0mYybfc8csSv2SP7apVGQaacBVjheE9rdW31OvkNTW6u9jsObfdDK0e8GJ18QxIoc8kYumEhilNWjz016l+0XglxOG4FyNLKpZfwLWkE+Wa3HmRWBsWUw+Kt+3Ga3buobijc2wwYxPVQfga+ne03B7eNwV6wpB9rbm224D6PbPlmCnyrad9A2q7PmvhzKBzEUd4falS5GpHwXf1oZ2V4acQ5RmZFX3ojNm5jUaR5VscXwhbFvuFmUypzQchYd0yI7pIy6zqy9dMTmugsIOuTPMnvltWJJOtRmo7d4QJFT21zCRrWwZGaaraCnXxA86js+VQhYsasBWmtcKb2ci3cYD3sqMwnfUqNKzWFtOGDge6cwHUjUD4xXuT2ltWUtpoqjKOvUkk7kmSTzJNZc0kzaxttWeZdk+GtiMWsCFtnMY5kEKq+ZJHwNe/2sMqKqjkPt5/bWS7LW7Ku95R3yQtyOZ1yNHh3xPiOgo9xbHZbZaYEb1IST2VODi+IAvhFznQKXciOhYnT41m3w6OmIu3TKW1yrBKnMwaYKkQwGXeR39qsdpr5NolDoBOk7a/qPlvWfxl3LhsJh5k35xN3QiFb3AZjl7Mf93QXt39DFVFL7MhgrSi/7K+JVSZI0OVdZGo3A686N4/HkWWyYgMb8D2dxe+thScgzePSIiazfEu9dc/0+pCgfdUOVrjAT3toOkxtE6Cj90xZ6bQ+5h2+of7dR+VFbPBHIyI6Tkz3J7pUDUKZ1JPQChuAxF2yVuJyPdG8ka+7+VEeLcausr2rwQuz5ncDvTyWfqjoNNOdXsrQIxauTLLHLTYR5VLhLBXJcZVIMlVaTnCMJkD6JMr6N0q9wDhzX7gUOQoILk7Ksx8SYVd5J6TRzi3E7DYi1Y9k5S1IyKQTJAUJCkyQIBIO4J3JmiGOxerZoAzd6AIUSSYUcgOQqbA2WZSFUscybCdzGvhtRnjNsewWMNkFu46ZmYF9yYYb6banpXOz7uBdti/atK6GZgyRsADz1NSyArG8MuJcZXUoQT72kVGtq2Pecz4CRRHj2LRxafM9y4Uh2fqNNOcfhQv97blA9Kso+msD2Yg5rreOVfvNSdqsIr4K9ZtKMzL3YGpZWDDzOlXruJY1D7TrR1EVcrPlnEWipgwfEMrfImKhJr0T9sHC0t4lXtWhbV0zuwgK90uw0H1oEmN5mvO2oUlTGIu0NajXabhS4Z0VCWRktuGOhOZFYyBtqTpy25UFipBcOXIfdmQOh20/ComW0ccfbqKZT83djoZH3/dTKogq7XKU1Cx6vEjkdD8/nTKVImoQK9l7+TEKfAj4xXp6XwR6V4/hr2Rw3SvSMDipUHkQI9KUzx3Y5471QB7c8JIYX0EqRD+B2B8jMfCvX+zuMvNg8LmZv+BZ8P8ATXpWEfvSpXMCCCDsVP3V6VwaL1pXWFEQQORXQgD5eEVrFJtcTGaFPkYLHYS3YxOJuW1iSGbpnygvHx26zV/h+JS4rKTKsjjzGUzQJca17DXLmoYly0jUNJJkctZnpUvZU+xuLZb3gSPKdR9hHxofbsPxqNGL4X2Gx14Aiwba/Wun2f8AynvH0Fafh37LYM4jEE+FkRr/AFv/AO2vVrG1S5B0FNOMn0xG4r4PMMd2Cw2mQOCOZYt8QdKGN2LYHRtPL8K9fOGT6i/AVG2Btn6A+0fKgPBl/UHjmgvxPKsJwBleIOUfS8fuFHe1mKa3aYg6anUEH7a11/hFs6iQfOR8D+NZXtPwF7gW2LuZy25kSCZnLrooO0nbWqWKcb5BPWjNqil2bxvsEsXDMXotN4l2ENHPvwfImtD2oDtYOQnQgmPq8/uqjwjCTcw9lUn2FvPckAkErkE/zFmJ/sPStGRrB+H5VT0R7ZiuE4v+HlukMRueRXcEg+Eg+XjVw2cPdaw4IzkXUZo7vd9kLQzDQDKrADqD11rdqsEuHw99tA10pbtk7hZzt8o8QvjWLweLe0vdYD6wPeQjYyDyOumvnW61ZSlf9EPavgT4W/DjuuMykGZiAQdBrt8aAZO9z+8npRxsfhypDi40sSFUnIDPL2k5dPq+VB/3xlJ9n3N4IjOAf54mY00imIvVCs1u7CDkKCM5XEK4QAe6ijvGG6g9zwI6UN9g7PlAJYmI8fM7eZquNNqnXGuJ26c9tdNDtsfMCoZDyY/93snD2iCzwXZZzTrJB3AghV5++2mZZEXyylLoBRicr6FSLimTppEqUPnm6VRDnr49NfSpHvswhmJBIJkzrtJJ8CahZJibhOeZJLSSdTJ8TUNjerrraE57kygIyDMc/QkwB9tVLN8KZCKdIhpI+YqFDWOgA8abl6wKfexTsACdFEAAAaem/rUQFQh9Y5etIJUAxiH6Q+IpXMfaUS91VHiRTImQ8W4LYxKG3etI4IIEgZlnmjbodtR0FeAds+zD4G+bZYOh1RxzB5MPouI1HqPD3C7xu5iCbOBWWMg3Doq9Tr/v868441xIFLmGt2A+Yn2l6/7zODGZVBkEGYMiOlCnJdB8aa2eakVyiXFuGm0RGqnbz5j9eFWuznBvbNncfw1O31m3jyoUpKKth4Rc3SKuB4HduLnAyryJ+l5Dp40PxNhrbZXEH5+VeogiI0qpjeFJdEMoM/r0pZeQ730Ny8VVrs81rlaLifZK6kta746aBvQ86z72ypIYEEbgiCPQ0xGSl0KyhKPY2kBUuHw5cwBRfD8KPn5VUpqJcMUpdAb2RrZdmsUCirPeAgeIO3yj4UHvcOPIfjUNjNaZWAMgj4SNPlQ5NTQeEHjdm3bET3R3XG2u/ryo12H7Si3dNpyVDnvKdMtzYH+WeY2OhHiCTh5xT23SFyyLitPTQgCDmBnQx85k4l2duWwWAa50ZdLi+msj0I8BvWYJpckayST9rNf2ywsXPb2llXUreyjVWX3bkfSkEgnX3FqHDcAyezuASSEZjBzAgAyAPQR+hS7EY2+7NbuMzKkKC6EPmO0NJzLE7+FaTtNxU4awbqoGYsiLmbKgLsFBdo7qid/xo6xxl7vsXeScPb9F5MQB9F//AA7h+S08YxObR/UCv/UBQ+4cWiZibFxxqyhXtrE65SSxkDr+VXziQE9oZCwD4ieXnsKNQvbJrd5W91g3kQflTjQe7xW2wlkUqNyxGg8ZGlT8PxVm7bL2CpWcpyxGYcoAPWdjvVtEUggahugGVBAaCBzInSaqlPD7P/rqscUttiTGug2jYdKrSVspXJpIK8H4cuHTIneJOZmPvu3Vjz9NBtV90B3APnrQnA8XttoWAPKTofw9aJXLlVFxa0ampRe+wfd4ajFmYA6woIDAARyPUifhWf7QcFd7bKqqwPL/AOOnzrUXblUuJ41bVsux8hzJ6Ch5MUGt6N48s09bPCeL8Be05UqyncBgRI2nX11oLiLLKYYRW949ea7cLtEn4gDYDw8PWgV22Njr6UvDMOS8e99MzBpUVxOAQ+4YPTl+VDbtoqYYQaPGSfQtPHKPZHXTSrhrQM5XaQrtQg6ymZlXbMQPiYrVYIJbQIWuLHg6zJ3gT+hU/BOBPZRnuL3iBMHVFgNuRAIO+406TVg4e4SckMBpJJUz4iDr68/QM4o8dsVyy5OkNs8YufTVW8jcX5NH2Un4mSRFtRHMlmPxOtXuE9j8Zfg28Ncg/SYZE8wzwD6TWx4T+yW4YOIxCJ/LbBdv8mygH0NAtjHELcJxCoLF62AFGUwNO40Tt4E/Cst254G4x7izbZxdAuqEUt728BR1Br1Hg/Zexh7S2hmuBZg3CCdSTsoAjXpRjQCAIHTwFZSNM8Xwv7OMXiFy3ba2lOoLsAwPUKoYz4EDpWg7L/smsYUm5dxNy47bhQLduOhU5s3r6RXozt1oVj+KIg0EmrdJbKTd6MT2k7JIrE4divMK2q/HcfbWRul7TZbgjx3U+RFb7ivFWfcDTp+JrNcRLMD7pHQ6j7a5+Vw5e06GJzr3FC24YaUL4twq1f0cQ3JhuKh9vcssSUOT6w5fjRW3ZkC4pnMPMEHpWVa2gzpqmZleDPb0ABUdN/h+dThSo1UjzEfOtakRBA12B1+E/nVHG4qyH9ld7uYdw7AnaP6hp8RVu5FRaQP4DwVsSW76oq787kdQvTlM+lbThvZqxZ1VJb67d5/Q7L6AUD7OcNRMR7QtJEi2IiNNdZgzJ5ch011xukCXGUDWZkfjTGJRSsVzSk5V8Gd41gbtl/3iwpfSWQbsR+I0+FHrPeVWykSAcp3WRMHxq3bhhKkEHnMzT8lGjHdgZSdU/gZg7EMDVzEYdXVkdQysIZWEqQeRBrmGG5qU0UEwceErmU57oVdBbDkWtARqnPf7B0q3fwwdCh2IjTSI2jyqUCnAVdlUY/ifZK88C3fVYMyVJ+KbNz3NGsNw/wDd7BVArv7zQuUO2gJC6xsIBJ23ovFRYmI9fD76tty0YSUXZl+Gdo7dwsGXKygkwBsIBnSRuOdEcMtvEBp1Uj1BEag0J7TcKChr9oQ7DI8aBgTM6ACdPWaFcF4lcSy6qD9MExKgsDueW1LPJKD4y2hxYo5Y88enZaGEm4Rh87lQSykiYBUErAE+8NN6LcF4ix0kwNNdlIkEa7HSIoR2X9+4zgEkACSQRJJJBBkNoNQZ3oy3vEzLtlzHacogT6c/Cgxpe5PYxNttxktfZfxHElSC+kmNPwrNcTxjXHJZSI91TplHj4nn+VVsdfNzEKoMoDJMnZdTp46D1oy7K+joGHP8juD4iqySeRVZmGNY3aRjOIWhvlnWNCAB4mdTQy8ogiI++txiOBq8G04K81bRx67H9b0Jt8HJYnIyx1H2wRS7UoaYwpxkZBsGeQgeNcfh4Ihtf11rT4+0RIZT8I+75UKXDMxIRGb+1tPgNa2pyZGogZeCWxbutmYuAciwIiCSSZktplAgbzJrOxXolns5in/0yo6sQv2e99lTnsAHM3rsHn7ManzZtP8AlpnHkf5CmXFH8TzWtJ2Z7Nm7Fy6CLe6jUFvHwX5+W+uXsDgwIJunxLifsUD7Ku4vAG0oNskqABBJOg013+I350xjlFvYpljNLRHdvMPchzrOsNPkd+f51jeIWZfvyp+qGCgbnRWQwNeWnzJbiWIVx3lMrEEEBxPQjcc51BAoO/ELgMDEmOWcHN60aUgEFR9VVwmlXKFQxYjXDSmkahkEcSvGSo0oBibfU60f4lY1maDXyOVAyhsYCxVmetDb+HPWtBiE9KA4i/JItI9w9QIQf3vAI/pzHwrnThvQ9jkUL2FU6HX5VDwy4LT+xPuNLJA0DblfXU+c9aILhG3uZQeikkD+4gT8BXbXCDiGyI4QrDFokjWNOpnxqsXLlSCTceNsFtxINdbC3Rlf3kaYL2yAZHRlM7dPA1Uxdlbh9jiFzxDowiXCnccgw2PnMQaOcX7NO12wfYi8quJfNkZNPeAnUSJgH6u/J/E+zdxtFB3kEESrcjruNx68+bvCXdC/qR6szP7xiMPZz4jZcy57ZOcqNA0fRPMHw1itLa47fw7ezxCi4IBDAZWZTs0RB8tDIMmpOD2MRZvpbeyChWWcGQH+Hl8fDU/xfhi30iBnXVSevMHwP4Gr4y43Hsy5x5JS2hvDuJ2b0ZG1+qe63oOfmsirC+0zkFVy8mB1j+YHf0/OsU+GOoK6gwQd5HWav4Hi1639LOPqvJ+Dbj4kDpWMfmXqSLyeLW47NvZSFrhP63pWMRbfRbiNy0YH7BU2Wn076EXrshB/Wny3rpnp86limxUMsYT+oNMvAwN/SfuIqaKiv2c0d6I6BT/1AxW0Yk9A7G4b2iMkgEjQ6GDuNiSR61hMZwnEWHdspKN75WSoiYJ5qJ6gV6T+6CNWdvNiB8FgfZXCVXQQPKs5cUZ7N4M08eq0eccF4kEYlhoYB6iJonxziyexJsXAWzKJUSBzj4birvH+zS3Qblju3d4EBH6z0Pjt161kcfw2/bQB7T75jCkgsdN1kcqRcJR0dKM4z2H+xdpMtx3MvIHkIzH0JI/xFHLt+0Og868/sYm8gOWzc+r7j7mdDpv3tvBahvXb7iBbub6aNAOug030OngelRcqpIjSu2zYXcaqvKx0PSrlrF+UeZrAW8BjPeNq7knfIxHTpV63xkKIMg85rLUok9sja/vH6mmnEeNYw8eHWuHjQ61LkVSNe2JqK5iqy68YHWpDxEHnVWy6QWuY8dRVG9xfLQrEYnxobiL1Wk2TSJeIXA0lDrr3T0PQ8vI6bbQIz129rrpGkHSrpvQajuXATrTEZtdi88cW7Wj6xJroNMNNLkcqMLWSFqazVE1zwphao9E7IMdZzDxFA7yMDojH0NH2amUOS5G4ujK4mxJllMjbQ6eU7GqN6wZmSPDr51tmqNqXlgT+Q0c9fBhruGnemYI+xuBxsNCOqnf7j6VrOKXAqMfQeZ/Ksxcw8kGToZgGAfPwpXJj9OSaYzjyc00+jSwDBGoOvhTCtVOD35HsydtV8uYq7fuKilrjBEG7MQijzJMV1Mc1OKaEJx4yojK8qE4rj9pXa1bW5fuqYNuyucqf520S3/cwqnxbtzh7cLaBvOSQuXupmECMxEzJGwM9aD3v+18ZIkYK0fNXM8wP+JMaQcoNWVQT4n38hui1ZxDkgWDeRrjrplOwl+ULI2gk6VTs4Jm7qqZnbbbQ771UwHY/h9m4FvucViNyrmYPMm0p7o//AKEjat5h1HvRqQBPOBsPKlp+NGUuS/sZh5Eoxpgjh3Bltd5oZzzjRR0H3mrhZl2Yj1q9cSoTa/X6/OmYxUVSF5ScnbIRi7g+l9gNUeKdpf3cK1zUMYGUS3id4gf7TRMWAfw/Ko72DDAqwBB3BEg+YOlbTV7MSTa0Mw3EzdQXLbqyNsR9u+xHMHUVy7ccggs2oI0JU+hWCDVS7weGD2Xa0ygKMutsoNla0dCu+2UiTBFELQJ0YAN4ag+U/L571Vl1oqqCBBJgcyzM3qWkn1pxcAZmYKBuSQBHiTVh7dZXtxgg9u2xcgKxGXTvZo1AJ3EeOhOnI2mvydIpqT1FW/oOY257S3cTD3VFwaaHVSCJmNVOhExQDDrdV7TI2IN2VRwwdLbCA4zBlbdGCycv/DMlW0LeBX7N2+pVWFwDMWlpMSpnUCSACe7BzHWdK1wadqzjy2tF5MEov3rZy9YVjOoaIkbkdCDow8CCKG4HhGUzdhjsFBJEbd5iAWXRYDA7bmSATS4DOUgwSCd4I3Hn4cqSuOXj8dq3ozT7JP1/tQHjeIHtMpVGGUSGRH5n6wNE8Ri1WSTsJOhOnoKyfGsYDdJUyO7G/wBUddaXz5FxpPYx4uNuVtaOvwXBXfetG2ettjH+LEx6fCqGK7BqdbF+R0KzHnEEeq1Yw140QtXfGDSsczXasYnh/S6MbiOy+JTYBx1Rh8jB+yqlzAXlnNauADc5Wj4xFeiMQ2rDX6y9256sPe/vDCq9y1dHuOt0fVeLV3b64/hufMW6YjLFL5oA1lj8WebPigN3HxFVL2PTrNaji/Z21deMr4a82yOuVXO5K/RfzRjzNZ3H9lsTakm2WUfSTvfEDvD4R41fFE5tlBsYKj9oTrMUksdKkFmpoupM+vi1MJrk1VxmKyRAkn7B1/XjR6FWya5UZoMeOr7UW81vMeWbvRqSSJ00BjqQeQmi4adqw+zUdo4a5Tq5WSxjUx+Zp5qLEXQoLHZRJ+77flVMsxX7Q+LtZQInvswUc4J7zmOgUR5sKEYLiTtGahPGsd7fGuZkWptjp7Qw1w/GF/sorgUJ2HrXN8iVyOnhglAM2bpEMDBGtUOPcMwmJue3xGIe2AoD22uqtuV2I9pOUEcl0bfRpq7Zs1Dj+FJdXK4B6eB6itYMssf8A8mOMwQ3azB4eRgcObj7ZwCikdDdcG4w8AI6Gqlm/wAQxzZfaezTmLcogH8zA528s2vToW4V2WloCgAbseXl1NbTB4FLahVEAfaep6mm8csmXfSAz9PFpbYI4F2etYdMiL/UebHx/Dx86NBco2J8tYrmKxK21k+gqPBY4OmcjIJgExB8jz502oUhNzt7Jxrsadkpr2wdRoeo3/XnVX2l62O8Par9ZBDx4rsT5VaRTlRcNsUzLH60/Km4TF27g7jAxuNmHmDqKmqUS7Isopj2RUtyAJ5DXXYevKs3xHtSttotrniZJ0+A5+u8RpvWZNLs3CMpOkE8diBbHe1J2HM/l4/PaslxW77Qy2p28AOgHIVYbG+1lg2Yned/Ucvl0qmy9a5fkZ3J18Hd8Pxo41y7YCxGA1DKSCDIIMEHwPI0b4V2iuplS93kG7AH2kcuevz+9jWqrXEFChnlHpjeTBDKqkjZri0NvNbKkbLl2B5COUdPCpba5QB0FYJb7IwZDBH3dQdDRfD9pc0Zz7Nh0Eo+2hJ1Q+OvPyp/B5CnO5aOT5XgTx4/8atXb+w1xCy8M1qC8aBtsx0k9RzyyJiJEyMMUYHI5747rbe8ND7um87aVt8HxRWyhxlZhIiSMo1k/Vka+o1nSsjhB7S+zcizN8WJrfkYox6XYt4mVyTt9Fqxaq0oqyLNI26WcAvOyMNTxcppWmGsOJpMsC5KlTBU7qwDIfNTIPqK7ayj3ZTyl0/wYyo8FYDwqnmpe1q4zlHozKEX2Bu1fBr9657VFW4oUKBbMuAJJLKwDHUnYHkOU1kntkGD3T0OhHoa9JFypWxJPvZWPVlVj8SJrfqJ9kSa0j1gmgnG+ztjEybylvAsxX/AnKPhRhzyHrTJp2W9CEdbMthOyFm0f4ShQOg/CtHYSBFS1wChqCXRtyb7ETXJrorhrRk4TWW7e8a/dsM7cwMwHVj3bYPhmIJ8Aa07+O258hv+vGvE/wBqPFzfxC2F2HfbzMqg9Fk/3iqat0aTrZW7HWAULt3mLak6knKpJ85rb4awQNIrPdiML/Bc8luOPgYHKtbYUnYUhlxv1G2PQn/jSHpbqzhMGW1O3X8PxqfCYKdW2+f5UTC8qZweNful0K5vIrUeyNEAEDQV0iu3AY038ah9qR70A/ZT+kJ7ZFiMCriHk6gnbWJgeA8oofi8Ldu3Ah7tsAEkbAfVGkE6ctB8BRsLXJrSdGXFMCHGMHWzh1AjSDsANyTvv+GpMUSOPthwhbvHQdJ2386fawiKCFULIAMaExtrVZOHKjm4oljos7JpB3/XIVNMi5Ifi+HI5zkQ42dO7cHrz067VXS5iLZggXrfVe7dXzQ+96a8zXMB7TO7s59mMwEiM0HU66qo18zTMfj82i6L12LeXQfafmHLkWNbD4MUsr0VuN3UvW8ktBKsSGZD3SGAlSDuBPLzrI4zDMkkyy/WjvD+oDf+oeo3atFceahZa5c/Ik5WdzF4sIw4/wCzINdKd9Wjow2j5EfZRReJIcmbullU+EkbeHIieRqbF8FtOZyKGmcwUST1PX5+NBeJ4J03EjruP151bcMui0p4draDrCq2IFCcDxB7fiv1T93SitrFJd90w31Tv+dLTxSgN4s8ZfyU7tomqzWOtFChqljLuXSJJ2HM1IyfwM2QJj2s9233mfuhIknWdDErB1kUa7N4OEzEan5VZ7OdnAP4t4S5G3JQRsPGp8fiPYFQ66M+RMveJnUSAJECZ5CN66eOEuKs895meEpvgv7+y3kphSnJdBEg6U6iUJqRWdKr3BV9hUF1dKFKASMwbcaq7XKWLugGKom9S7iMJl5btSe1qglypPaVijR7ZXDQVe0tk8m9Mh/9VSrx6yfr/wCP4E10OcfsQ4P6CtdNDV43Z+sR5q34VIvF7J/1B6hh8xU5InF/RdmuTVYcRsn/AFbf+Q/Gni+p91lPkQau0VQO7R44WrLMTEgyeiKJY/OvCOG5sReuYhxqzT5SRA8lUBfQevpvb3Fm4rIn1WUSQBoDzJAEtl35A155hMQli2EFyxmG4zs5zDwso/jzFaxNXyZnIpVxRtOwa/wbg/8A3Xj/AOYR9wrY4OyCdT6daxn7O8xsZmUqWZ2gzOrMRv8AgK2YQcz+vOl1JOV97Yw01Gv2CIFMW5rBEH7D5Hn9h02qC3jANDr4j9a/rerYIcaQwOh6eRB+Rp2GSMuhKUJR7IHvZT3h3eTDl59POniGEiCD6iu5GXbvDoTr6Md/I9d+VQi0JlDB5rsJI5qRvz5T11mtmUVGwLoS1lzBMm2xlZ/lJ2PhI840ruG4mhbI4Nu59V9J/pOx+Zq57cD3hlJOkkQemu3pvTMbgkurluIGHjuPI7j0q/5K4tdErGuihBtXrOtr+Mg+g2lwDwMany5aBedXcPjFuaCQeanRhyOnOs0aTKPGLpkA+79kzpPw05UMdpo/j8Hm1BhgIncR0I5r4Vn7y5WykQ0TlmZHVDuw023HjXN8rHK+Xwdjws0OKj8kZFQuanmaiuJXPkdSI5k0qB0kEESOYPOrIOnjUbCpIkQDj+DgyU36fgT9/wAeVZq+rIxBkEehrfPQbji2yhL+h5/n5f70THmadMHPx1LcQPhuO7Jc1Y6KRuT4/j+hpuz/AANp9tcEtGi7Eep0n9eXn/CcD7W7mcws92djFep8FxD24VmLp46keIO5HgZ8OhZj6cMmxPJlyyxcf+huyV90bjcc/hTLmHUkEqJEwYEiRBg8pFO9vadggdS8ZgARm8Ssb+Meu9SFafVfByn+4LxOAUyR3T1H3jY+tUblt094SPrL967j0mjxFRstRolgZboIkEEVT4jiAikmi2K4eraiVbqNJ8xsfWvOO2HF2W8bW6poWGxbnpJiNvMGhyNx2yXE42TUa3qBWsZPOiFu5S8kMphNLtTC5QxblTLdrFG7PQ+PMonIijyUD5fnWPe62Yg3gkdRbj0BEnY8qVKrw08rTQPNrFaYz/tUL/8AlZvC3aVj9qrTm7RMB3Ld1vEsLY/xE/OlSq8sknSii8ONtW5Mqv2oxQ/00I/quEx6tRbG9ofZ25hLjZUChXDZnKguSYPs7akwAe8xGwE0qVYTX0H4b7B+HwzYu4Lt5dAoRUmQFGpnqSSeXTpWq4bwG0ANAPAAUqVBi+ctl5PYtGiwlhU90VLcHWlSpqtUKXuxppKxBlTB6+HiNiPOlSrF10aL1jiAOjwp6/RPr9HyPhqasXUB30I2OxHr92x50qVP4MjlF2J5caUlXyRMdCGGYbTHzX7x47UwIVgocyx7pM6RplbptpSpUaLtGckVGVIkRgwn9Ax1G+/KuhRM6TETAmPOlSqwZy9dCiT/ALmsvxjA+0ObUtuCNCp/lPh+udKlSPlO3xHPG9q5IFWsYynLe7p5XPoNyAePdbYTsdPIXs3LnSpVz5K42dbFJ2kKaY5rtKgsaRQxuKVFLMayDe0xlyFHcG/SPOlSomJVFy+TPkSaikvk0djglm2O8AdIJ2BGukc9zRBc7f8ADgL9Y8x4CuUqy3fYlZKMGoGozHTVtTp8o8Kt4bib29Gm4vif4gHgx9/+7X+blSpVqGWUHcWZlBT1ILWb6OJRgR8CPMHUetOalSrsY5copnMnHjJoD9peJfu9hnX3z3UH8x5+QEn0A515A6EzOpPXUn46mlSpfK3yobwRXCyBsASZXTx/LanC86aMJ8RSpVmMm3TNTgkrRcsYsHnVgXqVKraBpn//2Q=="
                                                alt="feedback_img" className="object-cover" />
                                        </div>
                                        <span className="dark:text-gray-400 select-none text-gray-500 text-xs ml-3"
                                              data-id="35">May 5, 2024 9:15 AM </span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3" data-id="28">
                                    <div className="space-y-2" data-id="32">
                                        <div className="bg-gray-100 p-3 rounded-lg text-sm w-4/5" data-id="33">
                                            <p data-id="34" className="mb-2">Lorem ipsum dolor sit amet, consectetur
                                                                             adipisicing elit. Ab deserunt harum quasi
                                                                             saepe ullam. Accusamus accusantium at
                                                                             consequatur cumque ea error esse eveniet
                                                                             excepturi fuga, nobis nostrum officiis
                                                                             omnis praesentium quam quibusdam quidem
                                                                             quisquam quod quos recusandae rem
                                                                             reprehenderit sed sit suscipit temporibus
                                                                             ut veritatis vitae voluptatum! Adipisci
                                                                             iste repellat ullam? Accusamus ad, aperiam
                                                                             culpa deleniti dignissimos dolorum ducimus
                                                                             eaque earum, est id iste laborum maiores
                                                                             maxime nihil omnis quae ratione rerum
                                                                             similique tempora tempore velit vero
                                                                             voluptas. Ad blanditiis consectetur,
                                                                             consequatur distinctio doloremque dolores,
                                                                             eius enim, esse est explicabo illum ipsam
                                                                             laboriosam omnis quod repellat sapiente
                                                                             sunt vel voluptas?</p>
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                alt="feedback_img" className="object-cover" />
                                        </div>
                                        <span className="dark:text-gray-400 select-none text-gray-500 text-xs ml-3"
                                              data-id="35">May 5, 2024 9:15 AM </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/*-----------------------FEEDBACK SECTION-----------------------*/ }
                        { !feedbackMode && (
                            <div
                                className="bg-gray-100 border-gray-200 border-r flex-col mb-0 pb-4 pl-4 pr-2 pt-0 w-full md:flex md:pl-0 md:py-4 md:w-[300px]"
                                data-id="2">
                                <div className="flex items-center justify-between mb-4" data-id="3">
                                    <h2 className="font-semibold select-none text-base md:text-lg"
                                        data-id="4">Feedbacks</h2>
                                    <button
                                        onClick={ () => setIsModalOpen(!isModalOpen) }
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                        data-id="5">
                                        <IoSearch />
                                    </button>
                                    <Modal
                                        title="Search User"
                                        centered
                                        open={ isModalOpen }
                                        onOk={ () => {
                                            setIsModalOpen(false);
                                        } }
                                        onCancel={ () => setIsModalOpen(false) }
                                        footer={ null }
                                        styles={ { header: { userSelect: "none" } } }
                                    >
                                        <Select
                                            showSearch
                                            value={ value }
                                            style={ { width: "100%" } }
                                            dropdownStyle={ { maxHeight: 400 } }
                                            placeholder="Search for user"
                                            suffixIcon={ null }
                                            filterOption={ filterOption }
                                            onSearch={ handleSearch }
                                            onChange={ handleChange }
                                            notFoundContent={ null }
                                            options={ project_tags }
                                        />
                                    </Modal>
                                </div>
                                <div className="overflow-y-scroll pr-4">
                                    {/*-----------------------FEEDBACKS-----------------------*/ }
                                    <div className="h-full space-y-2" data-id="7">
                                        {/*//TODO: map the conversations here*/ }
                                        <div onClick={ () => setFeedbackMode(true) }
                                             className="flex items-center gap-3 rounded-md bg-white p-3 hover:bg-sky-100 transition-all duration-200">
                                    <span
                                        className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                                        data-id="9">
                                        <span
                                            className="bg-muted flex h-full items-center justify-center rounded-full select-none w-full"
                                            data-id="11">
                                            OD
                                        </span>
                                    </span>
                                            <div className="flex-1 space-y-1" data-id="12">
                                                <p className="font-medium select-none text-sm md:text-sm"
                                                   data-id="13">
                                                    Olivia Davis
                                                </p>
                                                <p className="dark:text-gray-400 line-clamp-1 select-none text-gray-500 text-xs md:text-sm"
                                                   data-id="14">
                                                    Hey, let's discuss the project details.
                                                </p>
                                            </div>
                                            <span
                                                className="dark:text-gray-400 select-none text-gray-500 text-xs"
                                                data-id="15">
                                        9:15 AM
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                        {/*-----------------------FEEDBACK SECTION-----------------------*/ }
                        { feedbackMode && (
                            <motion.div
                                initial={ { opacity: 0, y: -30, x: 0 } }
                                animate={ { opacity: 1, y: 0, x: 0 } }
                                transition={ { duration: 0.1 } }
                                className="md:flex flex-col h-full w-full" data-id="24">
                                <div
                                    className="bg-gradient-to-r from-cyan-900 to-sky-800 border-b border-gray-200 flex p-4"
                                    data-id="25">
                                    <h2 className="flex-1 font-semibold select-none text-lg text-white"
                                        data-id="26">Olivia Davis</h2>
                                    { width < 768 && (
                                        <Tooltip title="Back">
                                            <Button type="text" onClick={ () => setFeedbackMode(false) }
                                                    icon={ <IoReturnDownBack color={ "white" } size={ 16 } /> } />
                                        </Tooltip>
                                    ) }
                                </div>

                                <div className="flex-1 mb-[73px] overflow-y-auto pt-4 px-4 space-y-4 bg-white">
                                    <div className="flex items-start gap-3" data-id="28">
                                        <div className="flex-1 space-y-2" data-id="32">
                                            <div className="bg-gray-200 p-3 rounded-lg text-sm w-4/5"
                                                 data-id="33">
                                                <p data-id="34" className="mb-2">Hey, let's discuss the project
                                                                                 details.</p>
                                                <img
                                                    src="data:image/jpeg;base64,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"
                                                    alt="feedback_img" className="object-cover" />
                                            </div>
                                            <span
                                                className="dark:text-gray-400 select-none text-gray-500 text-xs ml-3"
                                                data-id="35">March 23, 2024 9:15 AM </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) }
                    </>
                ) }
            </div>
        </div>
    );
};