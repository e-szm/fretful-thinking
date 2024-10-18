import { useDispatch, useSelector } from "react-redux";

import { getNumFrets, updateNumFrets } from "../features/guitar/guitarSlice";

import styles from "./SelectNumFrets.module.css";

function SelectNumFrets() {
  const numFrets = useSelector(getNumFrets);
  const dispatch = useDispatch();

  return (
    <div className={styles.sliderContainer}>
      <label htmlFor="select-num-frets">Displaying {numFrets} frets.</label>
      <input
        id="select-num-frets"
        type="range"
        min="5"
        max="12"
        value={numFrets}
        onChange={(e) => dispatch(updateNumFrets(Number(e.target.value)))}
      />
    </div>
  );
}

export default SelectNumFrets;
