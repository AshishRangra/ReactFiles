import React, { useReducer, useState, useEffect } from "react";

const initialState = {
  name: "",
  age: "",
  address: "",
  email: "",
  submitData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT_FORM":
      if (
        state.name.trim() === "" ||
        state.age.trim() === "" ||
        state.address.trim() === "" ||
        state.email.trim() === ""
      ) {
        return state;
      } else {
        const newData = {
          name: state.name,
          age: state.age,
          address: state.address,
          email: state.email,
        };
        const updatedData = [...state.submitData, newData];
        localStorage.setItem("submitData", JSON.stringify(updatedData));
        return {
          ...state,
          submitData: updatedData,
          name: "",
          age: "",
          address: "",
          email: "",
        };
      }
    case "DELETE_ENTRY":
      const filteredData = state.submitData.filter(
        (_, index) => index !== action.index
      );
      localStorage.setItem("submitData", JSON.stringify(filteredData));
      return {
        ...state,
        submitData: filteredData,
      };
    case "EDIT_ENTRY":
      const editedData = [...state.submitData];
      editedData[action.index] = {
        name: state.name,
        age: state.age,
        address: state.address,
        email: state.email,
      };
      localStorage.setItem("submitData", JSON.stringify(editedData));
      return {
        ...state,
        submitData: editedData,
        name: "",
        age: "",
        address: "",
        email: "",
      };
    default:
      throw new Error("Invalid action type");
  }
}

export const UseRed = () => {
  const [inputForm, dispatch] = useReducer(reducer, initialState);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const savedData = localStorage.getItem("submitData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      dispatch({
        type: "UPDATE_FIELD",
        field: "submitData",
        value: parsedData,
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editIndex !== -1) {
      dispatch({ type: "EDIT_ENTRY", index: editIndex });
      setEditIndex(-1);
    } else {
      dispatch({ type: "SUBMIT_FORM" });
    }
  }

  function handleEdit(index) {
    const item = inputForm.submitData[index];
    dispatch({ type: "UPDATE_FIELD", field: "name", value: item.name });
    dispatch({ type: "UPDATE_FIELD", field: "age", value: item.age });
    dispatch({ type: "UPDATE_FIELD", field: "address", value: item.address });
    dispatch({ type: "UPDATE_FIELD", field: "email", value: item.email });
    setEditIndex(index);
  }

  function handleDelete(index) {
    dispatch({ type: "DELETE_ENTRY", index });
  }

  function ageVal(e) {
    const { value } = e.target;
    if (!validateAge(value)) {
      dispatch({ type: "UPDATE_FIELD", field: "age", value: "" });
    }
  }

  function validateAge(value) {
    const age = Number(value);
    if (isNaN(age)) {
      return false;
    }
    return age >= 18 && age <= 100;
  }

  function emailVal(e) {
    const { value } = e.target;
    if (!validateEmail(value)) {
      dispatch({ type: "UPDATE_FIELD", field: "email", value: "" });
    }
  }

  function validateEmail(value) {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  }

  return (
    <div>
      <h1>deep</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputForm.name}
          required
          placeholder="NAME"
          style={{ width: "50%", margin: "0 auto" }}
        />
        <br />
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={inputForm.age}
          required
          placeholder="AGE"
          style={{ width: "50%", margin: "0 auto" }}
          onBlur={ageVal}
        />
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputForm.address}
          required
          placeholder="ADDRESS"
          style={{ width: "50%", margin: "0 auto" }}
        />
        <br />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={inputForm.email}
          required
          placeholder="EMAIL"
          style={{ width: "50%", margin: "0 auto" }}
          onBlur={emailVal}
        />
        <br />
        <button type="submit">{editIndex !== -1 ? "Update" : "Submit"}</button>
      </form>

      <table style={{ width: "50%", margin: "20px auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {inputForm.submitData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseRed;
