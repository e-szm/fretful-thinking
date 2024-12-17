import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="/logo.png"
        alt="Fretful Thinking logo"
      />
    </header>
  );
};

export default Header;
