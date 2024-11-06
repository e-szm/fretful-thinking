import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.css";
import Nav from "./Nav";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Nav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
