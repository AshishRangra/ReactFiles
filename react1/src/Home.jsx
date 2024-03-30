import React from "react";
import About from "./About";

 
const Home2 = ({data,fun}) => {
 const homefun = ()=>{
  fun()
 }


  return (
    <div>
      <h1 onClick={homefun}>i am in vvv home {data[1]}</h1>

<About datahome={data}/>
    
    </div>
    
  );

};
 
export default Home2;
