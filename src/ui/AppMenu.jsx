import { useDispatch } from "react-redux";

import { setMenu } from "../features/guitar/guitarSlice";

function AppMenu() {
  const dispatch = useDispatch();

  function handleClickFretboard() {
    dispatch(setMenu("fretboard"));
  }

  function handleClickPentatonic() {
    dispatch(setMenu("pentatonic"));
  }

  return (
    <div>
      <button onClick={handleClickFretboard}>Fretboard</button>
      <button onClick={handleClickPentatonic}>Pentatonics</button>
    </div>
  );
}

export default AppMenu;
