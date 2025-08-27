import React from "react";

export interface CheckboxOptionType {
  value?: string;
  label?: string;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface MenuCheckBoxProps {
  items: CheckboxOptionType[];
}

interface PropsCheckBox {
  menuCheckBox: MenuCheckBoxProps;
}

const CheckBox = ({ menuCheckBox }: PropsCheckBox) => {
  return (
    <div>
      {menuCheckBox.items.map((item, index) => (
        <label
          key={item.value || index}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={!!item.isChecked}
            onChange={(e) => item.onChange?.(e.target.checked)}
          />
          <span>{item.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
