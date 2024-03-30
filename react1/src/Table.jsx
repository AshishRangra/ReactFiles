// import React from "react";
// import "./Table.css"
// const Table=({data})=>{
// return(
//    <div> 
//      <table >
//         <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//         </tr>
       
//             {/* <td>{data[0].name}</td>
//             <td>{data[0].age}</td>
//             <td>{data[0].email}</td> */}
//             {data.map((val,index)=>(
//               <tr key={index}>
//               <td >{val.name}</td>
//               <td >{val.age}</td>
//               <td >{val.email}</td>
//               </tr>

             
//             ))}
        
//     </table>
//    </div>
// ) 
// }
// export default Table;
import React, { useState } from "react";
import "./Table.css";

const Table = ({ data }) => {
    const [color,setColor]=useState("yellow");
  
    const clr=()=>{
      if(color==="yellow"){
        setColor("green");
      }
      else{
        setColor("yellow")
      }
    }
    const [color2,setColor2]=useState("red");
  
  const clr2=()=>{
    if(color2==="red"){
        setColor2("blue");
      }
      else{
        setColor2("red")
      }
  }

  const [color3,setColor3]=useState("red");
  
  const clr3=()=>{
    if(color3==="red"){
        setColor3("white");
      }
      else{
        setColor3("red")
      }
  }

    return (
        <div>
        <button onClick={clr}>Green</button>
        <button onClick={clr2}>Blue</button>
        <button onClick={clr3}>Form_Button</button>
            <table>
                    <tr style={{backgroundColor:color}} >
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
           
                    {data.map((val, index) => (
                        <tr key={index} style={{backgroundColor:color2}}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.email}</td>
                        </tr>
                  ))}

                
            </table>


            <form action="#" style={{backgroundColor:color3}}>
                <label htmlFor="Name" >Name</label>
                <input type="text" id="Name" />
                <label htmlFor="Age">Age</label>
                <input type="number" id="Age" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </form>
        </div>
    );
};

export default Table;
