import React, { useEffect, useReducer } from "react";
import { UserForm } from "./Form";
export const MainFor = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "updateField":
        // localStorage.setItem("data3", JSON.stringify(action.value));
        return { ...state, [action.target]: action.value };
      case "submitDatawhenIndexnull":
        let data = { name: state.name, password: state.password };
        let savedData = [...state.arr, data];
        localStorage.setItem("data3", JSON.stringify(savedData));
        return { ...state, arr: savedData, name: "", password: "" };

      case "fillOldindexValuetoInputFields":
        let storeOldValue = {
          ...state,
          name: state.arr[action.oldIndex].name,
          password: state.arr[action.oldIndex].password,
          Index: action.oldIndex,
        };
        return storeOldValue;

      case "updateValueofOldindex":
        let updatedValue = [...state.arr];
        updatedValue[action.index] = {
          name: state.name,
          password: state.password,
        };

        localStorage.setItem("data3", JSON.stringify(updatedValue));
        return {
          ...state,
          arr: updatedValue,
          name: "",
          password: "",
          Index: null,
        };
      case "deleteValueFromIndex":
        const array = [...state.arr];
        array.splice(action.Valueindex, 1);
        localStorage.setItem("data3",JSON.stringify(array))
        return {...state,arr:array,name:'',password:'',Index:null}
      default:
        break;
    }
  };

  const [val, dispatch] = useReducer(reducer, {
    name: "",
    password: "",
    arr: [],
    Index: null,
  });

  const Submit = (e) => {
    e.preventDefault();
    if (val.Index === null) {
      dispatch({
        type: "submitDatawhenIndexnull",
      });
    } else {
      dispatch({
        type: "updateValueofOldindex",
        index: val.Index,
      });
    }
  };

  const updateField = (e) => {
    dispatch({
      type: "updateField",
      target: e.target.name,
      value: e.target.value,
    });
  };

  const editData = (index) => {
    dispatch({
      type: "fillOldindexValuetoInputFields",
      oldIndex: index,
    });
  };
  const deleteData = (index) => {
    dispatch({
      type: "deleteValueFromIndex",
      Valueindex: index,
    });
  };
  useEffect(() => {
    let saveData = localStorage.getItem("data3");
    if (saveData) {
      let Localstorage = JSON.parse(saveData);
      dispatch({
        type: "updateField",
        target: "arr",
        value: Localstorage,
      });
    }
  }, []);
  const PropsVal = {
    //This object created only for the purpose of passing values to another component throught props
    name: val.name,
    password: val.password,
  };
  return (
    <>
      <UserForm
        Submit={Submit}
        updateField={updateField}
        val={PropsVal}
        arr={val.arr}
        editData={editData}
        deleteData={deleteData}
      />
    </>
  );
};
