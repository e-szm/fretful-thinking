import styles from "./Note.module.css";

function Note({ note }) {
  return (
    <div className={styles.note}>
      <p>{note}</p>
    </div>
  );
}

export default Note;
