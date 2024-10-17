const NOTES = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function getTuningIndices(tuning) {
  if (!tuning.length) return;
  return tuning.map((note) => NOTES.indexOf(note));
}

export function generateTuning(
  tuning = ["E", "A", "D", "G", "B", "E"],
  numFrets = 12
) {
  const numStrings = tuning.length;
  if (numStrings < 3 || numStrings > 8)
    throw new Error("Please provide 3 to 8 strings");

  const reversed = tuning.toReversed();
  const tuningIndices = getTuningIndices(reversed);
  const fretboard = [reversed];
  for (let i = 0; i < numFrets; ++i) {
    const fret = [];
    for (let j = 0; j < tuningIndices.length; ++j) {
      tuningIndices[j] =
        tuningIndices[j] >= NOTES.length - 1 ? 0 : tuningIndices[j] + 1;
      fret.push(NOTES.at(tuningIndices[j]));
    }
    fretboard.push(fret);
  }

  return fretboard;
}
