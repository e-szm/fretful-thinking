import { generateAllNotes } from "./helpers/generateAllNotes";
import { generatePentatonic } from "./helpers/generatePentatonic";
import { generateChord } from "./helpers/generateChord";
import Note from "../Note";

const standardFretboard = [
  ["E", "B", "G", "D", "A", "E"],
  ["F", "C", "G#", "D#", "A#", "F"],
  ["F#", "C#", "A", "E", "B", "F#"],
  ["G", "D", "A#", "F", "C", "G"],
  ["G#", "D#", "B", "F#", "C#", "G#"],
  ["A", "E", "C", "G", "D", "A"],
  ["A#", "F", "C#", "G#", "D#", "A#"],
  ["B", "F#", "D", "A", "E", "B"],
  ["C", "G", "D#", "A#", "F", "C"],
  ["C#", "G#", "E", "B", "F#", "C#"],
  ["D", "A", "F", "C", "G", "D"],
  ["D#", "A#", "F#", "C#", "G#", "D#"],
  ["E", "B", "G", "D", "A", "E"],
  ["F", "C", "G#", "D#", "A#", "F"],
  ["F#", "C#", "A", "E", "B", "F#"],
];

export const NOTES = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];

function addOpenStrings(fretboard) {
  fretboard[0].forEach((note, i) => {
    if (note === null)
      fretboard[0][i] = new Note(
        standardFretboard[0][i],
        false,
        false,
        false,
        false
      );
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
  quizStatus,
}) {
  if (view === "all")
    return generateAllNotes(
      tuning,
      numFrets,
      quizStatus === "idle" ? false : true
    );
  if (view === "pentatonics")
    return addOpenStrings(generatePentatonic(note, pentShape, tonality));
  if (view === "chords")
    return addOpenStrings(generateChord(root, note, tonality));
}
