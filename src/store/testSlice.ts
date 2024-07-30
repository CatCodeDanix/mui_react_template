import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "test",
  initialState: null,
  reducers: {
    testAction: (state, action) => {},
  },
});

export default slice.reducer;

export const { testAction } = slice.actions;
