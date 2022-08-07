import { createSlice, configureStore } from '@reduxjs/toolkit';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREASE = 'INCREASE';
export const TOGGLESHOW = 'TOGGLESHOW';

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
})



const store = configureStore({
    reducer: counterSilce.reducer
});

// configureStore로 여러 리듀서를 하나로 합칠 수 있다.

export const counterActions = counterSilce.actions;
export default store;
