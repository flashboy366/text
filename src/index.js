import './index.css';
import store from './redux/store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(() => {
    renderTree(store.getState())
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
