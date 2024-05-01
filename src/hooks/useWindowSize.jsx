import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Handler to call on window resize
            const handleResize = () => {
                // Set window width to state
                setWindowSize({
                    width: window.innerWidth
                });
            };

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return windowSize;
};