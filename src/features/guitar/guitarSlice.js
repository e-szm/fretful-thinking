import { createSlice } from "@reduxjs/toolkit";

import { generateTuning } from "../../util/tuning";

const initialState = {
  fretTunings: generateTuning(),
  numFrets: 6,
  noteFilter: "",
};

const guitarSlice = createSlice({
  name: "guitar",
  initialState,
  reducers: {
    updateNumFrets(state, action) {
      state.numFrets = action.payload;
    },
    updateFretTunings(state, action) {
      state.fretTunings = action.payload;
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
  updateNumFrets,
  updateFretTunings,
  addNoteFilter,
  removeNoteFilter,
} = guitarSlice.actions;

export const getNumFrets = (store) => store.guitar.numFrets;

export const getFretTunings = (store) => store.guitar.fretTunings;

export const getNoteFilter = (store) => store.guitar.noteFilter;

export default guitarSlice.reducer;
