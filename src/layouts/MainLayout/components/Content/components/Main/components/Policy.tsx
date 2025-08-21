import { useHover } from "@uidotdev/usehooks";
import ImageItem1 from "@/assets/policy_item_image_1.webp";
import ImageItem2 from "@/assets/policy_item_image_2.webp";
import ImageItem3 from "@/assets/policy_item_image_3.webp";
type Props = {};

const Policy = (props: Props) => {
  const [ref, hovering] = useHover();
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-policy flex items-center p-8 rounded-xl">
        <img
          src={ImageItem1}
          alt=""
          className="w-16 h-16 object-cover rounded-full bg-red-500"
        />
        <div>
          <h3 className="text-xl font-bold">Free ship & Hoàn trả</h3>
          <p className="text-gray-600 mt-2">
            Các đơn hàng trên 1.000.000đ chúng tôi sẽ freeship và hoàn trả nếu
            như không đúng với sản phẩm đặt.
          </p>
        </div>
      </div>
      <div className="bg-policy flex items-center p-8 rounded-xl">
        <img
          src={ImageItem2}
          alt=""
          className="w-16 h-16 object-cover rounded-full bg-red-500"
        />
        <div>
          <h3 className="text-xl font-bold">Chính sách bảo mật</h3>
          <p className="text-gray-600 mt-2">
            Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Đọc thêm về
            chính sách bảo mật của chúng tôi.
          </p>
        </div>
      </div>
      <div className="bg-policy flex items-center p-8 rounded-xl">
        <img
          src={ImageItem3}
          alt=""
          className="w-16 h-16 object-cover rounded-full bg-red-500"
        />
        <div>
          <h3 className="text-xl font-bold">Chính sách bảo mật</h3>
          <p className="text-gray-600 mt-2">
            Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Đọc thêm về
            chính sách bảo mật của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
