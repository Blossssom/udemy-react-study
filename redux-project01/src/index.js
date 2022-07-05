import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        {/* 제공자(Provider)에 저장소를 지정 */}
        <App />
    </Provider>, 
    document.getElementById('root')
);

// 가장 상위 component인 index.js에서 렌더링할 component를 Provider로 감싼다.
