import Article from "../../../Article";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const Maincontent = () => {
  return (
    <div className="flex gap-[50px] px-3.5">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Main />
      </div>
    </div>
  );
};

export default Maincontent;
