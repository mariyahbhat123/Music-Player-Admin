import { configureStore } from "@reduxjs/toolkit";
import ToggleAddMusic from "../Slices/ToggleAddMusic";

export const store = configureStore({
  reducer: {
    addMusicToggle: ToggleAddMusic,
  },
});
