import SelectNumFrets from "./SelectNumFrets";
import Guitar from "../features/guitar/Guitar";
import FilterNotes from "./FilterNotes";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <FilterNotes />
      <SelectNumFrets />
      <Guitar />
    </div>
  );
}

export default AppLayout;
