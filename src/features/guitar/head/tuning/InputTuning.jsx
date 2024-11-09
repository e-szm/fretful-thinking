import styles from "./InputTuning.module.css";

function InputTuning({ note, stringNum, onTune, onFocus, view, disabled }) {
  const isInScale = note?.inScale && note.note && view !== "all";

  return (
    <input
      className={`${styles.input} ${isInScale ? "inScale" : ""} ${
        note?.isRoot ? "root" : ""
      }`}
      type="text"
      maxLength="2"
      value={note?.note || " "}
      data-stringnum={stringNum}
      onChange={onTune}
      onFocus={onFocus}
      disabled={disabled}
    />
  );
}

export default InputTuning;
