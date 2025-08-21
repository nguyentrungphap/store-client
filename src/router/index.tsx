import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import { Login } from "@mui/icons-material";
import Register from "../pages/Register";
import MainLayout from "@/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{ path: "", Component: Home }],
  },
  { path: "about", Component: About },
]);
