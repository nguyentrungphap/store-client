import { useMemo, useCallback, useState, useEffect } from "react";
import CheckBox from "@/components/CheckBox";

const brandItems = [
  { value: "Electronics", label: "Electronics" },
  { value: "Baby", label: "Baby" },
  { value: "Kids", label: "Kids" },
  { value: "Boys", label: "Boys" },
  { value: "Girls", label: "Girls" },
];

interface CheckedItem {
  category: string;
  value: string;
}
interface Props {
  setListChecked: (list: CheckedItem[]) => void;
}
const CollectionLeft = ({ setListChecked }: Props) => {
  const [checkedArr, setCheckedArr] = useState<CheckedItem[]>([]);

  // cập nhật state khi check/uncheck
  const handleCheckChange = useCallback(
    (category: string, checked: boolean) => {
      setCheckedArr((prev) => {
        if (checked) {
          if (!prev.some((item) => item.category === category)) {
            return [...prev, { category, value: category }];
          }
          return prev;
        } else {
          return prev.filter((item) => item.category !== category);
        }
      });
    },
    [setCheckedArr]
  );

  // mỗi lần checkedArr thay đổi thì update listChecked
  useEffect(() => {
    setListChecked(checkedArr);
  }, [checkedArr, setListChecked]);

  const renderCheckedItems = useMemo(() => {
    if (checkedArr.length === 0) return null;

    return (
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">Bạn đã chọn:</h2>
          <span
            className="text-gray-500 cursor-pointer"
            onClick={() => setCheckedArr([])}
          >
            Bỏ hết
          </span>
        </div>
        <div>
          {checkedArr.map((item, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2"
            >
              {item.category}
            </span>
          ))}
        </div>
      </div>
    );
  }, [checkedArr, setCheckedArr]);

  return (
    <div className="w-[30%]">
      {renderCheckedItems}
      <div>
        <h2 className="text-2xl font-bold">Thương hiệu sản phẩm</h2>
        <CheckBox
          menuCheckBox={{
            items: brandItems.map((item) => ({
              ...item,
              isChecked: checkedArr.some((c) => c.category === item.value),
              onChange: (checked: boolean) =>
                handleCheckChange(item.value, checked),
            })),
          }}
        />
      </div>
    </div>
  );
};

export default CollectionLeft;
