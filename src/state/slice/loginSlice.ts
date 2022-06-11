import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleLogin(state) {
      return !state;
    },
  },
});

export const { toggleLogin } = loginSlice.actions;

export default loginSlice.reducer;
