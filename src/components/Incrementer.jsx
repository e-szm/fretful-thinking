import styles from "./Incrementer.module.css";
import Button from "./Button";

function Incrementer({
  onDecrement,
  onIncrement,
  disableDec,
  disableInc,
  children,
}) {
  return (
    <div className={styles.incrementer}>
      <Button type="small" onClick={onDecrement} disabled={disableDec}>
        -
      </Button>
      {children}
      <Button type="small" onClick={onIncrement} disabled={disableInc}>
        +
      </Button>
    </div>
  );
}

export default Incrementer;
