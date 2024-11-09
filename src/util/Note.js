class Note {
  constructor(
    note,
    isRoot = false,
    isBarre = false,
    hidden = false,
    inScale = true
  ) {
    this.note = note;
    this.isRoot = isRoot;
    this.isBarre = isBarre;
    this.hidden = hidden;
    this.inScale = inScale;

    this.value = note;
  }
}

export default Note;
