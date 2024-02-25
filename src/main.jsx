import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { YoutobeProvider } from "./context/youtubeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <YoutobeProvider>
    <App />
  </YoutobeProvider>
);
