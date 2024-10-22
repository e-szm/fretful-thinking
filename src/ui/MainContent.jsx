import styles from "./MainContent.module.css";
import Guitar from "../features/guitar/Guitar";
import FilterNotes from "./FilterNotes";
import SelectNumFrets from "./SelectNumFrets";

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <FilterNotes />
      <SelectNumFrets />
      <Guitar />
    </div>
  );
}

export default MainContent;
