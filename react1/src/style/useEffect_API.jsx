import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";
export const FetchApi = () => {
  const [arr, setArr] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setArr(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("arr", arr);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Title</th>
            <th>Product Description</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
