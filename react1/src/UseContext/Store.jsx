import React, { useState } from "react";
import MyContext from "./MyContext";

const Store = ({ children }) => {
  const name = "dfytghtygheep";


  const [data, setData]=useState('asfjkhds')

  return <MyContext.Provider value={{ name ,data, setData}}>{children}</MyContext.Provider>;
};

export default Store;
