import styles from "./Note.module.css";

function Note({ note }) {
  return (
    <div className={`${styles.note} ${note.isRoot ? "root" : ""}`}>
      <p>{note.note}</p>
    </div>
  );
}

export default Note;
