import styles from "./Button.module.css";

function Button({ onClick, children }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
