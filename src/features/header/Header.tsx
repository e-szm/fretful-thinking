import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="/logo.png"
        alt="Fretful Thinking logo"
      />
    </div>
  );
};

export default Header;
