import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.css";
import Header from "../features/header/Header";

const AppLayout: React.FC = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
