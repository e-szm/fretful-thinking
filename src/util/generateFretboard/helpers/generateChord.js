import { getEmptyFretboard } from "./getEmptyFretboard";
import Note from "../../Note";

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

const emptyFretboard = getEmptyFretboard();

function generateBarreChordOn6(note, tonality) {
  const isMajor = tonality === "major";
  const startingString = 5; // Low E
  let scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = standardFretboard[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note, true),
        new Note(curFret[1], curFret[1] === note, true),
        isMajor
          ? new Note(null, false, true) // Barre
          : new Note(curFret[2], curFret[2] === note, true),
        new Note(null, false, true), // Barre
        new Note(null, false, true), // Barre
        new Note(curFret[5], curFret[5] === note, true),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        null,
        null,
        isMajor ? new Note(curFret[2], curFret[2] === note) : null, // Barre
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        null,
        new Note(curFret[3], curFret[3] === note),
        new Note(curFret[4], curFret[4] === note),
        null,
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generateBarreChordOn5(note, tonality) {
  const isMajor = tonality === "major";
  const startingString = 4; // A
  let scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = standardFretboard[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note, true),
        new Note(null, null, true),
        new Note(null, null, true),
        new Note(null, null, true),
        new Note(curFret[4], curFret[4] === note, true), // Barre
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        null,
        isMajor ? null : new Note(curFret[1], curFret[1] === note),
        null,
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 2) {
      fretboard.push([
        null,
        isMajor ? new Note(curFret[1], curFret[1] === note) : null,
        new Note(curFret[2], curFret[2] === note),
        new Note(curFret[3], curFret[3] === note),
        null,
        null,
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generateChord(rootString, note, tonality) {
  if (!note) return emptyFretboard;

  if (rootString === 6) return generateBarreChordOn6(note, tonality);
  if (rootString === 5) return generateBarreChordOn5(note, tonality);
}

export { generateChord };
