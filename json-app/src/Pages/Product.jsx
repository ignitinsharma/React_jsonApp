import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Product = () => {
  /* 
    -->  hook is used to read and modify the query string in the URL
        like this
        ?page=1
    */
  const [searchParams, setseachParams] = useSearchParams();
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [orderPrice, setOrderPrice] = useState("");
  const [filter, setfilter] = useState("");

  function fetchdata() {
    fetch(
      `https://backendjson-production.up.railway.app/api/products?_page=${page}&_limit=4&_sort=price&_order=${orderPrice}&category=${filter}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setdata(res);
      });
  }

  useEffect(() => {
    fetchdata();


    /* 
    --> So here we are simply taking page value and then
        then setting in...
    */
    const param = { page, orderPrice};
    setseachParams(param);
  }, [page, orderPrice, filter]);

  return (
    <>
      <button onClick={() => setOrderPrice("asc")}>Price Ascending</button>
      <button onClick={() => setOrderPrice("desc")}>Price Descending</button>
      <button onClick={() => setOrderPrice("")}>Price Reset</button>
      <br />
      <br />
      <button onClick={() => setfilter("men's clothing")}>
        Filter by Men Clothing
      </button>
      <button onClick={() => setfilter("electronics")}>
        Filter by Electronics
      </button>
      <button onClick={() => setfilter("jewelery")}>Filter by Jewelery</button>
      <button onClick={() => setfilter("")}>Reset FIlter</button>
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
          width: "80%",
          margin: "auto",
        }}
      >
        {data.map((el) => {
          return (
            <div
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "2rem",
              }}
              key={el.id}
            >
              <img
                style={{ width: "160px", height: "160px", padding: "1rem" }}
                src={el.image}
                alt=""
              />
              <h3>Title: {el.title}</h3>
              <p>Category: {el.category}</p>
              <h4>Price: {el.price} $</h4>

              {/* 
            --> So this will redirected to that Particular user id
            and then we will show that product details in brief...
          */}
              <Link to={`/products/${el.id}`}>More Details</Link>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          margin: "auto",
        }}
      >
        <button disabled={page === 1} onClick={() => setpage(page - 1)}>
          Pre
        </button>
        <button>{page}</button>
        <button onClick={() => setpage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Product;
