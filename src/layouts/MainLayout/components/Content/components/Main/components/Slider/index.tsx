import LeftSlider from "./Components/LeftSlider";
import RightSlider from "./Components/RightSlider";

export default function Slider() {
  return (
    <div className="flex w-full h-[350px] min-h-0 mb-10">
      <LeftSlider />
      <RightSlider />
    </div>
  );
}
