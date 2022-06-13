import { createSlice } from "@reduxjs/toolkit";


type authType = {
    user?: string,
    isLoggedIn?: boolean
    token?: string | null
}

const initialState: authType = {
    token: localStorage.getItem('token')
}

const loginSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setLogIn(state) {
            return { ...state, isLoggedIn: true }
        },
        setLogOut(state) {
            return { ...state, isLoggedIn: false }
        },
        setLoggedUser(state, action) {
            return { ...state, user: action.payload }
        },
        setSessionToken(state, action) {
            return { ...state, token: action.payload }
        }
    },
});

export const { setLogIn, setLogOut, setLoggedUser, setSessionToken } = loginSlice.actions;

export default loginSlice.reducer;

export type { authType }
