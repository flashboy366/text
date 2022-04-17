import './index.css';
import state, {
    subscribe,
    addMessage,
    setNewMessageAdded,
    firstDialogLoadSet,
    typeInput,
    addPost, addLike
} from "./state/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}
                 addMessage={addMessage}
                 typeInput={typeInput}
                 setNewMessageAdded={setNewMessageAdded}
                 firstDialogLoadSet={firstDialogLoadSet}
                 addPost={addPost}
                 addLike={addLike}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(state)

subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
