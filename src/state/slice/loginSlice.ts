import { createSlice } from "@reduxjs/toolkit";


type authType = {
    user?: string,
    isLoggedIn?: boolean
}

const initialState: authType = {}

const loginSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setLogIn(state) {
            return { ...state, isLoggedIn: true };
        },
        setLogOut(state) {
            return { ...state, isLoggedIn: false }
        },
        setLoggedUser(state, action) {
            return { ...state, user: action.payload }
        }
    },
});

export const { setLogIn, setLogOut, setLoggedUser } = loginSlice.actions;

export default loginSlice.reducer;

export type { authType }
