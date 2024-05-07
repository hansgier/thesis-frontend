import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "antd";

const sliderVariants = {
    enter: (direction) => ({
        x: direction === 1 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction === 1 ? -1000 : 1000,
        opacity: 0
    })
};

export const ImageCarousel = React.memo(({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [autoplay, setAutoplay] = useState(true);
    const [direction, setDirection] = useState(1);
    const [zoomLevel, setZoomLevel] = useState(1);
    const currentIndexRef = useRef(currentIndex);
    currentIndexRef.current = currentIndex;
    const fixedHeight = "h-96";

    useEffect(() => {
        let interval;
        if (autoplay) {
            interval = setInterval(() => {
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }
        return () => interval && clearInterval(interval);
    }, [autoplay, images.length]);

    const goToPrevious = useCallback(() => {
        setDirection(-1);
        setCurrentIndex(currentIndexRef.current === 0 ? images.length - 1 : currentIndexRef.current - 1);
    }, [images.length]);

    const goToNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const showModal = useCallback((index) => {
        setCurrentIndex(index);
        setIsModalVisible(true);
        setAutoplay(false);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalVisible(false);
        setAutoplay(true);
        setZoomLevel(1);
    }, []);

    const handleWheel = useCallback((e) => {
        if (e.deltaY < 0) {
            setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 3));
        } else {
            setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1));
        }
    }, []);

    return (
        <div className={ `relative w-full ${ fixedHeight } overflow-hidden` }>
            {/*Images*/ }
            <AnimatePresence initial={ false } custom={ direction }>
                { images.map((image, index) => (
                    index === currentIndex && (
                        <motion.img
                            key={ index }
                            src={ image }
                            alt={ `Slide ${ index }` }
                            custom={ direction }
                            variants={ sliderVariants }
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={ {
                                x: { type: "tween" },
                                opacity: { duration: 0.4 }
                            } }
                            className={ `absolute inset-0 w-full ${ fixedHeight } object-cover object-center hover:brightness-75 hover:transition-all hover:duration-300 hover:ease-in-out` }
                            onClick={ () => showModal(index) }
                            style={ { cursor: "pointer" } }
                        />
                    )
                )) }
            </AnimatePresence>

            { images.length > 1 && (
                <>
                    {/*Dot Indicators*/ }
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 z-10">
                        { images.map((_, index) => (
                            <span
                                key={ index }
                                className={ `inline-block h-2 w-2 mx-1 rounded-full ${ currentIndex === index ? "bg-blue-600" : "bg-white" }` }
                                onClick={ () => setCurrentIndex(index) }
                            ></span>
                        )) }
                    </div>

                    {/*Prev and Next Buttons*/ }
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 z-10"
                        onClick={ goToPrevious }
                    >
                        ←
                    </button>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 z-10"
                        onClick={ goToNext }
                    >
                        →
                    </button>
                </>
            ) }

            {/* Image Preview Modal */ }
            <Modal
                open={ isModalVisible }
                footer={ null }
                onCancel={ closeModal }
                centered
                keyboard
                wrapClassName="imagecarousel-modal"
            >
                <div
                    onWheel={ handleWheel }
                    className="w-full h-full flex justify-center items-center"
                >
                    <img
                        src={ images[currentIndex] }
                        alt={ `Slide ${ currentIndex }` }
                        className="object-cover w-full h-full transform"
                        style={ { transform: `scale(${ zoomLevel })` } }
                    />
                </div>
            </Modal>
        </div>
    );
});