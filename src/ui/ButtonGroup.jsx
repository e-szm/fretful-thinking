import styles from "./ButtonGroup.module.css";

function ButtonGroup({ children }) {
  return <div className={styles.btnGroup}>{children}</div>;
}

export default ButtonGroup;
