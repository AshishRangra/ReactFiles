import React, { useState, useEffect } from "react";
import "../css/Admin.css";
import axios from "axios";
const AdminForm = () => {
  const [formData, setFormData] = useState({
    albumId: "",
    title: "",
  });
  // const [searchId, setSearchId] = useState({ searchID: "" });
  const [arr, setArr] = useState([]);
  const [item, setItem] = useState([]);
  const [editIndex, setIndex] = useState(null);
  const jsonData = async () => {
    try {
      let url = "http://localhost:8000/user";
      const res = await fetch(url);
      const data = await res.json();
      setArr(data);
      setItem(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitNew = async () => {
    const doc = {
      albumId: formData.albumId,
      title: formData.title,
    };
    if (doc.albumId.length > 0 && doc.title.length > 5) {
      await fetch("http://localhost:8000/user", {
        method: "POST",
        body: JSON.stringify(doc),
        headers: { "Content-Type": "application/json" },
      });
      setFormData({
        albumId: "",
        title: "",
      });
      jsonData();
    }
  };

  const updatePost = async () => {
    try {
      debugger;
      await axios.put(`http://localhost:8000/user/${formData.id}`, formData);
      debugger;
      // Assuming success, update the local state
      jsonData();
      setIndex(null); // Reset editIndex after updating
    } catch (error) {
      console.error("Error updating post: ", error);
    }
  };

  const Submit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      updatePost();
    } else {
      SubmitNew();
    }
  };

  const deleteData = async (id) => {
    try {
      await fetch(`http://localhost:8000/user/${id}`, {
        method: "DELETE",
      });
      jsonData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange2 = (e) => {
    const searchTerm = e.target.value;
    const filteredData =
      arr &&
      arr.filter(
        (value) =>
          value.title.includes(searchTerm) ||
          value.id.includes(searchTerm) ||
          value.albumId.includes(searchTerm)
      );
    console.log(filteredData);
    setItem(filteredData);
  };

  //   console.log(searchId);

  const editData = (index) => {
    console.log(arr[index], "==============");
    setFormData(arr[index]);
    setIndex(index);
  };
  useEffect(() => {
    jsonData();
  }, []);

  return (
    <div className="admin-container">
      <form className="admin-form" onSubmit={Submit}>
        <div className="form-group">
          <label htmlFor="albumId">Album ID</label>
          <input
            type="number"
            id="albumId"
            name="albumId"
            value={formData.albumId}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-button">
            {editIndex !== null ? "update" : "ADD"}
          </button>
        </div>
      </form>
      <label htmlFor="searchID" className="search-label">
        Search
      </label>
      <input
        type="text"
        name="searchID"
        placeholder="Enter id of searchItem"
        onChange={handleChange2}
        className="search-input"
      />

      {/* <button className="search-button">Search</button> */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Album_id</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.albumId}</td>
              <td>{value.title}</td>
              <td>
                <button
                  onClick={() => deleteData(value.id)}
                  className="delete-button"
                >
                  Delete
                </button>
                <button
                  onClick={() => editData(index)}
                  className="update-button"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminForm;
