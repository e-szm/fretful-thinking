import { useDispatch } from "react-redux";

import { addNoteFilter } from "../features/guitar/guitarSlice";
import { NOTES } from "../util/tuning";

import styles from "./FilterNotes.module.css";

function NoteFilter({ note, onClick }) {
  return (
    <button data-note={note} onClick={onClick}>
      {note}
    </button>
  );
}

function FilterNotes() {
  const dispatch = useDispatch();

  function handleClickFilter(e) {
    dispatch(addNoteFilter(e.target.dataset.note));
  }

  return (
    <div className={styles["filter-container"]}>
      {NOTES.map((note) => (
        <NoteFilter key={note} note={note} onClick={handleClickFilter} />
      ))}
    </div>
  );
}

export default FilterNotes;
