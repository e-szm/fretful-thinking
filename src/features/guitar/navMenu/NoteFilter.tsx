import styles from "./NoteFilter.module.css";

interface NoteFilterProps {
  noteFilter: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  curFilter: string | undefined;
}

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
