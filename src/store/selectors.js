import { createSelector } from "@reduxjs/toolkit";

const getState = (state) => state;

export const timersSelector = createSelector(
  getState,
  (state) => state.timers.timers
);
