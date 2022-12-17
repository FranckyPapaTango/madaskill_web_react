import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/home";
import Category from "src/pages/category/Category";

function AppRoutes() {
  return <Routes>
      <Route path="/"  element={<Home/>} ></Route>
      <Route path="/:categoryId"  element={<Category/>} ></Route>
  </Routes>;
}
export default AppRoutes;