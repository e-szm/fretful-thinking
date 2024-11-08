import styles from "./GuitarConfig.module.css";
import SelectNumFrets from "./SelectNumFrets";

function GuitarConfig() {
  return (
    <div className={styles.guitarConfig}>
      <SelectNumFrets />
    </div>
  );
}

export default GuitarConfig;
