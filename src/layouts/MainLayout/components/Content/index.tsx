import Article from "../../../Article";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const Content = () => {
  return (
    <div className="lg:flex gap-[50px] px-3.5">
      <div className="w-1/5 hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:w-4/5">
        <Main />
      </div>
    </div>
  );
};

export default Content;
