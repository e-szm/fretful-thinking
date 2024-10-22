import styles from "./InputTuning.module.css";

function InputTuning({ note, stringNum, onTune, onFocus }) {
  return (
    <input
      className={styles.input}
      type="text"
      maxLength="2"
      value={note}
      data-stringnum={stringNum}
      onChange={onTune}
      onFocus={onFocus}
    />
  );
}

export default InputTuning;
