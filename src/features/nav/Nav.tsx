import styles from "./Nav.module.css";

const Nav: React.FC = () => {
  return (
    <div className={styles.nav}>
      <img
        className={styles.logo}
        src="/logo.png"
        alt="Fretful Thinking logo"
      />
    </div>
  );
};

export default Nav;
