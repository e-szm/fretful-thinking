import { GuitarTuning } from "../lib/types";

export default abstract class Constants {
  static readonly STD_FRETBOARD = [
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

  static readonly NOTES = [
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

  static readonly STD_TUNING: GuitarTuning = ["E", "A", "D", "G", "B", "E"];

  static readonly MIN_FRETS = 5;
  static readonly MAX_FRETS = 14;

  static readonly MIN_STRINGS = 3;
  static readonly MAX_STRINGS = 8;

  static readonly MIN_TIMER = 0;
  static readonly MAX_TIMER = 20;
}
