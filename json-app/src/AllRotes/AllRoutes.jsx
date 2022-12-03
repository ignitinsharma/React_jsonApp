import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Product from "../Pages/Product";
import SingleProduct from "../Pages/SingleProduct";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singleproduct" element={<SingleProduct />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}