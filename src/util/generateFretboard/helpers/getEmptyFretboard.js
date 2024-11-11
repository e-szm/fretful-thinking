function getEmptyFretboard(numFrets = 15, numStrings = 6) {
  return Array.from({ length: numFrets }, () =>
    Array.from({ length: numStrings }, () => null)
  );
}

export { getEmptyFretboard };
