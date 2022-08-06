import {createStore} from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREASE = 'INCREASE';
export const TOGGLESHOW = 'TOGGLESHOW';

const initState = {counter: 0, toggleShow: true};

createSlice({
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
            state.counter += action.amount;
        },
        toggleShow(state) {
            state.toggleShow = !state.toggleShow;
        }
    }
})

const counterReducer = (state = initState, action) => {
    if(action.type === INCREMENT) {
        return {
            counter: state.counter + 1,
            toggleShow: state.toggleShow
        }
    }

    if(action.type === INCREASE) {
        return {
            counter: state.counter + action.amount,
            toggleShow: state.toggleShow
        }
    }

    if(action.type === DECREMENT) {
        return {
            counter: state.counter - 1,
            toggleShow: state.toggleShow
        }
    }

    if(action.type === TOGGLESHOW) {
        return {
            counter: state.counter,
            toggleShow: !state.toggleShow
        }
    }
    
    return state;
}

const store = createStore(counterReducer);

export default store;
