import { createSlice } from "@reduxjs/toolkit";

import { generateTuning } from "../../util/tuning";

const initialState = {
  stringTunings: ["E", "A", "D", "G", "B", "E"],
  fretTunings: generateTuning(),
  numFrets: 6,
  noteFilter: "",
};

const guitarSlice = createSlice({
  name: "guitar",
  initialState,
  reducers: {
    updateStringTunings(state, action) {
      state.stringTunings = action.payload;
      state.fretTunings = generateTuning(state.stringTunings);
    },
    updateNumFrets(state, action) {
      state.numFrets = action.payload;
    },
    addNoteFilter(state, action) {
      if (state.noteFilter === action.payload) {
        guitarSlice.caseReducers.removeNoteFilter(state);
        return;
      }

      state.noteFilter = action.payload;
    },
    removeNoteFilter(state) {
      state.noteFilter = "";
    },
  },
});

export const {
  updateStringTunings,
  updateNumFrets,
  addNoteFilter,
  removeNoteFilter,
} = guitarSlice.actions;

export const getStringTunings = (store) => store.guitar.stringTunings;

export const getNumFrets = (store) => store.guitar.numFrets;

export const getFretTunings = (store) => store.guitar.fretTunings;

export const getNoteFilter = (store) => store.guitar.noteFilter;

export default guitarSlice.reducer;
