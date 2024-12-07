import styles from "./ButtonGroup.module.css";

interface ButtonGroupProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  disabled = false,
  children,
}) => {
  return (
    <div className={`${styles.btnGroup} ${disabled ? "disabled" : ""}`}>
      {children}
    </div>
  );
};

export default ButtonGroup;
