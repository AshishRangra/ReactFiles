// import React, { useState } from 'react'
// import './style/Form.css'
// const FormValue = () => {

//     const [ value, setValue] = useState( )
//     const [ array, setArray] = useState([])

//     const handleInput=(e)=>{
//         console.log(e);
//  setValue({...value,[e.target.name]: e.target.value})
//     }
 

//   return (
//     <div>
//       <form action="#" method="POST">
//           <div class="form-group">
//             <label for="name">Name:</label>
//             <Change type="text" id="name" name="name" required  onChange={handleInput}/>
//           </div>
//           <div class="form-group">
//             <label for="email">Email:</label>
//             <Change type="email" id="email" name="email" required  onChange={handleInput}/>
//           </div>
//           <div class="form-group">
//             <label for="message">Message:</label>
//             <textarea id="message" name="message" rows="4" required onChange={handleInput}></textarea>
//           </div>
//           <Change type="submit" value="Submit" />
//         </form>

//     </div>
//   )
// }

// export default FormValue

// const Form_value=()=>{
//     const [val,setVal]=useState({
//         name:'',
//         age:null,
//         email:'',
//         phone_no:0
//     });
//     const [arr,setArr]=useState([]);
    // const [editVal,setEditVal]=useState(null);

    // const handleInput=(e)=>{
    //     if(editVal!==null)
    //   {
    //     setArr({
    //         ...val,
    //         [e.target.name]:e.target.value
    //     })
    //     setEditVal(null)
    //   }
    //   else{
    //     setArr({...val,[e.target.name]:e.target.value})
    //   }
    
    // }
//   const updateForm=(index)=>{
       
         
         
//           setVal(arr[index])
//             setEditVal(index);

//   }
//     const handleSubmit=(e)=>{
//         e.preventDefault()

//         // if(val.name!=='' && val.email!=='' &&  val.phone_no!==0 && val.age!==0){
            
//             // setArr([...arr,val]);
        
//     // }
// }

// console.log(val);
//     console.log(arr);

// import './style/Form.css'

// const dataa={
//     name:'',
//     age:0,
//     email:'',
//     phone_no:0,
//     password:''
// }
// const Form_value=()=>{
//     const [val,setVal]=useState(dataa);
//     const [arr,setArr]=useState([]);
//     const [checkNull,setNUll]=useState(null);
//     // const [valid,isValid]=useState(true);
//     console.log(arr);
// const handleInput=(e)=>{

//     const newobj= {...val,[e.target.name]:e.target.value}
//     setVal(newobj);

   

// }
// const handleSubmit=(e)=>{
// e.preventDefault()
// // setArr([...arr,val])
// if(val.name!==''  && val.age!==0&& val.email!==''&& val.password!=='' && val.phone_no!==0)
// if(checkNull===null)
// {
//     setArr([...arr,val])
// }
// else{
//  arr[checkNull]=val;
//  setArr([...arr])
//  setNUll(null)
 
// }setVal({name:'',age:0,email:'',phone_no:0,password:''})
// }

// const handleUpdate=(index)=>{

//     setVal(arr[index])
//     setNUll(index)
// }
// const del=(index)=>{
// // const newArr=[...arr]
// // newArr.splice(index,1)
// const newArr=arr.filter((val,ind)=>
//  ind!==index
// )
// setArr(newArr)

// }
// const blurEvent=()=>{
//     if(val.name.length<4 ||val.name.length>8){
//         // alert("Names character length> 8")
//       setVal({...val,name:''}) ;
//         // isValid(false)
//     }
//     else{
//         // isValid(true)
//     }
 
  
// }

// const blurEvent2=()=>{
//     // alert("Age should be between 18 and 50")
//    if(val.age<18 || val.age>50)
//    setVal({...val,age:''})
// }
// const blurEvent3=()=>{
//   if(val.phone_no.length<10){
//     // alert("invalid Phone no.")
//     setVal({val,phone_no:''})
//   }
// }
// const blurEvent4=()=>{
//     // alert("Password should be atleast 8 characters")
//   if(val.password.length<7 ){
//     setVal({val,password:''})
//   }
// }

// const passwordvaild = ()=>{
//    const regx =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{4})[A-Za-z\d]{6}$/
//    if (!regx.test(val.password)) {
//     alert('asdfgh')
//    }
// }
//     return(
//         <div>
        
//         <form onSubmit={handleSubmit} className='ab'>
//         <h1>Form</h1>
//             <label htmlFor="Name">Name</label>
//             <input type="text" id='name' name='name' placeholder='Enter your Name' value={val.name} onChange={handleInput} onBlur={blurEvent}/><br/>

//             {/* <input type="text" id='name' name='name' placeholder='Enter your Name' value={val.name} onChange={handleInput} onBlur={blurEvent} className={isValid?"":"invalid"}/><br/> */}
//             <label htmlFor="Name">Age</label>
//             <input type="number" id='age' name='age' placeholder='Enter your Age' value={val.age} onChange={handleInput} onBlur={blurEvent2}/><br/>
//             <label htmlFor="Email">Email</label>
//             <input type="email" id='email' name='email' placeholder='Enter your Email' value={val.email} onChange={handleInput}/><br/>
//             <label htmlFor="Phone no">Phone no</label>
//             <input type="number" id='phone_no' name='phone_no' placeholder='Enter your Phone no.'value={val.phone_no} onChange={handleInput} onBlur={blurEvent3}/><br/>
//             <label htmlFor="password">Password</label>
//             <input type="password" id='password' name='password' placeholder='Enter your password'value={val.password} onChange={handleInput} onBlur={blurEvent4}/><br/>
//             <button className='btn' type='submit' >{ checkNull==null ? "submit":"update"}</button><br />
                
//         </form>
//         <table>
//         <tr>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Email</th>
//         <th>Phone No.</th>
//         <th>Password</th>
//         </tr>
//          {arr &&
//             arr.map((value, index) => (
//             <tr key={index}>
//             <td>{value.name}</td>
//             <td>{value.age}</td> 
//             <td>{value.email}</td>
//             <td>{value.phone_no}</td>
//             <td>{value.password}</td>
//             <td><button className='btn2' onClick={
//                 ()=>{
//                 handleUpdate(index)
//                                     }
//                 }>Update</button></td>
//             <td><button className='btn2' onClick={()=>del(index)}>Delete</button></td>
//         </tr>
//          ))}
//         </table>

        
           
//         </div>
       
//     )
// }
// export default Form_value;