import styles from "./Note.module.css";

function Note({ note, root }) {
  return (
    <div className={`${styles.note} ${root ? "root" : ""}`}>
      <p>{note}</p>
    </div>
  );
}

export default Note;
