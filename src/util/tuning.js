import Note from "./Note";

const emptyFretboard = Array.from({ length: 15 }, () =>
  Array.from({ length: 6 }, () => null)
);

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

function getTuningIndices(tuning) {
  if (!tuning.length) return;
  return tuning.map((note) => NOTES.indexOf(note));
}

function generateAllNotes(
  tuning = ["E", "A", "D", "G", "B", "E"],
  numFrets = 14
) {
  const numStrings = tuning.length;
  if (numStrings < 3 || numStrings > 8)
    throw new Error("Please provide 3 to 8 strings");

  const reversed = tuning.toReversed();
  const tuningIndices = getTuningIndices(reversed);
  const fretboard = [reversed.map((note) => new Note(note))];
  for (let i = 0; i < numFrets; ++i) {
    const fret = [];
    for (let j = 0; j < tuningIndices.length; ++j) {
      tuningIndices[j] =
        tuningIndices[j] >= NOTES.length - 1 ? 0 : tuningIndices[j] + 1;
      fret.push(new Note(NOTES.at(tuningIndices[j])));
    }
    fretboard.push(fret);
  }

  return fretboard;
}

function generatePentShape1(note, tonality) {
  const startingString = tonality === "minor" ? 5 : 2; // Low E : G
  const scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = standardFretboard[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push(
        curFret.map((fretNote) => new Note(fretNote, fretNote === note))
      );
      continue;
    }
    if (curFretNum === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], curFret[2] === note),
        new Note(curFret[3], curFret[3] === note),
        new Note(curFret[4], curFret[4] === note),
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note),
        new Note(curFret[1], curFret[1] === note),
        null,
        null,
        null,
        new Note(curFret[5], curFret[5] === note),
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentShape2(note, tonality) {
  const startingString = tonality === "minor" ? 3 : 5; // D : Low E
  let scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  if (tonality === "major") scalePosition -= 1;

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = standardFretboard[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], curFret[2] === note),
        new Note(curFret[3], curFret[3] === note),
        new Note(curFret[4], curFret[4] === note),
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note),
        new Note(curFret[1], curFret[1] === note),
        null,
        null,
        null,
        new Note(curFret[5], curFret[5] === note),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], curFret[2] === note),
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note),
        new Note(curFret[1], curFret[1] === note),
        null,
        new Note(curFret[3], curFret[3] === note),
        new Note(curFret[4], curFret[4] === note),
        new Note(curFret[5], curFret[5] === note),
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentShape3(note, tonality) {
  const startingString = tonality === "minor" ? 1 : 3; // B : D
  const scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = standardFretboard[curFretNum];

    if (curFretNum === scalePosition - 1) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], curFret[2] === note),
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note),
        new Note(curFret[1], curFret[1] === note),
        null,
        new Note(curFret[3], curFret[3] === note),
        new Note(curFret[4], curFret[4] === note),
        new Note(curFret[5], curFret[5] === note),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 2) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note),
        null,
        new Note(curFret[2], curFret[2] === note),
        new Note(curFret[3], curFret[3] === note),
        new Note(curFret[4], curFret[4] === note),
        new Note(curFret[5], curFret[5] === note),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push([
        null,
        new Note(curFret[1], curFret[1] === note),
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

function generatePentShape4(note, tonality) {
  const startingString = tonality === "minor" ? 4 : 1; // A : B
  let scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  if (tonality === "major") scalePosition -= 1;

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = standardFretboard[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note),
        null,
        new Note(curFret[2], curFret[2] === note),
        new Note(curFret[3], curFret[3] === note),
        new Note(curFret[4], curFret[4] === note),
        new Note(curFret[5], curFret[5] === note),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        null,
        new Note(curFret[1], curFret[1] === note),
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
        new Note(curFret[2], curFret[2] === note),
        new Note(curFret[3], curFret[3] === note),
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note),
        new Note(curFret[1], curFret[1] === note),
        null,
        null,
        new Note(curFret[4], curFret[4] === note),
        new Note(curFret[5], curFret[5] === note),
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentShape5(note, tonality) {
  const startingString = tonality === "minor" ? 2 : 4; // G : A
  let scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  if (tonality === "major") scalePosition -= 1;

  const fretboard = [];
  for (let curFretNum = 0; curFretNum < emptyFretboard.length; ++curFretNum) {
    const curFret = standardFretboard[curFretNum];

    if (curFretNum === scalePosition) {
      fretboard.push([
        null,
        null,
        new Note(curFret[2], curFret[2] === note),
        new Note(curFret[3], curFret[3] === note),
        null,
        null,
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 1) {
      fretboard.push([
        new Note(curFret[0], curFret[0] === note),
        new Note(curFret[1], curFret[1] === note),
        null,
        null,
        new Note(curFret[4], curFret[4] === note),
        new Note(curFret[5], curFret[5] === note),
      ]);
      continue;
    }
    if (curFretNum === scalePosition + 3) {
      fretboard.push(
        curFret.map((fretNote) => new Note(fretNote, fretNote === note))
      );
      continue;
    } else fretboard.push([...emptyFretboard[curFretNum]]);
  }

  return fretboard;
}

function generatePentatonic(note, shape = 1, tonality = "minor") {
  if (!note) return emptyFretboard;

  if (shape === 1) return generatePentShape1(note, tonality);
  if (shape === 2) return generatePentShape2(note, tonality);
  if (shape === 3) return generatePentShape3(note, tonality);
  if (shape === 4) return generatePentShape4(note, tonality);
  if (shape === 5) return generatePentShape5(note, tonality);
}

// const aMajorPentatonic = [
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   ["A", "E", "C", "G", "D", "A"], // 5
//   [null, null, null, null, null, null], // 6
//   [null, null, "D", "A", "E", null], // 7
//   ["C", "G", null, null, null, "C"], // 8
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
// ];

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

export function generateFretboard({
  tuning,
  view,
  pentShape,
  tonality,
  note,
  root,
}) {
  if (view === "all") return generateAllNotes(tuning);
  if (view === "pentatonics")
    return generatePentatonic(note, pentShape, tonality);
  if (view === "chords") return generateChord(root, note, tonality);
}
