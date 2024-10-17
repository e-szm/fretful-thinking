import { configureStore } from "@reduxjs/toolkit";

import guitarReducer from "./features/guitar/guitarSlice";

const store = configureStore({
  reducer: {
    guitar: guitarReducer,
  },
});

export default store;
