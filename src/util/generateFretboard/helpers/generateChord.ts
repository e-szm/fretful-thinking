import { getEmptyFretboard } from "./getEmptyFretboard";
import Note from "../../../shared/classes/Note";
import Constants from "../../../shared/classes/Constants";
import {
  GuitarFretboard,
  GuitarTonality,
  NoteStyle,
} from "../../../shared/lib/types";

const STD_FRETBOARD = Constants.STD_FRETBOARD;
const emptyFretboard = getEmptyFretboard();

function getOptions(
  curNote: string,
  rootNote: string,
  isBarre: boolean = false
): { style: NoteStyle; isBarre: boolean } {
  if (curNote === rootNote) return { style: "gold", isBarre };
  return { style: "blue", isBarre };
}

function generateBarreChordOn6(
  note: string,
  tonality: GuitarTonality
): GuitarFretboard {
  const isMajor = tonality === "major";
  const startingString = 5; // Low E
  let scalePosition = STD_FRETBOARD.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = STD_FRETBOARD[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        new Note(curFret[0], getOptions(curFret[0], note, true)),
        new Note(curFret[1], getOptions(curFret[1], note, true)),
        isMajor
          ? new Note("", { isBarre: true }) // Barre Only
          : new Note(curFret[2], getOptions(curFret[2], note, true)),
        new Note("", { isBarre: true }), // Barre Only
        new Note("", { isBarre: true }), // Barre Only
        new Note(curFret[5], getOptions(curFret[5], note, true)),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        null,
        null,
        isMajor ? new Note(curFret[2], getOptions(curFret[2], note)) : null,
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
        new Note(curFret[3], getOptions(curFret[3], note)),
        new Note(curFret[4], getOptions(curFret[4], note)),
        null,
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generateBarreChordOn5(
  note: string,
  tonality: GuitarTonality
): GuitarFretboard {
  const isMajor = tonality === "major";
  const startingString = 4; // A
  let scalePosition = STD_FRETBOARD.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = STD_FRETBOARD[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        new Note(curFret[0], getOptions(curFret[0], note, true)),
        new Note("", { isBarre: true }), // Barre Only
        new Note("", { isBarre: true }), // Barre Only
        new Note("", { isBarre: true }), // Barre Only
        new Note(curFret[4], getOptions(curFret[4], note, true)),
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        null,
        isMajor ? null : new Note(curFret[1], getOptions(curFret[1], note)),
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
        isMajor ? new Note(curFret[1], getOptions(curFret[1], note)) : null,
        new Note(curFret[2], getOptions(curFret[2], note)),
        new Note(curFret[3], getOptions(curFret[3], note)),
        null,
        null,
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generateChord(
  note: string | undefined,
  rootString: number = 6,
  tonality: GuitarTonality = "minor"
) {
  // Empty fretboard when user selects chords view, but not a note yet
  if (!note) return emptyFretboard;

  if (rootString === 6) return generateBarreChordOn6(note, tonality);
  // Else root 5
  return generateBarreChordOn5(note, tonality);
}

export { generateChord };
