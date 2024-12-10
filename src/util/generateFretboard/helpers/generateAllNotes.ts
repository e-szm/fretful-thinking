import Note from "../../../shared/classes/Note";
import Constants from "../../../shared/classes/Constants";
import { GuitarFretboard, GuitarTuning } from "../../../shared/lib/types";

const NOTES = Constants.NOTES;

function getTuningIndices(tuning: GuitarTuning) {
  return tuning.map((note) => NOTES.indexOf(note));
}

function generateAllNotes(
  tuning: GuitarTuning = ["E", "A", "D", "G", "B", "E"],
  numFrets = 14,
  isHiddenLabel = false
): GuitarFretboard {
  const numStrings = tuning.length;
  if (numStrings < Constants.MIN_STRINGS || numStrings > Constants.MAX_STRINGS)
    throw new Error("Invalid number of strings: Must be between 3 and 8");

  const reversedTuning = tuning.toReversed();
  const tuningIndices = getTuningIndices(reversedTuning);
  const fretboard = [
    reversedTuning.map((note) => new Note(note, { style: "none" })),
  ];
  for (let i = 0; i < numFrets; ++i) {
    const fret = [];
    for (let j = 0; j < tuningIndices.length; ++j) {
      tuningIndices[j] =
        tuningIndices[j] >= NOTES.length - 1 ? 0 : tuningIndices[j] + 1;
      const note = NOTES[tuningIndices[j]];

      fret.push(new Note(note, { label: isHiddenLabel ? "" : note }));
    }
    fretboard.push(fret);
  }

  return fretboard;
}

export { generateAllNotes };
