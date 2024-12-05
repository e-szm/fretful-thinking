import Constants from "../../shared/classes/Constants";
import Note from "../../shared/classes/Note";
import {
  GuitarFretboard,
  GuitarTuning,
  GuitarView,
  GuitarTonality,
} from "../../shared/lib/types";

import { generateAllNotes } from "./helpers/generateAllNotes";
import { generatePentatonic } from "./helpers/generatePentatonic";
import { generateChord } from "./helpers/generateChord";

interface FretboardOptions {
  tuning: GuitarTuning;
  numFrets: number;
  view: GuitarView;

  pentShape?: number; // Pentatonic shape, currently 1-5
  tonality?: GuitarTonality; // Major minor
  note?: string; // Note filter selected by user
  root?: number; // Root string number for chords, currently 5 or 6
  quizInProgress?: boolean; // Determines note display, such as empty labels for quiz
}

function addStdOpenStrings(fretboard: GuitarFretboard) {
  fretboard[0].forEach((note, i) => {
    if (note === null)
      fretboard[0][i] = new Note(Constants.STD_FRETBOARD[0][i]);
  });

  return fretboard;
}

export function generateFretboard({
  tuning,
  numFrets,
  view,
  pentShape,
  tonality,
  note,
  root,
  quizInProgress,
}: FretboardOptions): GuitarFretboard {
  if (view === "pentatonics")
    return addStdOpenStrings(generatePentatonic(note, pentShape, tonality));
  if (view === "chords")
    return addStdOpenStrings(generateChord(note, root, tonality));

  // Else view = "all"
  return generateAllNotes(tuning, numFrets, quizInProgress);
}
