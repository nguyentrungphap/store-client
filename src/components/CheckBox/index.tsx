import React, { useState } from "react";

export interface menuCheckBoxProps {
  items: {
    value?: string;
    isDisabled?: boolean;
    isChecked?: boolean;
    label?: string;
    className?: string;
    defaultValue?: string;
  }[];
}
interface PropsCheckBox {
  menuCheckBox: menuCheckBoxProps;
}

const CheckBox = (props: PropsCheckBox) => {
  const { menuCheckBox } = props;
  // Khởi tạo state checked cho từng item
  const [checkedArr, setCheckedArr] = useState(
    menuCheckBox.items.map((item) => !!item.isChecked)
  );

  const handleChange = (idx: number) => {
    setCheckedArr((prev) => {
      const newArr = [...prev];
      newArr[idx] = !newArr[idx];
      return newArr;
    });
  };

  return (
    <div>
      {menuCheckBox.items.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={item.value}
            checked={checkedArr[index]}
            disabled={item.isDisabled}
            onChange={() => handleChange(index)}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
