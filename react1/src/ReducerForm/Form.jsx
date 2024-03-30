import React from "react";
import { Form } from "./Table";
export const UserForm = ({Submit,updateField,val,arr,editData,deleteData}) => {
 
  return (
    <>
      <form onSubmit={Submit}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          value={val.name}
          onChange={updateField}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          value={val.password}
          onChange={updateField}
        />
        <br />
        <button type="submit">Add</button>
      </form>
      <Form arr={arr} editData={editData} deleteData={deleteData} />
    </>
  );
};
