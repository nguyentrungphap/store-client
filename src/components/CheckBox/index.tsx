import React from "react";

interface PropsCheckBox {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  children?: React.ReactNode;
}

const CheckBox = (props: PropsCheckBox) => {
  const { name, value, checked, required, disabled, id, children } = props;
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          required={required}
          disabled={disabled}
          id={id}
        />
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
