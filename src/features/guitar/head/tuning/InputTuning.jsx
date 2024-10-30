import styles from "./InputTuning.module.css";

function InputTuning({ note, stringNum, onTune, onFocus, disabled }) {
  return (
    <input
      className={styles.input}
      type="text"
      maxLength="2"
      value={note}
      data-stringnum={stringNum}
      onChange={onTune}
      onFocus={onFocus}
      disabled={disabled}
    />
  );
}

export default InputTuning;
