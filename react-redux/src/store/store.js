import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterSilce from './counter';

const store = configureStore({
    reducer: {
        counter: counterSilce.reducer,
        auth: authSlice.reducer
    }
});
// configureStore로 여러 리듀서를 하나로 합칠 수 있다.

export default store;
