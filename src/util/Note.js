class Note {
  constructor(note, isRoot = false, isBarre = false, hidden = false) {
    this.note = note;
    this.isRoot = isRoot;
    this.isBarre = isBarre;
    this.hidden = hidden;

    this.value = note;
  }
}

export default Note;
