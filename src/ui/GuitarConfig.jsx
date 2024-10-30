import styles from "./GuitarConfig.module.css";
import SelectNumFrets from "./SelectNumFrets";
import SelectNumStrings from "./SelectNumStrings";

function GuitarConfig() {
  return (
    <div className={styles.guitarConfig}>
      <SelectNumStrings />
      <SelectNumFrets />
    </div>
  );
}

export default GuitarConfig;
