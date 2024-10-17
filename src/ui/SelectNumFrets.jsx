import { useDispatch, useSelector } from "react-redux";

import { getNumFrets, updateNumFrets } from "../features/guitar/guitarSlice";

function SelectNumFrets() {
  const numFrets = useSelector(getNumFrets);
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="range"
        min="5"
        max="12"
        value={numFrets}
        onChange={(e) => dispatch(updateNumFrets(Number(e.target.value)))}
      />{" "}
      <span>{numFrets}</span>
    </>
  );
}

export default SelectNumFrets;
