import { createSlice } from "@reduxjs/toolkit";

const TimersSlice = createSlice({
  name: "timers",
  initialState: {
    timers: [],
  },
  reducers: {
    addTimer: (state, action) => {
      state.timers.push(action.payload);
    },
  },
});

export const { addTimer } = TimersSlice.actions;

export default TimersSlice.reducer;
