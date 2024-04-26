/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements-react/dist/js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                gilroy: ["Gilroy"]
            },
            fontWeight: {
                "black": 1000,
                "extrabold": 900,
                "bold": 800,
                "heavy": 700,
                "semibold": 600,
                "medium": 500,
                "normal": 400,
                "light": 300,
                "ultralight": 200,
                "thin": 100
            },
            colors: {
                "gradient-blue-indigo": "linear-gradient(90deg, #005C97 0%, #363795 100%)",
                "Thesis": {
                    50: "#00A7E1",
                    100: "#00171F",
                    200: "#003459",
                    300: "#007EA7"
                }
            }
        }
    },
    plugins: [require("tw-elements-react/dist/plugin.cjs")],
    darkMode: "class"
};
