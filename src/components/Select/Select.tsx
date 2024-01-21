import * as React from "react";
import styles from "./Select.module.css";

export type Option<V extends string = string> = {
  name: string;
  value: V;
};

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "onChange"
> & {
  onChange: (pack: string | null) => void;
  options: Option[];
};

export default function Select({
  options,
  onChange,
  defaultValue,
  ...rest
}: SelectProps) {
  return (
    <div className={styles.customSelect}>
      <select
        {...rest}
        defaultValue={defaultValue}
        onChange={(event) => onChange(event.target.value || null)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
