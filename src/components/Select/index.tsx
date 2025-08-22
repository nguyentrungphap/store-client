import React from "react";

interface PropsSelect {
  value?: string;
  selected?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children?: React.ReactNode;
}

const Select = (props: PropsSelect) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className={props.className}
      disabled={props.disabled}
    >
      {React.Children.map(props.children, (child) => {
        return child;
      })}
    </select>
  );
};

export default Select;
