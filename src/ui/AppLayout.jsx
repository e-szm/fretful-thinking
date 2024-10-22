import styles from "./AppLayout.module.css";
import MainContent from "./MainContent";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <MainContent />
    </div>
  );
}

export default AppLayout;
