import { useDispatch, useSelector } from "react-redux";

import { addNoteFilter, getNoteFilter } from "../features/guitar/guitarSlice";
import { NOTES } from "../util/tuning";

import styles from "./FilterNotes.module.css";

function NoteFilter({ note, onClick, currentFilter }) {
  return (
    <button
      data-note={note}
      onClick={onClick}
      className={`${styles.filter} ${currentFilter === note ? "active" : ""}`}
    >
      {note}
    </button>
  );
}

function FilterNotes() {
  const currentFilter = useSelector(getNoteFilter);
  const dispatch = useDispatch();

  function handleClickFilter(e) {
    dispatch(addNoteFilter(e.target.dataset.note));
  }

  return (
    <div className={styles.filterContainer}>
      {NOTES.map((note) => (
        <NoteFilter
          key={note}
          note={note}
          onClick={handleClickFilter}
          currentFilter={currentFilter}
        />
      ))}
    </div>
  );
}

export default FilterNotes;
