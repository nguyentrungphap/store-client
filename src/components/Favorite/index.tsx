import Item from "./component/item";

type Props = {};

const Favorite = (props: Props) => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="bg-red-500 p-4">
        <div className="text-white text-2xl max-w-[80%] flex justify-between items-center mx-auto">
          <h2>Danh mục sản phẩm yêu thích</h2>
          <span>x</span>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[80%] mx-auto p-4 ">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
