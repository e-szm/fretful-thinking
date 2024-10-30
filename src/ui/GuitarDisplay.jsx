import styles from "./GuitarDisplay.module.css";
import GuitarConfig from "./GuitarConfig";
import FilterNotes from "./FilterNotes";
import AppMenu from "./AppMenu";
import Guitar from "../features/guitar/Guitar";

function GuitarDisplay() {
  return (
    <div className={styles.guitarDisplay}>
      <GuitarConfig />
      <FilterNotes />
      <AppMenu />
      <Guitar />
    </div>
  );
}

export default GuitarDisplay;
