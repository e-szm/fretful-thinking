import { URLSearchParamsInit } from "react-router-dom";
import Note from "../classes/Note";

// Guitar Types
export type GuitarFretboard = Array<Array<Note | null>>;
export type GuitarTuning = string[];
export type GuitarView = "all" | "pentatonics" | "chords";
export function isGuitarView(str: string): str is GuitarView {
  return ["all", "pentatonics", "chords"].includes(str);
}
export type GuitarTonality = "major" | "minor";
export function isGuitarTonality(str: string): str is GuitarTonality {
  return ["major", "minor"].includes(str);
}
export type NoteStyle = "none" | "blue" | "gold";

// Quiz Types
export type QuizStatuses = "idle" | "in-progress";

// URL Types
export interface GuitarURLParams {
  numFrets: number;
  tuning: GuitarTuning;
}
export interface GuitarURLQuery {
  view: GuitarView;
  note?: string;
  pentShape?: number;
  tonality?: GuitarTonality;
  root?: number;
}
export type setGuitarURLQuery = (
  nextInit: GuitarURLQuery | ((prev: URLSearchParams) => URLSearchParamsInit)
) => void;
