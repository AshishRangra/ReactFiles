import React from "react";
// import { Form } from "./ContextForm/Form";
// import { Table } from "./ContextForm/Table";

// const App = () => {
// const [arr, setArr] = useState([]);
// const getData = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/photos"
//     );
//     // if (!response.ok) {
//     //   throw new Error("Failed to fetch users");
//     // }
//     const users = await response.json();

//     setArr(users);
//   } catch (error) {
//     console.error("Error fetching users:", error.message);
//     return null;
//   }
// };
// console.log(arr);

// return (
//   <>
//     <button onClick={getData}>getData</button>
// </>
// );
// };
const App = () => {
  const jsonData = async () => {
    try {
      let url = "http://localhost:8000/photos";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const Submit = async (e) => {
    e.preventDefault();
    const doc = {
      albumId: e.target.albumId.value,
      title: e.target.title.value,
    };
    await fetch("http://localhost:8000/photos", {
      method: "POST",
      body: JSON.stringify(doc),
      headers: { "Content-Type": "application/json" },
    });
  };
  const deleteData = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/photos/${id}`, {
        method: "DELETE",
      });
      // jsonData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={jsonData}>Click</button>

      <form onSubmit={Submit}>
        albumId <input type="number" name="albumId" />
        <br />
        title <input type="text" name="title" />
        <button type="submit">ADD</button>
        <button onClick={() => deleteData(1)}>Delete</button>
      </form>
    </>
  );
};
export default App;
