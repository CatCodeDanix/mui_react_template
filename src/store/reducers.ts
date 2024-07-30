import { combineReducers } from "@reduxjs/toolkit";
import testSlice from "./testSlice";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
  testCategory: testSlice,
  theme: themeSlice,
});

export default rootReducer;
