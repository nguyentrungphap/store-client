import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="font-oswald">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
