import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type: "cta" | "toggle" | "small";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  active = false,
  disabled = false,
  children,
}) => {
  if (type === "cta")
    return (
      <button
        className={`${styles.btn} btn--cta`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );

  if (type === "toggle")
    return (
      <button
        className={`${styles.btn} btn--toggle ${active ? "active" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );

  if (type === "small")
    return (
      <button
        className={`${styles.btn} btn--cta btn--small`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );

  throw new Error("Invalid button type");
};

export default Button;
