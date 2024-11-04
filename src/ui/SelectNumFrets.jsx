import { useSearchParams } from "react-router-dom";

import { useGuitarParams } from "../hooks/useGuitarParams";
import { useGuitarNavigate } from "../hooks/useGuitarNavigate";

import styles from "./SelectNumFrets.module.css";

function SelectNumFrets() {
  const [searchParams] = useSearchParams();
  const { numFrets, tuning } = useGuitarParams();
  const navigateGuitar = useGuitarNavigate();

  function handleNumFretChange(e) {
    const newNumFrets = e.target.value;
    navigateGuitar({ numFrets: newNumFrets, tuning }, searchParams);
  }

  return (
    <div className={styles.sliderContainer}>
      <label htmlFor="select-num-frets">Displaying {numFrets} frets.</label>
      <input
        id="select-num-frets"
        type="range"
        min="5"
        max="14"
        value={numFrets}
        onChange={handleNumFretChange}
      />
    </div>
  );
}

export default SelectNumFrets;
