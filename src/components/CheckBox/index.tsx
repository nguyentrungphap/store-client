import { useState } from "react";

export interface MenuCheckBoxItem {
  value?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  label?: string;
  className?: string;
  defaultValue?: string;
  onChange?: (checked: boolean) => void;
}

export interface MenuCheckBoxProps {
  items: MenuCheckBoxItem[];
}

interface PropsCheckBox {
  menuCheckBox: MenuCheckBoxProps;
}

const CheckBox = ({ menuCheckBox }: PropsCheckBox) => {
  const [checkedArr, setCheckedArr] = useState(
    menuCheckBox.items.map((item) => !!item.isChecked)
  );

  const handleChange = (idx: number) => {
    setCheckedArr((prev) => {
      const newArr = [...prev];
      newArr[idx] = !newArr[idx];
      // Gọi callback nếu có
      menuCheckBox.items[idx].onChange?.(newArr[idx]);
      console.log({ newArr });
      return newArr;
    });
  };

  return (
    <div>
      {menuCheckBox.items.map((item, index) => {
        const inputId = `checkbox-${index}`;
        return (
          <div key={index} className={item.className}>
            <input
              id={inputId}
              type="checkbox"
              value={item.value}
              checked={checkedArr[index]}
              disabled={item.isDisabled}
              onChange={() => handleChange(index)}
            />
            {item.label && (
              <label htmlFor={inputId} style={{ marginLeft: 4 }}>
                {item.label}
              </label>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckBox;
