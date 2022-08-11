import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import dummyReducer from '../reducers/dummy';
import uiReducer from '../reducers/uiReducers';

const store = configureStore({
    reducer: {
        cart: cartReducer.reducer,
        ui: uiReducer.reducer
    },
});

export default store;