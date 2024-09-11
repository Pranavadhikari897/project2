import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    }
    fetchData();
  }, []);

  let show = data.slice(0, 15).map((res, index) => (
    <div
      key={index}
      className="card all"
      style={{
        width: "18rem",
        margin: "auto",
        fontSize: "3vh",
        marginTop: "2vh",
      }}
    >
      <img src={res.images[0]} className="card-img-top" alt={res.title} />
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: "center" }}>
          {index + 1 + ". " + res.title}
        </h5>
        <p className="card-text" style={{ textAlign: "center" }}>
          {res.description}
        </p>
        <button className="btn btn-primary" style={{ marginLeft: "6.1vw" }}>
          ${res.price}
        </button>
      </div>
    </div>
  ));

  return <div className="parent">{show}</div>;
}
