import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { ConfigProvider } from "antd";
import { Select } from "./config/components";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={ store }>
            <ConfigProvider
                theme={ {
                    token: { fontFamily: "Poppins, sans-serif" },
                    components: {
                        Select
                    }
                } }
            >
                <App />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);
