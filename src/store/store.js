import { configureStore } from "@reduxjs/toolkit";
import TimersSlice from "./slices/TimersSlice";

const store = configureStore({
  reducer: {
    timers: TimersSlice,
  },
});

export default store;
