import React, { useState } from "react";
import { FormContext } from "./Context";
export const FunctionStore=({children})=>{
    
    const [val, setVal] = useState({ name: "", email: "" });
    const [arr, setArr] = useState([]);
    //   console.log(val);
    const handleChange = (e) => {
      setVal({...val, [e.target.name]: e.target.value });
    };
    const Submit = (e) => {
      e.preventDefault();
      setArr([...arr,val]);
    };
    console.log(arr);
    return(<>
        <FormContext.Provider value={{val,handleChange,Submit,arr}}>{children}</FormContext.Provider>
    </>)

}