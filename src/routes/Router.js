import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/users/:id"} element={<UserPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
