import styles from "./NoteFilter.module.css";

interface NoteFilterProps {
  noteFilter: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  curFilter: string | undefined;
}

// TODO: Should use shared Button component
const NoteFilter: React.FC<NoteFilterProps> = ({
  noteFilter,
  onClick,
  curFilter,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.filter} ${curFilter === noteFilter ? "active" : ""}`}
    >
      {noteFilter}
    </button>
  );
};

export default NoteFilter;
