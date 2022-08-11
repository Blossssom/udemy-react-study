import { createSlice } from "@reduxjs/toolkit";

const initState = {counter: 0, toggleShow: true};

const counterSilce = createSlice({
    name: 'counter',
    // slice의 식별자 이름은 임의로 정할 수 있다.,
    initialState: initState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleShow(state) {
            state.toggleShow = !state.toggleShow;
        }
    }
});

export const counterActions = counterSilce.actions;
export default counterSilce;