import { createSlice } from "@reduxjs/toolkit";

import { generateFretboard, generatePentatonic } from "../../util/tuning";

const initialState = {
  // menu: "fretboard", // fretboard, pentatonics
  stringTunings: ["E", "A", "D", "G", "B", "E"],
  // fretboard: generateFretboard(),
  numFrets: 12,
  // noteFilter: "",
  pentShape: 1,
  tonality: "minor", // minor, major
};

const guitarSlice = createSlice({
  name: "guitar",
  initialState,
  reducers: {
    updateFretboard: {
      prepare({ view, pentShape, tonality, note }) {
        return { payload: { view, pentShape, tonality, note } };
      },
      reducer(state, action) {
        console.log(action.payload);
        if (action.payload.view === "all") {
          state.fretboard = generateFretboard(state.stringTunings);
        }

        if (action.payload.view === "pentatonics") {
          state.stringTunings = initialState.stringTunings;
          state.fretboard = generatePentatonic(
            action.payload.note,
            action.payload.pentShape,
            action.payload.tonality
          );
        }
      },
    },
    // setMenu(state, action) {
    //   if (state.menu === action.payload) return;

    //   state.menu = action.payload;

    //   if (action.payload === "fretboard") {
    //     state.fretTunings = generateTuning();
    //   }
    //   if (action.payload === "pentatonic") {
    //     state.stringTunings = initialState.stringTunings;
    //     state.fretTunings = generatePentatonic(
    //       state.noteFilter,
    //       state.pentShape,
    //       state.tonality
    //     );
    //   }
    // },
    updateStringTunings(state, action) {
      state.stringTunings = action.payload;
      state.fretboard = generateFretboard(state.stringTunings);
    },
    updateNumFrets(state, action) {
      state.numFrets = action.payload;
    },
    // addNoteFilter(state, action) {
    //   if (state.noteFilter === action.payload) {
    //     guitarSlice.caseReducers.removeNoteFilter(state);
    //     return;
    //   }

    //   state.noteFilter = action.payload;
    //   if (state.menu === "pentatonic")
    //     state.fretTunings = generatePentatonic(
    //       state.noteFilter,
    //       state.pentShape,
    //       state.tonality
    //     );
    // },
    // removeNoteFilter(state) {
    //   state.noteFilter = "";
    //   if (state.menu === "pentatonic") state.fretTunings = generatePentatonic();
    // },
    updatePentShape(state, action) {
      if (state.pentShape === action.payload) return;

      state.pentShape = action.payload;
      state.fretTunings = generatePentatonic(
        state.noteFilter,
        state.pentShape,
        state.tonality
      );
    },
    setTonality(state, action) {
      if (state.tonality === action.payload) return;

      state.tonality = action.payload;
      state.fretTunings = generatePentatonic(
        state.noteFilter,
        state.pentShape,
        state.tonality
      );
    },
  },
});

export const {
  updateFretboard,
  updateStringTunings,
  updateNumFrets,
  // addNoteFilter,
  // removeNoteFilter,
  updatePentShape,
  setTonality,
} = guitarSlice.actions;

// export const getMenu = (store) => store.guitar.menu;

export const getStringTunings = (store) => store.guitar.stringTunings;

export const getNumFrets = (store) => store.guitar.numFrets;

export const getFretboard = (store) => store.guitar.fretboard;

// export const getNoteFilter = (store) => store.guitar.noteFilter;

export default guitarSlice.reducer;
