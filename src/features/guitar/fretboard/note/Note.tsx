import NoteClass from "../../../../shared/classes/Note";
import styles from "./Note.module.css";

interface NoteProps {
  note: NoteClass;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  return <div className={`${styles.note} ${note.style}`}>{note.label}</div>;
};

export default Note;
