import React, { forwardRef } from "react";

interface Option {
  value: string;
  label: string;
}

interface PropsSelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Option[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, PropsSelect>(
  (
    {
      value,
      onChange,
      className,
      disabled,
      label,
      id,
      options,
      placeholder,
      ...rest
    },
    ref
  ) => (
    <div>
      {label && (
        <label htmlFor={id} style={{ marginRight: 8 }}>
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={id}
        value={value}
        onChange={onChange}
        className={className}
        disabled={disabled}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
);

export default Select;
