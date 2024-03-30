import React, { useReducer } from "react";
const UseReducer2 = () => {
 
  const reducer = (state, action) => {
    switch (action.type) {
      case "setValue":
        return { ...state, [action.target]: action.value };
      case "setArr":
        return {
          ...state,
          arr: [...state.arr, action.obj],
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
        return {
          ...state,
          arr: updatedArr,
          name: "",
          age: "",
          password: "",
          editindex: null,
        };
      case "deleteValue":
        let newArr = [...state.arr];

        newArr.splice(action.updateIndex, 1);
        // console.log(newArr);

        return { ...state, arr: newArr };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    age: "",
    password: "",
    arr: [],
    editindex: null,
  });

  const changeInput = (e) => {
    dispatch({
      type: "setValue",
      value: e.target.value,
      target: e.target.name,
    });
  };

  console.log(state.arr);

  const Submit = (e) => {
    e.preventDefault();
    if (state.editindex === null) {
      dispatch({
        obj: {
          name: state.name,
          age: state.age,
          password: state.password,
        },
        type: "setArr",
      });
    } else {
      dispatch({
        type: "updateArr",
        updateIndex: state.editindex,
      });
    }
  };
  const Update = (index) => {
    dispatch({
      type: "updateIndex",

      updateIndex: index,
    });
  };
  const Delete = (index) => {
    dispatch({
      type: "deleteValue",
      updateIndex: index,
    });
  };
  

  return (
    <div>
      <form onSubmit={Submit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={state.name}
          onChange={changeInput}
        />

        <label htmlFor="age">Age</label>
        <input
          type="age"
          name="age"
          value={state.age}
          onChange={changeInput}
          id="age"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={changeInput}
          id="password"
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Password</th>
        </tr>
      
        {state.arr.map((value, index) => (
          <tr key={index}>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.password}</td>
            <td>
              <button onClick={() => Update(index)}>Edit</button>
            </td>
            <td>
              <button onClick={() => Delete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default UseReducer2;
