import { NoteStyle } from "../lib/types";

interface NoteStorage {
  get value(): string;
  get label(): string;
  get style(): NoteStyle;
  get isBarre(): boolean;
  get isHidden(): boolean;

  set label(str: string);
  set style(style: NoteStyle);

  hide(): void;
  unhide(): void;
}

interface NoteOptions {
  label?: string;
  style?: NoteStyle;
  isBarre?: boolean;
  isHidden?: boolean;
}

class Note implements NoteStorage {
  #label;
  #value;
  #style;
  #isBarre;
  #isHidden;

  constructor(value: string, options?: NoteOptions) {
    this.#value = value;
    this.#label = options?.label || value;
    this.#style = options?.style || "blue";
    this.#isBarre = options?.isBarre || false;
    this.#isHidden = options?.isHidden || false;
  }

  get label() {
    return this.#label;
  }

  set label(str: string) {
    this.#label = str;
  }

  get value() {
    return this.#value;
  }

  get style() {
    return this.#style;
  }

  set style(style: NoteStyle) {
    this.#style = style;
  }

  get isBarre() {
    return this.#isBarre;
  }

  get isHidden() {
    return this.#isHidden;
  }

  hide() {
    if (this.#isHidden) return;
    this.#isHidden = true;
  }

  unhide() {
    if (!this.#isHidden) return;
    this.#isHidden = false;
  }
}

export default Note;
