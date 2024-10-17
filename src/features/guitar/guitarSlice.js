import { createSlice } from "@reduxjs/toolkit";

import { generateTuning } from "../../util/tuning";

const initialState = {
  fretTunings: generateTuning(),
  numFrets: 6,
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
  },
});

export const { updateNumFrets, updateFretTunings } = guitarSlice.actions;

export const getNumFrets = (store) => store.guitar.numFrets;

export const getFretTunings = (store) => store.guitar.fretTunings;

export default guitarSlice.reducer;
