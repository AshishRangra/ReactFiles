import React, { useEffect, useReducer } from "react";
export const ReducerFor = () => {
  const reducerFxn = (state, action) => {
    switch (action.type) {
      case "setValue":
        // localStorage.setItem("data", JSON.stringify(action.value));
        return { ...state, [action.target]: action.value };

      case "submitData":
        const Data = {
          name: state.name,
          password: state.password,
        };

        const addValueonArrayIndex = [...state.arr, Data];
        localStorage.setItem("data2", JSON.stringify(addValueonArrayIndex));
        return { ...state, arr: addValueonArrayIndex, name: "", password: "" };

      case "updateFieldonEditData":
        let oldData = {
          ...state,
          name: state.arr[action.newIndex].name,
          password: state.arr[action.newIndex].password,
          Index: action.newIndex,
        };
        return oldData;

      case "editData2":
        const updateArr = [...state.arr];
        updateArr[action.updatedIndex] = {
          name: state.name,
          password: state.password,
        };
        localStorage.setItem("data2", JSON.stringify(updateArr));
        return {
          ...state,
          arr: updateArr,
          name: "",
          password: "",
          Index: null,
        };
      case "deleteData":
        const newArray = [...state.arr];
        newArray.splice( action.deleteIndex,1);
        localStorage.setItem("data2",JSON.stringify(newArray))
        return { ...state, arr: newArray, Index: null };

      default:
        break;
    }
  };

  const [val, dispatch] = useReducer(reducerFxn, {
    name: "",
    password: "",
    arr: [],
    Index: null,
  });

  const updateField = (e) => {
    dispatch({
      type: "setValue",
      target: e.target.name,
      value: e.target.value,
    });
  };
  const AddData = (e) => {
    e.preventDefault();

    if (val.Index === null) {
      dispatch({
        type: "submitData",
      });
    } else {
      dispatch({
        type: "editData2",
        updatedIndex: val.Index,
      });
    }
  };

  const editData = (index) => {
    dispatch({
      type: "updateFieldonEditData",
      newIndex: index,
    });
  };
  const deleteData = (index) => {
    dispatch({
      type: "deleteData",
      deleteIndex: index,
    });
  };

  useEffect(() => {
    const savedData = localStorage.getItem("data2");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      dispatch({
        type: "setValue",
        target: "arr",
        value: parsedData,
      });
    }
  }, []);
  return (
    <>
      <form onSubmit={AddData}>
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
        <button>Add</button>
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Password</th>
        </tr>
        {val.arr.map((value, index) => (
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
