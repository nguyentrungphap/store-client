import ImgProduct from "@/assets/slider2.jpg";
type Props = {};

const Left = (props: Props) => {
  return (
    <div className="w-2/5">
      <img src={ImgProduct} alt="" className="w-full h-auto object-cover" />
    </div>
  );
};

export default Left;
