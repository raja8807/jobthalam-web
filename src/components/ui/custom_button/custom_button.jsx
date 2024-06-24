import React from "react";
import styles from "./custom_button.module.scss";

const CustomButton = ({
  variant = 1,
  children,
  onClick = () => {},
  wFull,
  type = "button",
  btnText,
  disabled,
}) => {
  if (type === "submit") {
    return (
      <input
        type="submit"
        className={`${styles.customButton} ${styles[`v${variant}`]} ${
          wFull ? styles.wFull : ""
        }`}
        value={btnText}
        disabled={disabled}
        onClick={onClick}
      />
    );
  }

  return (
    <button
      className={`${styles.customButton} ${styles[`v${variant}`]} ${
        wFull ? styles.wFull : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
