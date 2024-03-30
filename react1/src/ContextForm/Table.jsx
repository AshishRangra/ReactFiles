import React, {useContext } from "react";
import { FormContext } from "./Context";
export const Table=()=>{
    const {arr}=useContext(FormContext)
    return(
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {
                    arr.map((value,index)=>(
                    <tr key={index}>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                    </tr>
                    ))
                }
            </table>
        </>
    )
}