import { createSlice } from "@reduxjs/toolkit";

const initState = {isAuthenticated: false}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;