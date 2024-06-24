import React from "react";
import styles from "./custom_select.module.scss";
import ControlLabel from "../../contol_label/control_label";

const CustomSelect = ({ variant = 1, label, options = [] }) => {
  return (
    <div className={`${styles.CustomSelect} ${styles[`v${variant}`]}`}>
      {label && <ControlLabel label={label} />}

      <select>
        <option />
        {options.map((o, i) => {
          return <option key={`op_${i}`}>{o}</option>;
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
