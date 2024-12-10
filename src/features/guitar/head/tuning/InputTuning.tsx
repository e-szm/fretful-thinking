import styles from "./InputTuning.module.css";
import Note from "../../../../shared/classes/Note";

function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
  e.target.select();
}

interface InputTuningProps {
  note: Note | null;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
}

const InputTuning: React.FC<InputTuningProps> = ({
  note,
  onChange,
  disabled,
}) => {
  let defaultVal;
  if (note === null || note.isHidden) defaultVal = "";
  else defaultVal = note.label;

  return (
    <input
      className={`${styles.input} ${note ? note.style : ""}`}
      type="text"
      maxLength={2}
      value={defaultVal}
      onChange={onChange}
      onFocus={handleFocus}
      disabled={disabled}
    />
  );
};

export default InputTuning;
