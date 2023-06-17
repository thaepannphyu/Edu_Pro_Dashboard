import { configureStore } from "@reduxjs/toolkit";
import  themeSlice  from "./ThemeSlice";

export const store = configureStore({
  reducer: {
    themeSlice : themeSlice
  },
});
