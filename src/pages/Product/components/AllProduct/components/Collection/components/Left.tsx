import CheckBox from "@/components/CheckBox";
import { useState } from "react";

const brandItems = [
  { value: "brand1", label: "Thương hiệu 1" },
  { value: "brand2", label: "Thương hiệu 2" },
  { value: "brand3", label: "Thương hiệu 3" },
  { value: "brand4", label: "Thương hiệu 4" },
  { value: "brand5", label: "Thương hiệu 5" },
];

const CollectionLeft = () => {
  const [checkedArr, setCheckedArr] = useState<{ [key: string]: string }>({});

  const handleCheckChange = (
    value: string,
    checked: boolean,
    label: string
  ) => {
    setCheckedArr((prev) => {
      const newArr = { ...prev };
      if (checked) {
        newArr[value] = label;
      } else {
        delete newArr[value];
      }
      return newArr;
    });
  };

  const renderCheckedItems = () => {
    if (Object.keys(checkedArr).length === 0) return null;

    return (
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">Bạn đã chọn:</h2>
          <span
            className="text-gray-500 cursor-pointer"
            onClick={() => setCheckedArr({})}
          >
            Bỏ hết
          </span>
        </div>
        <div>
          {Object.values(checkedArr).map((label) => (
            <span
              key={label}
              className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="w-[30%]">
      {renderCheckedItems()}
      <div>
        <h2 className="text-2xl font-bold">Thương hiệu sản phẩm</h2>
        <CheckBox
          menuCheckBox={{
            items: brandItems.map((item) => ({
              ...item,
              isChecked: !!checkedArr[item.value],
              onChange: (checked: boolean) =>
                handleCheckChange(item.value, checked, item.label),
            })),
          }}
        />
      </div>
    </div>
  );
};

export default CollectionLeft;
