import React from "react";
import styles from "./custom_select.module.scss";
import ControlLabel from "../../contol_label/control_label";

const CustomSelect = ({
  variant = 1,
  label,
  options = [],
  value,
  onChange = () => {},
}) => {
  return (
    <div className={`${styles.CustomSelect} ${styles[`v${variant}`]}`}>
      {label && <ControlLabel label={label} />}

      <select
        onChange={(e) => {
          onChange(e, e.target.value);
        }}
        value={value}
        defaultValue={value}
      >
        <option value={null} />
        {options.map((o, i) => {
          return (
            <option key={`op_${i}`} value={o}>
              {o}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
