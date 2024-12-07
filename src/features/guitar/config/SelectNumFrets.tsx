import { useSearchParams } from "react-router-dom";

import { useGuitarParams } from "../../../hooks/useGuitarParams";
import { useGuitarNavigate } from "../../../hooks/useGuitarNavigate";
import Constants from "../../../shared/classes/Constants";

import styles from "./SelectNumFrets.module.css";

const SelectNumFrets: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { numFrets, tuning } = useGuitarParams();
  const navigateGuitar = useGuitarNavigate();

  function handleNumFretChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newNumFrets = Number(e.target.value);
    navigateGuitar({ numFrets: newNumFrets, tuning }, searchParams);
  }

  return (
    <div className={styles.sliderContainer}>
      <label htmlFor="select-num-frets">Displaying {numFrets} frets.</label>
      <input
        id="select-num-frets"
        type="range"
        min={Constants.MIN_FRETS}
        max={Constants.MAX_FRETS}
        value={numFrets}
        onChange={handleNumFretChange}
      />
    </div>
  );
};

export default SelectNumFrets;
