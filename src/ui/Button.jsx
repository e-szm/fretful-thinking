import styles from "./Button.module.css";

function Button({ active, onClick, children }) {
  return (
    <button
      className={`${styles.btn} ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
