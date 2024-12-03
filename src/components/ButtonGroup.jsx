import styles from "./ButtonGroup.module.css";

function ButtonGroup({ disabled, children }) {
  return (
    <div
      className={`${styles.btnGroup} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
    >
      {children}
    </div>
  );
}

export default ButtonGroup;
