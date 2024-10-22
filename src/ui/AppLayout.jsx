import styles from "./AppLayout.module.css";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default AppLayout;
