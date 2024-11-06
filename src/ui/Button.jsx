import styles from "./Button.module.css";

function Button({ type, active, onClick, disabled, children }) {
  if (!type || type === "toggle")
    return (
      <button
        className={`${styles.btn} btn--toggle ${active ? "active" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );

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
}

export default Button;
