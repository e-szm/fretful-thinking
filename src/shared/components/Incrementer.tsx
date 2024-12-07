import styles from "./Incrementer.module.css";
import Button from "./Button";

interface IncrementerProps {
  onDecrement: React.MouseEventHandler<HTMLButtonElement>;
  onIncrement: React.MouseEventHandler<HTMLButtonElement>;
  disableDec: boolean;
  disableInc: boolean;
  children: React.ReactNode;
}

const Incrementer: React.FC<IncrementerProps> = ({
  onDecrement,
  onIncrement,
  disableDec,
  disableInc,
  children,
}) => {
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
};

export default Incrementer;
