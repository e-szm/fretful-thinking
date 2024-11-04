import styles from "./GuitarDisplay.module.css";
import GuitarConfig from "./GuitarConfig";
import AppMenu from "./AppMenu";
import Guitar from "../features/guitar/Guitar";

function GuitarDisplay() {
  return (
    <div className={styles.guitarLayout}>
      <GuitarConfig />
      <div className={styles.guitarContainer}>
        <AppMenu />
        <Guitar />
      </div>
    </div>
  );
}

export default GuitarDisplay;
