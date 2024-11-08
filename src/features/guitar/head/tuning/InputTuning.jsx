import styles from "./InputTuning.module.css";

function InputTuning({
  note,
  noteFilter,
  stringNum,
  onTune,
  onFocus,
  view,
  disabled,
}) {
  const isInScale = note && view !== "all";
  const isScaleKey = isInScale && note === noteFilter;

  return (
    <input
      className={`${styles.input} ${isInScale ? "inScale" : ""} ${
        isScaleKey ? "scaleKey" : ""
      }`}
      type="text"
      maxLength="2"
      value={note || " "}
      data-stringnum={stringNum}
      onChange={onTune}
      onFocus={onFocus}
      disabled={disabled}
    />
  );
}

export default InputTuning;
