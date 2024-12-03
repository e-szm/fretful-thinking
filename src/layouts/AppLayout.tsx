import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.css";
import Nav from "../features/nav/Nav";

const AppLayout: React.FC = () => {
  return (
    <div className={styles.appLayout}>
      <Nav />
      <Outlet />
    </div>
  );
};

export default AppLayout;
