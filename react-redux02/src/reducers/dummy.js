import { createSlice } from "@reduxjs/toolkit";

const initState = {count: 0};

const dummyReducer = createSlice({
    name: 'dummy',
    initialState: initState,
    reducers: {
        dummyFunc() {}
    }
});

export const dummyActions = dummyReducer.actions;
export default dummyReducer;