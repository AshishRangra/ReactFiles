import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
// import Store from "./UseContext/Store";
// import { Store2 } from "./useContext2/Store2";
import { FunctionStore } from "./ContextForm/FunxtionStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <FunctionStore>
     <App />
     </FunctionStore> 
       
   
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
