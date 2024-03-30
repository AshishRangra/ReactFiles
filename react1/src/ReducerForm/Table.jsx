import React from "react";

export const Form = ({ arr, editData, deleteData }) => {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Password</th>
        </tr>
        {arr.map((value, index) => (
          <tr key={index}>
            <td>{value.name}</td>
            <td>{value.password}</td>
            <td>
              <button onClick={() => editData(index)}>Edit</button>
            </td>
            <td>
              <button onClick={() => deleteData(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
