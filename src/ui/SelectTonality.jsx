import { useDispatch } from "react-redux";

import { setTonality } from "../features/guitar/guitarSlice";

function SelectTonality() {
  const dispatch = useDispatch();

  function handleClickTonality(e) {
    dispatch(setTonality(e.target.dataset.tonality));
  }

  return (
    <div>
      <button data-tonality="minor" onClick={handleClickTonality}>
        Minor
      </button>
      <button data-tonality="major" onClick={handleClickTonality}>
        Major
      </button>
    </div>
  );
}

export default SelectTonality;
