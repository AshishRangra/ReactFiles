import React, { useReducer } from 'react'


const reducer = (value,dispatch)=>{
    switch (dispatch.type) {
        case 'change':
            
          return  {...value,name:'deep'}


          case 'add':
            
          return  { ...value, counter:value.counter+1}
    
        default:
            break;
    }

    

}
export const UseReducer = () => {


    const [data ,dispatch] =useReducer(reducer,{
        name:'cccdfds',
        counter:0,
        array:[]
    })

    const handlechange = ()=>{
        dispatch(
            {
         type:'change'
        }
        )
    }
    const inc = ()=>{
        dispatch(
            {
         type:'add'
         
        }
        )
    }

  return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.counter}</h1>
        <button onClick={handlechange}>change</button>
        <button onClick={inc}>inc</button>
    </div>
  )
}
