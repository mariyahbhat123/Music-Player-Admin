import { createSlice } from "@reduxjs/toolkit";

const addMusicToggleInitialState = {
  addMusicToggle: false,
};

const ToggleAddMusic = createSlice({
  name: "ADD_MUSIC_TOGGLE",
  initialState: addMusicToggleInitialState,
  reducers: {
    addMusicToggleOn: (state) => {
      state.addMusicToggle = true;
    },
    addMusicToggleOff: (state) => {
      state.addMusicToggle = false;
    },
  },
});

export const { addMusicToggleOn, addMusicToggleOff } = ToggleAddMusic.actions;
export default ToggleAddMusic.reducer;
