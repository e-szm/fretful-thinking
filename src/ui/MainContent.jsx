import styles from "./MainContent.module.css";
import Guitar from "../features/guitar/Guitar";
import FilterNotes from "./FilterNotes";
import SelectNumFrets from "./SelectNumFrets";
import SelectNumStrings from "./SelectNumStrings";
import SelectPentShape from "./SelectPentShape";
import SelectTonality from "./SelectTonality";

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <SelectPentShape />
      <SelectTonality />
      <FilterNotes />
      <SelectNumFrets />
      <SelectNumStrings />
      <Guitar />
    </div>
  );
}

export default MainContent;
