import { createSlice } from "@reduxjs/toolkit";

const initState = { notification: null };

const uiReducer = createSlice({
    name: 'ui',
    initialState: initState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export const uiActions = uiReducer.actions;
export default uiReducer;