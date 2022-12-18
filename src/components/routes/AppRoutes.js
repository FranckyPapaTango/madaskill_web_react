import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Category from "../pages/category/Category";

function AppRoutes() {
  return (
  <Routes>
      <Route path="/"  element={<Home/>} ></Route>
      <Route path="/:categoryId"  element={<Category/>} ></Route>
  </Routes>
  );
}
export default AppRoutes;