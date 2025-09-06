import Img1 from "@/assets/right-silder-1.jpeg"; // Adjust the path as necessary
import Img2 from "@/assets/right-slider-2.avif"; // Adjust the path as necessary

const RightSlider = () => {
  return (
    <div className="w-2/5 pl-5 h-full min-h-0 gap-2 hidden lg:block">
      <img
        src={Img1}
        alt=""
        className="flex-1 w-full h-1/2 min-h-0 object-cover rounded-lg"
      />
      <img
        src={Img2}
        alt=""
        className="flex-1 w-full h-1/2 min-h-0 object-cover rounded-lg"
      />
    </div>
  );
};

export default RightSlider;
