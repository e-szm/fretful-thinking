const emptyFretboard = Array.from({ length: 13 }, () =>
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

function generatePentShape1(note, tonality) {
  const startingString = tonality === "minor" ? 5 : 2; // Low E : G
  const scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFret = 0; curFret < emptyFretboard.length; ++curFret) {
    if (curFret === scalePosition) {
      fretboard.push([...standardFretboard[curFret]]);
      continue;
    }
    if (curFret === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        standardFretboard[curFret][2],
        standardFretboard[curFret][3],
        standardFretboard[curFret][4],
        null,
      ]);
      continue;
    }
    if (curFret === scalePosition + 3) {
      fretboard.push([
        standardFretboard[curFret][0],
        standardFretboard[curFret][1],
        null,
        null,
        null,
        standardFretboard[curFret][5],
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFret]]);
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
  for (let curFret = 0; curFret < emptyFretboard.length; ++curFret) {
    if (curFret === scalePosition) {
      fretboard.push([
        null,
        null,
        standardFretboard[curFret][2],
        standardFretboard[curFret][3],
        standardFretboard[curFret][4],
        null,
      ]);
      continue;
    }
    if (curFret === scalePosition + 1) {
      fretboard.push([
        standardFretboard[curFret][0],
        standardFretboard[curFret][1],
        null,
        null,
        null,
        standardFretboard[curFret][5],
      ]);
      continue;
    }
    if (curFret === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        standardFretboard[curFret][2],
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFret === scalePosition + 3) {
      fretboard.push([
        standardFretboard[curFret][0],
        standardFretboard[curFret][1],
        null,
        standardFretboard[curFret][3],
        standardFretboard[curFret][4],
        standardFretboard[curFret][5],
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFret]]);
  }

  return fretboard;
}

function generatePentShape3(note, tonality) {
  const startingString = tonality === "minor" ? 1 : 3; // B : D
  const scalePosition = standardFretboard.findIndex(
    (fret) => fret[startingString] === note
  );

  const fretboard = [];
  for (let curFret = 0; curFret < emptyFretboard.length; ++curFret) {
    if (curFret === scalePosition - 1) {
      fretboard.push([
        null,
        null,
        standardFretboard[curFret][2],
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFret === scalePosition) {
      fretboard.push([
        standardFretboard[curFret][0],
        standardFretboard[curFret][1],
        null,
        standardFretboard[curFret][3],
        standardFretboard[curFret][4],
        standardFretboard[curFret][5],
      ]);
      continue;
    }
    if (curFret === scalePosition + 2) {
      fretboard.push([
        standardFretboard[curFret][0],
        null,
        standardFretboard[curFret][2],
        standardFretboard[curFret][3],
        standardFretboard[curFret][4],
        standardFretboard[curFret][5],
      ]);
      continue;
    }
    if (curFret === scalePosition + 3) {
      fretboard.push([
        null,
        standardFretboard[curFret][1],
        null,
        null,
        null,
        null,
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFret]]);
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
  for (let curFret = 0; curFret < emptyFretboard.length; ++curFret) {
    if (curFret === scalePosition) {
      fretboard.push([
        standardFretboard[curFret][0],
        null,
        standardFretboard[curFret][2],
        standardFretboard[curFret][3],
        standardFretboard[curFret][4],
        standardFretboard[curFret][5],
      ]);
      continue;
    }
    if (curFret === scalePosition + 1) {
      fretboard.push([
        null,
        standardFretboard[curFret][1],
        null,
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFret === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        standardFretboard[curFret][2],
        standardFretboard[curFret][3],
        null,
        null,
      ]);
      continue;
    }
    if (curFret === scalePosition + 3) {
      fretboard.push([
        standardFretboard[curFret][0],
        standardFretboard[curFret][1],
        null,
        null,
        standardFretboard[curFret][4],
        standardFretboard[curFret][5],
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFret]]);
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
  for (let curFret = 0; curFret < emptyFretboard.length; ++curFret) {
    if (curFret === scalePosition) {
      fretboard.push([
        null,
        null,
        standardFretboard[curFret][2],
        standardFretboard[curFret][3],
        null,
        null,
      ]);
      continue;
    }
    if (curFret === scalePosition + 1) {
      fretboard.push([
        standardFretboard[curFret][0],
        standardFretboard[curFret][1],
        null,
        null,
        standardFretboard[curFret][4],
        standardFretboard[curFret][5],
      ]);
      continue;
    }
    if (curFret === scalePosition + 3) {
      fretboard.push([...standardFretboard[curFret]]);
      continue;
    } else fretboard.push([...emptyFretboard[curFret]]);
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
  for (let curFret = 0; curFret < emptyFretboard.length; ++curFret) {
    if (curFret === scalePosition) {
      fretboard.push([
        standardFretboard[curFret][0],
        standardFretboard[curFret][1],
        isMajor ? false : standardFretboard[curFret][2], // Barre
        false, // Barre
        false, // Barre
        standardFretboard[curFret][5],
      ]);
      continue;
    }
    if (curFret === scalePosition + 1) {
      fretboard.push([
        null,
        null,
        isMajor ? standardFretboard[curFret][2] : null, // Barre
        null,
        null,
        null,
      ]);
      continue;
    }
    if (curFret === scalePosition + 2) {
      fretboard.push([
        null,
        null,
        null,
        standardFretboard[curFret][3],
        standardFretboard[curFret][4],
        null,
      ]);
      continue;
    } else fretboard.push([...emptyFretboard[curFret]]);
  }

  return fretboard;
}

export function generateFretboard({ tuning, view, pentShape, tonality, note }) {
  if (view === "all") return generateAllNotes(tuning);
  if (view === "pentatonics")
    return generatePentatonic(note, pentShape, tonality);
  if (view === "chords") return generateBarreChordOn6(note, tonality);
}
