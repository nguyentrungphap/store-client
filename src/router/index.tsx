import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "@/layouts/MainLayout";
import Product from "@/pages/Product";
import Allproduct from "@/pages/Product/components/Allproduct";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{ path: "", Component: Home }],
  },
  { path: "about", Component: About },
  {
    path: "product",
    Component: Product,
    children: [
      {
        path: "",
        Component: Allproduct,
      },
    ],
  },
]);
