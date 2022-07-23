import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {AuthContextsProvider} from './store/authContext';

ReactDOM.render(
    <AuthContextsProvider>
        <App />
    </AuthContextsProvider>,
    // App 전체를 감싸 전역에서 사용하능하다. 
    document.getElementById('root'));
