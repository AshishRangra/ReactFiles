// import React, { useEffect, useState } from 'react'

//  const UseEffect = () => {
// const [Counter,setCounter]=useState(0)
// const [Counter2,setCounter2]=useState(0)

// const inc = ()=>{

//     console.log('i am in inc');
//     setCounter(Counter+1)
// }
// const inc2 = ()=>{

//     console.log('i am in inc');
//     setCounter2(Counter2+1)
// }

// console.log('i am outside');

// useEffect(()=>{
//  inc()
// },[Counter2])
//    return (
//      <div>
//         <div>
// counter 1
//        <h1> {Counter}</h1>
//         </div>
//         <div>
// counter 2
//        <h1> {Counter2}</h1>
//         </div>
//        <button onClick={inc2}>inc</button>
//      </div>
//    )
//  }

//  export default UseEffect

import React, { useEffect, useState } from "react";
export const UseEffect = () => {
  const [count, setCounter] = useState(0);
  const Inc = () => {
    console.log("increment")
    setCounter(count + 1);
  };
  const Dec = () => {
    console.log("Decrement")
    setCounter(count - 1);
  };
  useEffect(() => {
    console.log(count)
  },[count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Dec</button>
    </>
  );
};
