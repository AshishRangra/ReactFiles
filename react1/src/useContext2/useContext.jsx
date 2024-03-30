import React,{useContext} from "react";
import { Context } from "./Context";

const UseContext = () => {
  const { name } = useContext(Context);
  return <>Name: {name}</>;
};

export default UseContext;
