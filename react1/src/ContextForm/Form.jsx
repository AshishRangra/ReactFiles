import React, { useContext} from "react";
import { FormContext } from "./Context";
export const Form = () => {
const {handleChange,Submit}=useContext(FormContext)
  return (
    <form onSubmit={Submit}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name"   placeholder="Your Name" onChange={handleChange}/>
      <br />

      <label htmlFor="email">Email: </label>

      <input
        type="email"
        id="email"
        name="email"
     
        placeholder="youremail@domain.com"
        onChange={handleChange}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};
