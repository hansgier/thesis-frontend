import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollRestoration = () => {
    const location = useLocation();

    const saveScrollPosition = () => {
        window.sessionStorage.setItem(`scrollPosition-${ location.pathname }`, window.scrollY);
    };

    useEffect(() => {
        // Save the scroll position on scroll events
        window.addEventListener("scroll", saveScrollPosition);

        // Restore the scroll position
        const savedPosition = window.sessionStorage.getItem(`scrollPosition-${ location.pathname }`);
        if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition, 10));
        }

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener("scroll", saveScrollPosition);
    }, [location]);
};