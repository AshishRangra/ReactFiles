import React, { useState } from 'react'
const FormData2=()=>{
    const [val,setVal]=useState({name:'',age:''})
    const [arr,setArr]=useState([]);
    const handleChange=(e)=>{
        setVal({...val,[e.target.name]:e.target.value})
       
        
    }
    console.log(val)
   
   
   const submit=(e)=>{
    e.preventDefault();
    setArr([...arr,val])
    
   }
 
   console.log(arr)
    return(
      <div>
          <form onSubmit={submit} >
                <label htmlFor="Name">Name</label>
                <input type="text" name='name' value={val.name} onChange={handleChange} />
                <label htmlFor="Age">Age</label>
                <input type="text" name='age' value={val.age} onChange={handleChange} />
                <button type='submit' >Submit</button>
        </form>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {
                arr.map((value,index)=>(
                    <tr key={index}>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        
                    </tr>
                ))
            }
        </table>
      </div>
    )
}
export default FormData2;