import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Product = () => {
  const [data, setdata] = useState([]);

  function fetchdata() {
    fetch(`https://fakestoreapi.com/products?limit=6`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setdata(res);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "90%",
        margin:'auto'
        
      }}
    >
      {data.map((el) => {
        return (
          <div style={{
            border:'1px solid black',
            padding:"1rem"
          }} key={el.id}>
            <img
              style={{ width: "100px", height: "100px",
            padding:'1rem' }}
              src={el.image}
              alt=""
            />
            <h3>Title: {el.title}</h3>
            <p>Category: {el.category}</p>
            <h4>Price: {el.price}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
