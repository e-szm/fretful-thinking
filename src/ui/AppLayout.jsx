import styles from "./AppLayout.module.css";
import AppMenu from "./AppMenu";
import MainContent from "./MainContent";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <AppMenu />
      <MainContent />
    </div>
  );
}

export default AppLayout;
