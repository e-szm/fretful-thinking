// import { useDispatch } from "react-redux";

import { useGuitarQuery } from "../hooks/useGuitarQuery";
// import { updateFretboard } from "../features/guitar/guitarSlice";
import { NOTES } from "../util/tuning";

import styles from "./FilterNotes.module.css";

function NoteFilter({ note, onClick, currentFilter }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.filter} ${currentFilter === note ? "active" : ""}`}
    >
      {note}
    </button>
  );
}

function FilterNotes() {
  // const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useGuitarQuery();

  function handleClickFilter(clickedNote) {
    let newParams;
    if (clickedNote === searchParams.note) {
      newParams = { ...searchParams };
      delete newParams.note;
    } else newParams = { ...searchParams, note: clickedNote };

    setSearchParams(newParams);
    // dispatch(updateFretboard(newParams));
  }

  return (
    <div className={styles.filterContainer}>
      {NOTES.map((note) => (
        <NoteFilter
          key={note}
          note={note}
          onClick={() => handleClickFilter(note)}
          currentFilter={searchParams.note}
        />
      ))}
    </div>
  );
}

export default FilterNotes;
