import React, { useEffect, useReducer } from "react";

export const ReducerForm = () => {
  // const [arr2, setArr2] = useState([]);
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "setInputValue":
        const setInput = {
          ...state,
          [action.target]: action.value,
        };
        return setInput;

      case "addData":
        const newData = {
          name: state.name,
          age: state.age,
          password: state.password,
        };
        const updatedData = [...state.arr, newData];
        localStorage.setItem("data", JSON.stringify(updatedData));
        return {
          ...state,
          arr: updatedData,
          name: "",
          age: "",
          password: "",
        };
      case "updateIndex":
        const editobj = {
          ...state,
          name: state.arr[action.updateIndex].name,
          age: state.arr[action.updateIndex].age,
          password: state.arr[action.updateIndex].password,
          editindex: action.updateIndex,
        };
        return editobj;
      case "updateArr":
        const updatedArr = [...state.arr];
        updatedArr[action.updateIndex] = {
          name: state.name,
          age: state.age,
          password: state.password,
        };

        localStorage.setItem("data", JSON.stringify(updatedArr));

        return {
          ...state,
          arr: updatedArr,
          name: "",
          age: "",
          password: "",
          editindex: null,
        };
      default:
        break;
    }
  };

  const [val, dispatch] = useReducer(reducerFunction, {
    name: "",
    age: "",
    password: "",
    arr: [],
    editindex: null,
  });

  const inputChange = (e) => {
    dispatch({
      type: "setInputValue",

      target: e.target.name,
      value: e.target.value,
    });
  };

  console.log(val);

  const AddData = (e) => {
    e.preventDefault();
    if (val.editindex === null) {
      dispatch({
        type: "addData",
      });
    } else {
      dispatch({
        type: "updateArr",
        updateIndex: val.editindex,
      });
    }
  };
  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      dispatch({
        type: "setInputValue",
        target: "arr",
        value: parsedData,
      });
    }
  }, []);
  // useEffect(()=>{

  //   const savedData = localStorage.getItem("submitData");
  //   localStorage.setItem("data",JSON.stringify(val.arr))
  // },[val.arr])
  const Edit = (index) => {
    dispatch({
      type: "updateIndex",

      updateIndex: index,
    });
  };
  return (
    <>
      <form onSubmit={AddData}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={val.name}
          onChange={inputChange}
        />
        <br />
        <label htmlFor="Age">Age</label>
        <input
          type="text"
          name="age"
          value={val.age}
          placeholder="Age"
          onChange={inputChange}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          value={val.password}
          placeholder="Password"
          onChange={inputChange}
        />
        <br />
        <button type="submit">Add Data</button>
      </form>

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Password</th>
        </tr>
        {/* {val.arr.map((value, index) => (
          <tr key={index}>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.password}</td>
          </tr>
        ))} */}
        {val.arr &&
          val.arr.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.password}</td>
              <td>
                <button onClick={() => Edit(index)}>Edit</button>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};
