import { NoteStyle } from "../lib/types";

interface NoteStorage {
  get value(): string;
  get label(): string;
  get style(): NoteStyle;
  get isBarre(): boolean;
}

interface NoteOptions {
  label?: string;
  style?: NoteStyle;
  isBarre?: boolean;
}

class Note implements NoteStorage {
  #label;
  #value;
  #style;
  #isBarre;

  constructor(value: string, options?: NoteOptions) {
    this.#value = value;
    this.#label = options?.label || value;
    this.#style = options?.style || "blue";
    this.#isBarre = options?.isBarre || false;
  }

  get label() {
    return this.#label;
  }

  get value() {
    return this.#value;
  }

  get style() {
    return this.#style;
  }

  get isBarre() {
    return this.#isBarre;
  }
}

export default Note;
