import SelectTuning from "./SelectTuning";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SelectTuning />
    </div>
  );
}

export default Sidebar;
