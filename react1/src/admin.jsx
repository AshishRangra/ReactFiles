import React, {  } from "react";
import AdminForm from "./adminForm";

export const Admin = () => {
  
  return(
    <>
     <AdminForm arr={arr} formData={formData}
      handleChange={handleChange} handleChange2={handleChange2}
      updateJsonData={updateJsonData} deleteData={deleteData} jsonData={jsonData}
      Submit={Submit}
       />
     
    </>
  )
};
