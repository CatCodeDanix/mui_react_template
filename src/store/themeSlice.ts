import { createSlice } from "@reduxjs/toolkit";

const getLocalTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ?? "light";
};

const slice = createSlice({
  name: "theme",
  initialState: getLocalTheme,
  reducers: {
    change: (state, _) => {
      return state === "light" ? "dark" : "light";
    },
  },
});

export default slice.reducer;
export const { change } = slice.actions;
