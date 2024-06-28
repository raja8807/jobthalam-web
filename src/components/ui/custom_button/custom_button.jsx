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
  isLoading,
}) => {
  if (type === "submit") {
    return (
      <input
        type="submit"
        className={`${styles.customButton} ${styles[`v${variant}`]} ${
          wFull ? styles.wFull : ""
        }`}
        value={isLoading ? "Loading..." : btnText}
        disabled={disabled || isLoading}
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
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default CustomButton;
