import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react'

import './assets/scssStyles/_global.scss'
import './assets/scssStyles/bootstrap-grid.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <PersistGate loading={null} persistor={persistor}>
                <App />

                </PersistGate>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
