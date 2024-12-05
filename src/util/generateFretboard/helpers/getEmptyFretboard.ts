import { GuitarFretboard } from "../../../shared/lib/types";

function getEmptyFretboard(numFrets = 15, numStrings = 6): GuitarFretboard {
  return Array.from({ length: numFrets }, () =>
    Array.from({ length: numStrings }, () => null)
  );
}

export { getEmptyFretboard };
