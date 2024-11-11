import styles from "./Note.module.css";

function Note({ note }) {
  return (
    <div className={`${styles.note} ${note.isRoot ? "root" : ""}`}>
      {note.note}
    </div>
  );
}

export default Note;
