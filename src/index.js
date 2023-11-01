// // UseRef

// // useRef is a hook in React that provides a way to create mutable references to elements in the DOM (Document Object Model) or to store mutable values that persist across renders. It is commonly used for accessing and interacting with DOM elements directly, managing focus, storing previous values, and working with imperative code when necessary. //

//============================================================================================================================================//

// // more detaild in ./components/UseRef.jsx

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
