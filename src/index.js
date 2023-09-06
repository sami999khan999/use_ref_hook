// // UseRef

// // useRef is a hook in React that provides a way to create mutable references to elements in the DOM (Document Object Model) or to store mutable values that persist across renders. It is commonly used for accessing and interacting with DOM elements directly, managing focus, storing previous values, and working with imperative code when necessary. //

//============================================================================================================================================//

// // more detaild in ./components/UseRef.jsx

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
