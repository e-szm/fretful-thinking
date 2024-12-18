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

const goldStyle: { style: NoteStyle } = { style: "gold" };
const blueStyle: { style: NoteStyle } = { style: "blue" };
function getStyle(curNote: string, rootNote: string): { style: NoteStyle } {
  if (curNote === rootNote) return goldStyle;
  return blueStyle;
}

function generatePentShape1(
  note: string,
  tonality: GuitarTonality
): GuitarFretboard {
  const startingString = tonality === "minor" ? 5 : 2; // Low E : G
  const scalePosition = STD_FRETBOARD.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = STD_FRETBOARD[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push(
        curFret.map((fretNote) => new Note(fretNote, getStyle(fretNote, note)))
      );
      continue;
    }
    if (curFretNum === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], getStyle(curFret[2], note)),
        new Note(curFret[3], getStyle(curFret[3], note)),
        new Note(curFret[4], getStyle(curFret[4], note)),
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push([
        new Note(curFret[0], getStyle(curFret[0], note)),
        new Note(curFret[1], getStyle(curFret[1], note)),
        null,
        null,
        null,
        new Note(curFret[5], getStyle(curFret[5], note)),
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentShape2(
  note: string,
  tonality: GuitarTonality
): GuitarFretboard {
  const startingString = tonality === "minor" ? 3 : 5; // D : Low E
  let scalePosition = STD_FRETBOARD.findIndex(
    (fret) => fret[startingString] === note
  );

  if (tonality === "major") scalePosition -= 1;

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = STD_FRETBOARD[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], getStyle(curFret[2], note)),
        new Note(curFret[3], getStyle(curFret[3], note)),
        new Note(curFret[4], getStyle(curFret[4], note)),
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        new Note(curFret[0], getStyle(curFret[0], note)),
        new Note(curFret[1], getStyle(curFret[1], note)),
        null,
        null,
        null,
        new Note(curFret[5], getStyle(curFret[5], note)),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], getStyle(curFret[2], note)),
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push([
        new Note(curFret[0], getStyle(curFret[0], note)),
        new Note(curFret[1], getStyle(curFret[1], note)),
        null,
        new Note(curFret[3], getStyle(curFret[3], note)),
        new Note(curFret[4], getStyle(curFret[4], note)),
        new Note(curFret[5], getStyle(curFret[5], note)),
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentShape3(
  note: string,
  tonality: GuitarTonality
): GuitarFretboard {
  const startingString = tonality === "minor" ? 1 : 3; // B : D
  const scalePosition = STD_FRETBOARD.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = STD_FRETBOARD[curFretNum];

    if (curFretNum === scalePosition - 1) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], getStyle(curFret[2], note)),
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition) {
      fretboard.push([
        new Note(curFret[0], getStyle(curFret[0], note)),
        new Note(curFret[1], getStyle(curFret[1], note)),
        null,
        new Note(curFret[3], getStyle(curFret[3], note)),
        new Note(curFret[4], getStyle(curFret[4], note)),
        new Note(curFret[5], getStyle(curFret[5], note)),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 2) {
      fretboard.push([
        new Note(curFret[0], getStyle(curFret[0], note)),
        null,
        new Note(curFret[2], getStyle(curFret[2], note)),
        new Note(curFret[3], getStyle(curFret[3], note)),
        new Note(curFret[4], getStyle(curFret[4], note)),
        new Note(curFret[5], getStyle(curFret[5], note)),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push([
        null,
        new Note(curFret[1], getStyle(curFret[1], note)),
        null,
        null,
        null,
        null,
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentShape4(
  note: string,
  tonality: GuitarTonality
): GuitarFretboard {
  const startingString = tonality === "minor" ? 4 : 1; // A : B
  let scalePosition = STD_FRETBOARD.findIndex(
    (fret) => fret[startingString] === note
  );

  if (tonality === "major") scalePosition -= 1;

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = STD_FRETBOARD[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        new Note(curFret[0], getStyle(curFret[0], note)),
        null,
        new Note(curFret[2], getStyle(curFret[2], note)),
        new Note(curFret[3], getStyle(curFret[3], note)),
        new Note(curFret[4], getStyle(curFret[4], note)),
        new Note(curFret[5], getStyle(curFret[5], note)),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        null,
        new Note(curFret[1], getStyle(curFret[1], note)),
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
        null,
        new Note(curFret[2], getStyle(curFret[2], note)),
        new Note(curFret[3], getStyle(curFret[3], note)),
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push([
        new Note(curFret[0], getStyle(curFret[0], note)),
        new Note(curFret[1], getStyle(curFret[1], note)),
        null,
        null,
        new Note(curFret[4], getStyle(curFret[4], note)),
        new Note(curFret[5], getStyle(curFret[5], note)),
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentShape5(
  note: string,
  tonality: GuitarTonality
): GuitarFretboard {
  const startingString = tonality === "minor" ? 2 : 4; // G : A
  let scalePosition = STD_FRETBOARD.findIndex(
    (fret) => fret[startingString] === note
  );

  if (tonality === "major") scalePosition -= 1;

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = STD_FRETBOARD[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], getStyle(curFret[2], note)),
        new Note(curFret[3], getStyle(curFret[3], note)),
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        new Note(curFret[0], getStyle(curFret[0], note)),
        new Note(curFret[1], getStyle(curFret[1], note)),
        null,
        null,
        new Note(curFret[4], getStyle(curFret[4], note)),
        new Note(curFret[5], getStyle(curFret[5], note)),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push(
        curFret.map((fretNote) => new Note(fretNote, getStyle(fretNote, note)))
      );
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentatonic(
  note?: string,
  shape = 1,
  tonality: GuitarTonality = "minor"
): GuitarFretboard {
  // Empty fretboard when user selects pentatonics view, but not a note yet
  if (!note) return emptyFretboard;

  if (shape === 1) return generatePentShape1(note, tonality);
  if (shape === 2) return generatePentShape2(note, tonality);
  if (shape === 3) return generatePentShape3(note, tonality);
  if (shape === 4) return generatePentShape4(note, tonality);
  if (shape === 5) return generatePentShape5(note, tonality);

  throw new Error("Invalid pentShape");
}

export { generatePentatonic };
