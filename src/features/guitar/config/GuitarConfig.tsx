import styles from "./GuitarConfig.module.css";
import SelectNumFrets from "./SelectNumFrets";

const GuitarConfig: React.FC = () => {
  return (
    <div className={styles.guitarConfig}>
      <SelectNumFrets />
    </div>
  );
};

export default GuitarConfig;
