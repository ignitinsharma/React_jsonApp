import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Product from "../Pages/Product";
import SingleProduct from "../Pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";

export function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          /* 
          --> Making homw to private if user is not login so he is not able to visit home page
              instead of home user will be redirected to  Login page 
          */

          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/singleproduct"
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/product"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
