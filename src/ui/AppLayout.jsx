import { Outlet } from "react-router-dom";

import Nav from "./Nav";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Nav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
