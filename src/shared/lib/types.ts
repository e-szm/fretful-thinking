import Note from "../classes/Note";

// Guitar Types
export type GuitarFretboard = Array<Array<Note | null>>;
export type GuitarTuning = string[];
export type GuitarView = "all" | "pentatonics" | "chords";
export type GuitarTonality = "major" | "minor";
export type NoteStyle = "blue" | "gold";

// Quiz Types
export type QuizStatuses = "idle" | "in-progress";
