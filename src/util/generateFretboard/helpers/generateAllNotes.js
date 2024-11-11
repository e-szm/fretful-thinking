import Note from "../../Note";

const NOTES = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function getTuningIndices(tuning) {
  if (!tuning.length) return;
  return tuning.map((note) => NOTES.indexOf(note));
}

function generateAllNotes(
  tuning = ["E", "A", "D", "G", "B", "E"],
  numFrets = 14,
  hidden = false
) {
  const numStrings = tuning.length;
  if (numStrings < 3 || numStrings > 8)
    throw new Error("Please provide 3 to 8 strings");

  const reversed = tuning.toReversed();
  const tuningIndices = getTuningIndices(reversed);
  const fretboard = [
    reversed.map((note) => new Note(note, false, false, hidden)),
  ];
  for (let i = 0; i < numFrets; ++i) {
    const fret = [];
    for (let j = 0; j < tuningIndices.length; ++j) {
      tuningIndices[j] =
        tuningIndices[j] >= NOTES.length - 1 ? 0 : tuningIndices[j] + 1;
      fret.push(new Note(NOTES.at(tuningIndices[j]), false, false, hidden));
    }
    fretboard.push(fret);
  }

  return fretboard;
}

export { generateAllNotes };
